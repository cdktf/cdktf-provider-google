# `bigqueryTable` Submodule <a name="`bigqueryTable` Submodule" id="@cdktf/provider-google.bigqueryTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryTable <a name="BigqueryTable" id="@cdktf/provider-google.bigqueryTable.BigqueryTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table google_bigquery_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTable(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset_id: str,
  table_id: str,
  clustering: typing.List[str] = None,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  description: str = None,
  encryption_configuration: BigqueryTableEncryptionConfiguration = None,
  expiration_time: typing.Union[int, float] = None,
  external_data_configuration: BigqueryTableExternalDataConfiguration = None,
  friendly_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  materialized_view: BigqueryTableMaterializedView = None,
  max_staleness: str = None,
  project: str = None,
  range_partitioning: BigqueryTableRangePartitioning = None,
  require_partition_filter: typing.Union[bool, IResolvable] = None,
  schema: str = None,
  table_constraints: BigqueryTableTableConstraints = None,
  table_replication_info: BigqueryTableTableReplicationInfo = None,
  time_partitioning: BigqueryTableTimePartitioning = None,
  view: BigqueryTableView = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.datasetId">dataset_id</a></code> | <code>str</code> | The dataset ID to create the table in. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.tableId">table_id</a></code> | <code>str</code> | A unique ID for the resource. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.clustering">clustering</a></code> | <code>typing.List[str]</code> | Specifies column names to use for data clustering. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.description">description</a></code> | <code>str</code> | The field description. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration">BigqueryTableEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.expirationTime">expiration_time</a></code> | <code>typing.Union[int, float]</code> | The time when this table expires, in milliseconds since the epoch. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.externalDataConfiguration">external_data_configuration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration">BigqueryTableExternalDataConfiguration</a></code> | external_data_configuration block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.friendlyName">friendly_name</a></code> | <code>str</code> | A descriptive name for the table. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#id BigqueryTable#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A mapping of labels to assign to the resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.materializedView">materialized_view</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView">BigqueryTableMaterializedView</a></code> | materialized_view block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.maxStaleness">max_staleness</a></code> | <code>str</code> | The maximum staleness of data that could be returned when the table (or stale MV) is queried. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.rangePartitioning">range_partitioning</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a></code> | range_partitioning block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.requirePartitionFilter">require_partition_filter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.schema">schema</a></code> | <code>str</code> | A JSON schema for the table. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.tableConstraints">table_constraints</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints">BigqueryTableTableConstraints</a></code> | table_constraints block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.tableReplicationInfo">table_replication_info</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo">BigqueryTableTableReplicationInfo</a></code> | table_replication_info block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.timePartitioning">time_partitioning</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning">BigqueryTableTimePartitioning</a></code> | time_partitioning block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.view">view</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView">BigqueryTableView</a></code> | view block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.datasetId"></a>

- *Type:* str

The dataset ID to create the table in. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#dataset_id BigqueryTable#dataset_id}

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.tableId"></a>

- *Type:* str

A unique ID for the resource. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#table_id BigqueryTable#table_id}

---

##### `clustering`<sup>Optional</sup> <a name="clustering" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.clustering"></a>

- *Type:* typing.List[str]

Specifies column names to use for data clustering.

Up to four top-level columns are allowed, and should be specified in descending priority order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#clustering BigqueryTable#clustering}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.deletionProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#deletion_protection BigqueryTable#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.description"></a>

- *Type:* str

The field description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#description BigqueryTable#description}

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration">BigqueryTableEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#encryption_configuration BigqueryTable#encryption_configuration}

---

##### `expiration_time`<sup>Optional</sup> <a name="expiration_time" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.expirationTime"></a>

- *Type:* typing.Union[int, float]

The time when this table expires, in milliseconds since the epoch.

If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#expiration_time BigqueryTable#expiration_time}

---

##### `external_data_configuration`<sup>Optional</sup> <a name="external_data_configuration" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.externalDataConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration">BigqueryTableExternalDataConfiguration</a>

external_data_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#external_data_configuration BigqueryTable#external_data_configuration}

---

##### `friendly_name`<sup>Optional</sup> <a name="friendly_name" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.friendlyName"></a>

- *Type:* str

A descriptive name for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#friendly_name BigqueryTable#friendly_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#id BigqueryTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A mapping of labels to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#labels BigqueryTable#labels}

---

##### `materialized_view`<sup>Optional</sup> <a name="materialized_view" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.materializedView"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView">BigqueryTableMaterializedView</a>

materialized_view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#materialized_view BigqueryTable#materialized_view}

---

##### `max_staleness`<sup>Optional</sup> <a name="max_staleness" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.maxStaleness"></a>

- *Type:* str

The maximum staleness of data that could be returned when the table (or stale MV) is queried.

Staleness encoded as a string encoding of [SQL IntervalValue type](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#interval_type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#max_staleness BigqueryTable#max_staleness}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#project BigqueryTable#project}

---

##### `range_partitioning`<sup>Optional</sup> <a name="range_partitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.rangePartitioning"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a>

range_partitioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#range_partitioning BigqueryTable#range_partitioning}

---

##### `require_partition_filter`<sup>Optional</sup> <a name="require_partition_filter" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.requirePartitionFilter"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#require_partition_filter BigqueryTable#require_partition_filter}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.schema"></a>

- *Type:* str

A JSON schema for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#schema BigqueryTable#schema}

---

##### `table_constraints`<sup>Optional</sup> <a name="table_constraints" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.tableConstraints"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints">BigqueryTableTableConstraints</a>

table_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#table_constraints BigqueryTable#table_constraints}

---

##### `table_replication_info`<sup>Optional</sup> <a name="table_replication_info" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.tableReplicationInfo"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo">BigqueryTableTableReplicationInfo</a>

table_replication_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#table_replication_info BigqueryTable#table_replication_info}

---

##### `time_partitioning`<sup>Optional</sup> <a name="time_partitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.timePartitioning"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning">BigqueryTableTimePartitioning</a>

time_partitioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#time_partitioning BigqueryTable#time_partitioning}

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.view"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView">BigqueryTableView</a>

view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#view BigqueryTable#view}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration">put_external_data_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putMaterializedView">put_materialized_view</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putRangePartitioning">put_range_partitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putTableConstraints">put_table_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putTableReplicationInfo">put_table_replication_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putTimePartitioning">put_time_partitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putView">put_view</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetClustering">reset_clustering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetEncryptionConfiguration">reset_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetExpirationTime">reset_expiration_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetExternalDataConfiguration">reset_external_data_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetFriendlyName">reset_friendly_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetMaterializedView">reset_materialized_view</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetMaxStaleness">reset_max_staleness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetRangePartitioning">reset_range_partitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetRequirePartitionFilter">reset_require_partition_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetSchema">reset_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetTableConstraints">reset_table_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetTableReplicationInfo">reset_table_replication_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetTimePartitioning">reset_time_partitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetView">reset_view</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_configuration` <a name="put_encryption_configuration" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putEncryptionConfiguration"></a>

```python
def put_encryption_configuration(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putEncryptionConfiguration.parameter.kmsKeyName"></a>

- *Type:* str

The self link or full name of a key which should be used to encrypt this table.

Note that the default bigquery service account will need to have encrypt/decrypt permissions on this key - you may want to see the google_bigquery_default_service_account datasource and the google_kms_crypto_key_iam_binding resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#kms_key_name BigqueryTable#kms_key_name}

---

##### `put_external_data_configuration` <a name="put_external_data_configuration" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration"></a>

```python
def put_external_data_configuration(
  autodetect: typing.Union[bool, IResolvable],
  source_uris: typing.List[str],
  avro_options: BigqueryTableExternalDataConfigurationAvroOptions = None,
  compression: str = None,
  connection_id: str = None,
  csv_options: BigqueryTableExternalDataConfigurationCsvOptions = None,
  file_set_spec_type: str = None,
  google_sheets_options: BigqueryTableExternalDataConfigurationGoogleSheetsOptions = None,
  hive_partitioning_options: BigqueryTableExternalDataConfigurationHivePartitioningOptions = None,
  ignore_unknown_values: typing.Union[bool, IResolvable] = None,
  json_options: BigqueryTableExternalDataConfigurationJsonOptions = None,
  max_bad_records: typing.Union[int, float] = None,
  metadata_cache_mode: str = None,
  object_metadata: str = None,
  parquet_options: BigqueryTableExternalDataConfigurationParquetOptions = None,
  reference_file_schema_uri: str = None,
  schema: str = None,
  source_format: str = None
) -> None
```

###### `autodetect`<sup>Required</sup> <a name="autodetect" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.autodetect"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Let BigQuery try to autodetect the schema and format of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#autodetect BigqueryTable#autodetect}

---

###### `source_uris`<sup>Required</sup> <a name="source_uris" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.sourceUris"></a>

- *Type:* typing.List[str]

A list of the fully-qualified URIs that point to your data in Google Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#source_uris BigqueryTable#source_uris}

---

###### `avro_options`<sup>Optional</sup> <a name="avro_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.avroOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions">BigqueryTableExternalDataConfigurationAvroOptions</a>

avro_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#avro_options BigqueryTable#avro_options}

---

###### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.compression"></a>

- *Type:* str

The compression type of the data source. Valid values are "NONE" or "GZIP".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#compression BigqueryTable#compression}

---

###### `connection_id`<sup>Optional</sup> <a name="connection_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.connectionId"></a>

- *Type:* str

The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3.

The connectionId can have the form "{{project}}.{{location}}.{{connection_id}}" or "projects/{{project}}/locations/{{location}}/connections/{{connection_id}}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#connection_id BigqueryTable#connection_id}

---

###### `csv_options`<sup>Optional</sup> <a name="csv_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.csvOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions">BigqueryTableExternalDataConfigurationCsvOptions</a>

csv_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#csv_options BigqueryTable#csv_options}

---

###### `file_set_spec_type`<sup>Optional</sup> <a name="file_set_spec_type" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.fileSetSpecType"></a>

- *Type:* str

Specifies how source URIs are interpreted for constructing the file set to load.

By default source URIs are expanded against the underlying storage.  Other options include specifying manifest files. Only applicable to object storage systems.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#file_set_spec_type BigqueryTable#file_set_spec_type}

---

###### `google_sheets_options`<sup>Optional</sup> <a name="google_sheets_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.googleSheetsOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions">BigqueryTableExternalDataConfigurationGoogleSheetsOptions</a>

google_sheets_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#google_sheets_options BigqueryTable#google_sheets_options}

---

###### `hive_partitioning_options`<sup>Optional</sup> <a name="hive_partitioning_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.hivePartitioningOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions">BigqueryTableExternalDataConfigurationHivePartitioningOptions</a>

hive_partitioning_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#hive_partitioning_options BigqueryTable#hive_partitioning_options}

---

###### `ignore_unknown_values`<sup>Optional</sup> <a name="ignore_unknown_values" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.ignoreUnknownValues"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if BigQuery should allow extra values that are not represented in the table schema.

If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#ignore_unknown_values BigqueryTable#ignore_unknown_values}

---

###### `json_options`<sup>Optional</sup> <a name="json_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.jsonOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions">BigqueryTableExternalDataConfigurationJsonOptions</a>

json_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#json_options BigqueryTable#json_options}

---

###### `max_bad_records`<sup>Optional</sup> <a name="max_bad_records" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.maxBadRecords"></a>

- *Type:* typing.Union[int, float]

The maximum number of bad records that BigQuery can ignore when reading data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#max_bad_records BigqueryTable#max_bad_records}

---

###### `metadata_cache_mode`<sup>Optional</sup> <a name="metadata_cache_mode" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.metadataCacheMode"></a>

- *Type:* str

Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#metadata_cache_mode BigqueryTable#metadata_cache_mode}

---

###### `object_metadata`<sup>Optional</sup> <a name="object_metadata" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.objectMetadata"></a>

- *Type:* str

Object Metadata is used to create Object Tables.

Object Tables contain a listing of objects (with their metadata) found at the sourceUris. If ObjectMetadata is set, sourceFormat should be omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#object_metadata BigqueryTable#object_metadata}

---

###### `parquet_options`<sup>Optional</sup> <a name="parquet_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.parquetOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions">BigqueryTableExternalDataConfigurationParquetOptions</a>

parquet_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#parquet_options BigqueryTable#parquet_options}

---

###### `reference_file_schema_uri`<sup>Optional</sup> <a name="reference_file_schema_uri" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.referenceFileSchemaUri"></a>

- *Type:* str

When creating an external table, the user can provide a reference file with the table schema.

This is enabled for the following formats: AVRO, PARQUET, ORC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#reference_file_schema_uri BigqueryTable#reference_file_schema_uri}

---

###### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.schema"></a>

- *Type:* str

A JSON schema for the external table.

Schema is required for CSV and JSON formats and is disallowed for Google Cloud Bigtable, Cloud Datastore backups, and Avro formats when using external tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#schema BigqueryTable#schema}

---

###### `source_format`<sup>Optional</sup> <a name="source_format" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.sourceFormat"></a>

- *Type:* str

Please see sourceFormat under ExternalDataConfiguration in Bigquery's public API documentation (https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#externaldataconfiguration) for supported formats. To use "GOOGLE_SHEETS" the scopes must include "googleapis.com/auth/drive.readonly".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#source_format BigqueryTable#source_format}

---

##### `put_materialized_view` <a name="put_materialized_view" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putMaterializedView"></a>

```python
def put_materialized_view(
  query: str,
  allow_non_incremental_definition: typing.Union[bool, IResolvable] = None,
  enable_refresh: typing.Union[bool, IResolvable] = None,
  refresh_interval_ms: typing.Union[int, float] = None
) -> None
```

###### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putMaterializedView.parameter.query"></a>

- *Type:* str

A query whose result is persisted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#query BigqueryTable#query}

---

###### `allow_non_incremental_definition`<sup>Optional</sup> <a name="allow_non_incremental_definition" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putMaterializedView.parameter.allowNonIncrementalDefinition"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow non incremental materialized view definition. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#allow_non_incremental_definition BigqueryTable#allow_non_incremental_definition}

---

###### `enable_refresh`<sup>Optional</sup> <a name="enable_refresh" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putMaterializedView.parameter.enableRefresh"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if BigQuery should automatically refresh materialized view when the base table is updated. The default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#enable_refresh BigqueryTable#enable_refresh}

---

###### `refresh_interval_ms`<sup>Optional</sup> <a name="refresh_interval_ms" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putMaterializedView.parameter.refreshIntervalMs"></a>

- *Type:* typing.Union[int, float]

Specifies maximum frequency at which this materialized view will be refreshed. The default is 1800000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#refresh_interval_ms BigqueryTable#refresh_interval_ms}

---

##### `put_range_partitioning` <a name="put_range_partitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putRangePartitioning"></a>

```python
def put_range_partitioning(
  field: str,
  range: BigqueryTableRangePartitioningRange
) -> None
```

###### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putRangePartitioning.parameter.field"></a>

- *Type:* str

The field used to determine how to create a range-based partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#field BigqueryTable#field}

---

###### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putRangePartitioning.parameter.range"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange">BigqueryTableRangePartitioningRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#range BigqueryTable#range}

---

##### `put_table_constraints` <a name="put_table_constraints" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTableConstraints"></a>

```python
def put_table_constraints(
  foreign_keys: typing.Union[IResolvable, typing.List[BigqueryTableTableConstraintsForeignKeys]] = None,
  primary_key: BigqueryTableTableConstraintsPrimaryKey = None
) -> None
```

###### `foreign_keys`<sup>Optional</sup> <a name="foreign_keys" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTableConstraints.parameter.foreignKeys"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys">BigqueryTableTableConstraintsForeignKeys</a>]]

foreign_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#foreign_keys BigqueryTable#foreign_keys}

---

###### `primary_key`<sup>Optional</sup> <a name="primary_key" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTableConstraints.parameter.primaryKey"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey">BigqueryTableTableConstraintsPrimaryKey</a>

primary_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#primary_key BigqueryTable#primary_key}

---

##### `put_table_replication_info` <a name="put_table_replication_info" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTableReplicationInfo"></a>

```python
def put_table_replication_info(
  source_dataset_id: str,
  source_project_id: str,
  source_table_id: str,
  replication_interval_ms: typing.Union[int, float] = None
) -> None
```

###### `source_dataset_id`<sup>Required</sup> <a name="source_dataset_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTableReplicationInfo.parameter.sourceDatasetId"></a>

- *Type:* str

The ID of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#source_dataset_id BigqueryTable#source_dataset_id}

---

###### `source_project_id`<sup>Required</sup> <a name="source_project_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTableReplicationInfo.parameter.sourceProjectId"></a>

- *Type:* str

The ID of the source project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#source_project_id BigqueryTable#source_project_id}

---

###### `source_table_id`<sup>Required</sup> <a name="source_table_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTableReplicationInfo.parameter.sourceTableId"></a>

- *Type:* str

The ID of the source materialized view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#source_table_id BigqueryTable#source_table_id}

---

###### `replication_interval_ms`<sup>Optional</sup> <a name="replication_interval_ms" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTableReplicationInfo.parameter.replicationIntervalMs"></a>

- *Type:* typing.Union[int, float]

The interval at which the source materialized view is polled for updates. The default is 300000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#replication_interval_ms BigqueryTable#replication_interval_ms}

---

##### `put_time_partitioning` <a name="put_time_partitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTimePartitioning"></a>

```python
def put_time_partitioning(
  type: str,
  expiration_ms: typing.Union[int, float] = None,
  field: str = None,
  require_partition_filter: typing.Union[bool, IResolvable] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTimePartitioning.parameter.type"></a>

- *Type:* str

The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#type BigqueryTable#type}

---

###### `expiration_ms`<sup>Optional</sup> <a name="expiration_ms" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTimePartitioning.parameter.expirationMs"></a>

- *Type:* typing.Union[int, float]

Number of milliseconds for which to keep the storage for a partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#expiration_ms BigqueryTable#expiration_ms}

---

###### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTimePartitioning.parameter.field"></a>

- *Type:* str

The field used to determine how to create a time-based partition.

If time-based partitioning is enabled without this value, the table is partitioned based on the load time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#field BigqueryTable#field}

---

###### `require_partition_filter`<sup>Optional</sup> <a name="require_partition_filter" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTimePartitioning.parameter.requirePartitionFilter"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#require_partition_filter BigqueryTable#require_partition_filter}

---

##### `put_view` <a name="put_view" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putView"></a>

```python
def put_view(
  query: str,
  use_legacy_sql: typing.Union[bool, IResolvable] = None
) -> None
```

###### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putView.parameter.query"></a>

- *Type:* str

A query that BigQuery executes when the view is referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#query BigqueryTable#query}

---

###### `use_legacy_sql`<sup>Optional</sup> <a name="use_legacy_sql" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putView.parameter.useLegacySql"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to use BigQuery's legacy SQL for this view.

The default value is true. If set to false, the view will use BigQuery's standard SQL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#use_legacy_sql BigqueryTable#use_legacy_sql}

---

##### `reset_clustering` <a name="reset_clustering" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetClustering"></a>

```python
def reset_clustering() -> None
```

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encryption_configuration` <a name="reset_encryption_configuration" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetEncryptionConfiguration"></a>

```python
def reset_encryption_configuration() -> None
```

##### `reset_expiration_time` <a name="reset_expiration_time" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetExpirationTime"></a>

```python
def reset_expiration_time() -> None
```

##### `reset_external_data_configuration` <a name="reset_external_data_configuration" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetExternalDataConfiguration"></a>

```python
def reset_external_data_configuration() -> None
```

##### `reset_friendly_name` <a name="reset_friendly_name" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetFriendlyName"></a>

```python
def reset_friendly_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_materialized_view` <a name="reset_materialized_view" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetMaterializedView"></a>

```python
def reset_materialized_view() -> None
```

##### `reset_max_staleness` <a name="reset_max_staleness" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetMaxStaleness"></a>

```python
def reset_max_staleness() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_range_partitioning` <a name="reset_range_partitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetRangePartitioning"></a>

```python
def reset_range_partitioning() -> None
```

##### `reset_require_partition_filter` <a name="reset_require_partition_filter" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetRequirePartitionFilter"></a>

```python
def reset_require_partition_filter() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetSchema"></a>

```python
def reset_schema() -> None
```

##### `reset_table_constraints` <a name="reset_table_constraints" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetTableConstraints"></a>

```python
def reset_table_constraints() -> None
```

##### `reset_table_replication_info` <a name="reset_table_replication_info" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetTableReplicationInfo"></a>

```python
def reset_table_replication_info() -> None
```

##### `reset_time_partitioning` <a name="reset_time_partitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetTimePartitioning"></a>

```python
def reset_time_partitioning() -> None
```

##### `reset_view` <a name="reset_view" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetView"></a>

```python
def reset_view() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BigqueryTable resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTable.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BigqueryTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BigqueryTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BigqueryTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference">BigqueryTableEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.externalDataConfiguration">external_data_configuration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference">BigqueryTableExternalDataConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.lastModifiedTime">last_modified_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.materializedView">materialized_view</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference">BigqueryTableMaterializedViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.numBytes">num_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.numLongTermBytes">num_long_term_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.numRows">num_rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.rangePartitioning">range_partitioning</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference">BigqueryTableRangePartitioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableConstraints">table_constraints</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference">BigqueryTableTableConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableReplicationInfo">table_replication_info</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference">BigqueryTableTableReplicationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.timePartitioning">time_partitioning</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference">BigqueryTableTimePartitioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.view">view</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference">BigqueryTableViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.clusteringInput">clustering_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.encryptionConfigurationInput">encryption_configuration_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration">BigqueryTableEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.expirationTimeInput">expiration_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.externalDataConfigurationInput">external_data_configuration_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration">BigqueryTableExternalDataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.friendlyNameInput">friendly_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.materializedViewInput">materialized_view_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView">BigqueryTableMaterializedView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.maxStalenessInput">max_staleness_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.rangePartitioningInput">range_partitioning_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.requirePartitionFilterInput">require_partition_filter_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableConstraintsInput">table_constraints_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints">BigqueryTableTableConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableIdInput">table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableReplicationInfoInput">table_replication_info_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo">BigqueryTableTableReplicationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.timePartitioningInput">time_partitioning_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning">BigqueryTableTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.viewInput">view_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView">BigqueryTableView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.clustering">clustering</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.expirationTime">expiration_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.friendlyName">friendly_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.maxStaleness">max_staleness</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.requirePartitionFilter">require_partition_filter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.encryptionConfiguration"></a>

```python
encryption_configuration: BigqueryTableEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference">BigqueryTableEncryptionConfigurationOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `external_data_configuration`<sup>Required</sup> <a name="external_data_configuration" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.externalDataConfiguration"></a>

```python
external_data_configuration: BigqueryTableExternalDataConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference">BigqueryTableExternalDataConfigurationOutputReference</a>

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.lastModifiedTime"></a>

```python
last_modified_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `materialized_view`<sup>Required</sup> <a name="materialized_view" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.materializedView"></a>

```python
materialized_view: BigqueryTableMaterializedViewOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference">BigqueryTableMaterializedViewOutputReference</a>

---

##### `num_bytes`<sup>Required</sup> <a name="num_bytes" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.numBytes"></a>

```python
num_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_long_term_bytes`<sup>Required</sup> <a name="num_long_term_bytes" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.numLongTermBytes"></a>

```python
num_long_term_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_rows`<sup>Required</sup> <a name="num_rows" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.numRows"></a>

```python
num_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `range_partitioning`<sup>Required</sup> <a name="range_partitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.rangePartitioning"></a>

```python
range_partitioning: BigqueryTableRangePartitioningOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference">BigqueryTableRangePartitioningOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `table_constraints`<sup>Required</sup> <a name="table_constraints" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableConstraints"></a>

```python
table_constraints: BigqueryTableTableConstraintsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference">BigqueryTableTableConstraintsOutputReference</a>

---

##### `table_replication_info`<sup>Required</sup> <a name="table_replication_info" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableReplicationInfo"></a>

```python
table_replication_info: BigqueryTableTableReplicationInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference">BigqueryTableTableReplicationInfoOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_partitioning`<sup>Required</sup> <a name="time_partitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.timePartitioning"></a>

```python
time_partitioning: BigqueryTableTimePartitioningOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference">BigqueryTableTimePartitioningOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.view"></a>

```python
view: BigqueryTableViewOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference">BigqueryTableViewOutputReference</a>

---

##### `clustering_input`<sup>Optional</sup> <a name="clustering_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.clusteringInput"></a>

```python
clustering_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.deletionProtectionInput"></a>

```python
deletion_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `encryption_configuration_input`<sup>Optional</sup> <a name="encryption_configuration_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.encryptionConfigurationInput"></a>

```python
encryption_configuration_input: BigqueryTableEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration">BigqueryTableEncryptionConfiguration</a>

---

##### `expiration_time_input`<sup>Optional</sup> <a name="expiration_time_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.expirationTimeInput"></a>

```python
expiration_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `external_data_configuration_input`<sup>Optional</sup> <a name="external_data_configuration_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.externalDataConfigurationInput"></a>

```python
external_data_configuration_input: BigqueryTableExternalDataConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration">BigqueryTableExternalDataConfiguration</a>

---

##### `friendly_name_input`<sup>Optional</sup> <a name="friendly_name_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.friendlyNameInput"></a>

```python
friendly_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `materialized_view_input`<sup>Optional</sup> <a name="materialized_view_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.materializedViewInput"></a>

```python
materialized_view_input: BigqueryTableMaterializedView
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView">BigqueryTableMaterializedView</a>

---

##### `max_staleness_input`<sup>Optional</sup> <a name="max_staleness_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.maxStalenessInput"></a>

```python
max_staleness_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `range_partitioning_input`<sup>Optional</sup> <a name="range_partitioning_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.rangePartitioningInput"></a>

```python
range_partitioning_input: BigqueryTableRangePartitioning
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a>

---

##### `require_partition_filter_input`<sup>Optional</sup> <a name="require_partition_filter_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.requirePartitionFilterInput"></a>

```python
require_partition_filter_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `table_constraints_input`<sup>Optional</sup> <a name="table_constraints_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableConstraintsInput"></a>

```python
table_constraints_input: BigqueryTableTableConstraints
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints">BigqueryTableTableConstraints</a>

---

##### `table_id_input`<sup>Optional</sup> <a name="table_id_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableIdInput"></a>

```python
table_id_input: str
```

- *Type:* str

---

##### `table_replication_info_input`<sup>Optional</sup> <a name="table_replication_info_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableReplicationInfoInput"></a>

```python
table_replication_info_input: BigqueryTableTableReplicationInfo
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo">BigqueryTableTableReplicationInfo</a>

---

##### `time_partitioning_input`<sup>Optional</sup> <a name="time_partitioning_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.timePartitioningInput"></a>

```python
time_partitioning_input: BigqueryTableTimePartitioning
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning">BigqueryTableTimePartitioning</a>

---

##### `view_input`<sup>Optional</sup> <a name="view_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.viewInput"></a>

```python
view_input: BigqueryTableView
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView">BigqueryTableView</a>

---

##### `clustering`<sup>Required</sup> <a name="clustering" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.clustering"></a>

```python
clustering: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expiration_time`<sup>Required</sup> <a name="expiration_time" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.expirationTime"></a>

```python
expiration_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `friendly_name`<sup>Required</sup> <a name="friendly_name" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.friendlyName"></a>

```python
friendly_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `max_staleness`<sup>Required</sup> <a name="max_staleness" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.maxStaleness"></a>

```python
max_staleness: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `require_partition_filter`<sup>Required</sup> <a name="require_partition_filter" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.requirePartitionFilter"></a>

```python
require_partition_filter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryTableConfig <a name="BigqueryTableConfig" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset_id: str,
  table_id: str,
  clustering: typing.List[str] = None,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  description: str = None,
  encryption_configuration: BigqueryTableEncryptionConfiguration = None,
  expiration_time: typing.Union[int, float] = None,
  external_data_configuration: BigqueryTableExternalDataConfiguration = None,
  friendly_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  materialized_view: BigqueryTableMaterializedView = None,
  max_staleness: str = None,
  project: str = None,
  range_partitioning: BigqueryTableRangePartitioning = None,
  require_partition_filter: typing.Union[bool, IResolvable] = None,
  schema: str = None,
  table_constraints: BigqueryTableTableConstraints = None,
  table_replication_info: BigqueryTableTableReplicationInfo = None,
  time_partitioning: BigqueryTableTimePartitioning = None,
  view: BigqueryTableView = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.datasetId">dataset_id</a></code> | <code>str</code> | The dataset ID to create the table in. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.tableId">table_id</a></code> | <code>str</code> | A unique ID for the resource. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.clustering">clustering</a></code> | <code>typing.List[str]</code> | Specifies column names to use for data clustering. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.description">description</a></code> | <code>str</code> | The field description. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration">BigqueryTableEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.expirationTime">expiration_time</a></code> | <code>typing.Union[int, float]</code> | The time when this table expires, in milliseconds since the epoch. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.externalDataConfiguration">external_data_configuration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration">BigqueryTableExternalDataConfiguration</a></code> | external_data_configuration block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.friendlyName">friendly_name</a></code> | <code>str</code> | A descriptive name for the table. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#id BigqueryTable#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A mapping of labels to assign to the resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.materializedView">materialized_view</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView">BigqueryTableMaterializedView</a></code> | materialized_view block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.maxStaleness">max_staleness</a></code> | <code>str</code> | The maximum staleness of data that could be returned when the table (or stale MV) is queried. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.rangePartitioning">range_partitioning</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a></code> | range_partitioning block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.requirePartitionFilter">require_partition_filter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.schema">schema</a></code> | <code>str</code> | A JSON schema for the table. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.tableConstraints">table_constraints</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints">BigqueryTableTableConstraints</a></code> | table_constraints block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.tableReplicationInfo">table_replication_info</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo">BigqueryTableTableReplicationInfo</a></code> | table_replication_info block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.timePartitioning">time_partitioning</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning">BigqueryTableTimePartitioning</a></code> | time_partitioning block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.view">view</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView">BigqueryTableView</a></code> | view block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The dataset ID to create the table in. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#dataset_id BigqueryTable#dataset_id}

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

A unique ID for the resource. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#table_id BigqueryTable#table_id}

---

##### `clustering`<sup>Optional</sup> <a name="clustering" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.clustering"></a>

```python
clustering: typing.List[str]
```

- *Type:* typing.List[str]

Specifies column names to use for data clustering.

Up to four top-level columns are allowed, and should be specified in descending priority order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#clustering BigqueryTable#clustering}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#deletion_protection BigqueryTable#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The field description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#description BigqueryTable#description}

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.encryptionConfiguration"></a>

```python
encryption_configuration: BigqueryTableEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration">BigqueryTableEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#encryption_configuration BigqueryTable#encryption_configuration}

---

##### `expiration_time`<sup>Optional</sup> <a name="expiration_time" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.expirationTime"></a>

```python
expiration_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time when this table expires, in milliseconds since the epoch.

If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#expiration_time BigqueryTable#expiration_time}

---

##### `external_data_configuration`<sup>Optional</sup> <a name="external_data_configuration" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.externalDataConfiguration"></a>

```python
external_data_configuration: BigqueryTableExternalDataConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration">BigqueryTableExternalDataConfiguration</a>

external_data_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#external_data_configuration BigqueryTable#external_data_configuration}

---

##### `friendly_name`<sup>Optional</sup> <a name="friendly_name" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.friendlyName"></a>

```python
friendly_name: str
```

- *Type:* str

A descriptive name for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#friendly_name BigqueryTable#friendly_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#id BigqueryTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of labels to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#labels BigqueryTable#labels}

---

##### `materialized_view`<sup>Optional</sup> <a name="materialized_view" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.materializedView"></a>

```python
materialized_view: BigqueryTableMaterializedView
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView">BigqueryTableMaterializedView</a>

materialized_view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#materialized_view BigqueryTable#materialized_view}

---

##### `max_staleness`<sup>Optional</sup> <a name="max_staleness" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.maxStaleness"></a>

```python
max_staleness: str
```

- *Type:* str

The maximum staleness of data that could be returned when the table (or stale MV) is queried.

Staleness encoded as a string encoding of [SQL IntervalValue type](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#interval_type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#max_staleness BigqueryTable#max_staleness}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#project BigqueryTable#project}

---

##### `range_partitioning`<sup>Optional</sup> <a name="range_partitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.rangePartitioning"></a>

```python
range_partitioning: BigqueryTableRangePartitioning
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a>

range_partitioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#range_partitioning BigqueryTable#range_partitioning}

---

##### `require_partition_filter`<sup>Optional</sup> <a name="require_partition_filter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.requirePartitionFilter"></a>

```python
require_partition_filter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#require_partition_filter BigqueryTable#require_partition_filter}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

A JSON schema for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#schema BigqueryTable#schema}

---

##### `table_constraints`<sup>Optional</sup> <a name="table_constraints" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.tableConstraints"></a>

```python
table_constraints: BigqueryTableTableConstraints
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints">BigqueryTableTableConstraints</a>

table_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#table_constraints BigqueryTable#table_constraints}

---

##### `table_replication_info`<sup>Optional</sup> <a name="table_replication_info" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.tableReplicationInfo"></a>

```python
table_replication_info: BigqueryTableTableReplicationInfo
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo">BigqueryTableTableReplicationInfo</a>

table_replication_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#table_replication_info BigqueryTable#table_replication_info}

---

##### `time_partitioning`<sup>Optional</sup> <a name="time_partitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.timePartitioning"></a>

```python
time_partitioning: BigqueryTableTimePartitioning
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning">BigqueryTableTimePartitioning</a>

time_partitioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#time_partitioning BigqueryTable#time_partitioning}

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.view"></a>

```python
view: BigqueryTableView
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView">BigqueryTableView</a>

view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#view BigqueryTable#view}

---

### BigqueryTableEncryptionConfiguration <a name="BigqueryTableEncryptionConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableEncryptionConfiguration(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The self link or full name of a key which should be used to encrypt this table. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The self link or full name of a key which should be used to encrypt this table.

Note that the default bigquery service account will need to have encrypt/decrypt permissions on this key - you may want to see the google_bigquery_default_service_account datasource and the google_kms_crypto_key_iam_binding resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#kms_key_name BigqueryTable#kms_key_name}

---

### BigqueryTableExternalDataConfiguration <a name="BigqueryTableExternalDataConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableExternalDataConfiguration(
  autodetect: typing.Union[bool, IResolvable],
  source_uris: typing.List[str],
  avro_options: BigqueryTableExternalDataConfigurationAvroOptions = None,
  compression: str = None,
  connection_id: str = None,
  csv_options: BigqueryTableExternalDataConfigurationCsvOptions = None,
  file_set_spec_type: str = None,
  google_sheets_options: BigqueryTableExternalDataConfigurationGoogleSheetsOptions = None,
  hive_partitioning_options: BigqueryTableExternalDataConfigurationHivePartitioningOptions = None,
  ignore_unknown_values: typing.Union[bool, IResolvable] = None,
  json_options: BigqueryTableExternalDataConfigurationJsonOptions = None,
  max_bad_records: typing.Union[int, float] = None,
  metadata_cache_mode: str = None,
  object_metadata: str = None,
  parquet_options: BigqueryTableExternalDataConfigurationParquetOptions = None,
  reference_file_schema_uri: str = None,
  schema: str = None,
  source_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.autodetect">autodetect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Let BigQuery try to autodetect the schema and format of the table. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.sourceUris">source_uris</a></code> | <code>typing.List[str]</code> | A list of the fully-qualified URIs that point to your data in Google Cloud. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.avroOptions">avro_options</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions">BigqueryTableExternalDataConfigurationAvroOptions</a></code> | avro_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.compression">compression</a></code> | <code>str</code> | The compression type of the data source. Valid values are "NONE" or "GZIP". |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.connectionId">connection_id</a></code> | <code>str</code> | The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.csvOptions">csv_options</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions">BigqueryTableExternalDataConfigurationCsvOptions</a></code> | csv_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.fileSetSpecType">file_set_spec_type</a></code> | <code>str</code> | Specifies how source URIs are interpreted for constructing the file set to load. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.googleSheetsOptions">google_sheets_options</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions">BigqueryTableExternalDataConfigurationGoogleSheetsOptions</a></code> | google_sheets_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.hivePartitioningOptions">hive_partitioning_options</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions">BigqueryTableExternalDataConfigurationHivePartitioningOptions</a></code> | hive_partitioning_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.ignoreUnknownValues">ignore_unknown_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if BigQuery should allow extra values that are not represented in the table schema. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.jsonOptions">json_options</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions">BigqueryTableExternalDataConfigurationJsonOptions</a></code> | json_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.maxBadRecords">max_bad_records</a></code> | <code>typing.Union[int, float]</code> | The maximum number of bad records that BigQuery can ignore when reading data. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.metadataCacheMode">metadata_cache_mode</a></code> | <code>str</code> | Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.objectMetadata">object_metadata</a></code> | <code>str</code> | Object Metadata is used to create Object Tables. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.parquetOptions">parquet_options</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions">BigqueryTableExternalDataConfigurationParquetOptions</a></code> | parquet_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.referenceFileSchemaUri">reference_file_schema_uri</a></code> | <code>str</code> | When creating an external table, the user can provide a reference file with the table schema. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.schema">schema</a></code> | <code>str</code> | A JSON schema for the external table. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.sourceFormat">source_format</a></code> | <code>str</code> | Please see sourceFormat under ExternalDataConfiguration in Bigquery's public API documentation (https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#externaldataconfiguration) for supported formats. To use "GOOGLE_SHEETS" the scopes must include "googleapis.com/auth/drive.readonly". |

---

##### `autodetect`<sup>Required</sup> <a name="autodetect" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.autodetect"></a>

```python
autodetect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Let BigQuery try to autodetect the schema and format of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#autodetect BigqueryTable#autodetect}

---

##### `source_uris`<sup>Required</sup> <a name="source_uris" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.sourceUris"></a>

```python
source_uris: typing.List[str]
```

- *Type:* typing.List[str]

A list of the fully-qualified URIs that point to your data in Google Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#source_uris BigqueryTable#source_uris}

---

##### `avro_options`<sup>Optional</sup> <a name="avro_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.avroOptions"></a>

```python
avro_options: BigqueryTableExternalDataConfigurationAvroOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions">BigqueryTableExternalDataConfigurationAvroOptions</a>

avro_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#avro_options BigqueryTable#avro_options}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.compression"></a>

```python
compression: str
```

- *Type:* str

The compression type of the data source. Valid values are "NONE" or "GZIP".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#compression BigqueryTable#compression}

---

##### `connection_id`<sup>Optional</sup> <a name="connection_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3.

The connectionId can have the form "{{project}}.{{location}}.{{connection_id}}" or "projects/{{project}}/locations/{{location}}/connections/{{connection_id}}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#connection_id BigqueryTable#connection_id}

---

##### `csv_options`<sup>Optional</sup> <a name="csv_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.csvOptions"></a>

```python
csv_options: BigqueryTableExternalDataConfigurationCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions">BigqueryTableExternalDataConfigurationCsvOptions</a>

csv_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#csv_options BigqueryTable#csv_options}

---

##### `file_set_spec_type`<sup>Optional</sup> <a name="file_set_spec_type" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.fileSetSpecType"></a>

```python
file_set_spec_type: str
```

- *Type:* str

Specifies how source URIs are interpreted for constructing the file set to load.

By default source URIs are expanded against the underlying storage.  Other options include specifying manifest files. Only applicable to object storage systems.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#file_set_spec_type BigqueryTable#file_set_spec_type}

---

##### `google_sheets_options`<sup>Optional</sup> <a name="google_sheets_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.googleSheetsOptions"></a>

```python
google_sheets_options: BigqueryTableExternalDataConfigurationGoogleSheetsOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions">BigqueryTableExternalDataConfigurationGoogleSheetsOptions</a>

google_sheets_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#google_sheets_options BigqueryTable#google_sheets_options}

---

##### `hive_partitioning_options`<sup>Optional</sup> <a name="hive_partitioning_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.hivePartitioningOptions"></a>

```python
hive_partitioning_options: BigqueryTableExternalDataConfigurationHivePartitioningOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions">BigqueryTableExternalDataConfigurationHivePartitioningOptions</a>

hive_partitioning_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#hive_partitioning_options BigqueryTable#hive_partitioning_options}

---

##### `ignore_unknown_values`<sup>Optional</sup> <a name="ignore_unknown_values" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.ignoreUnknownValues"></a>

```python
ignore_unknown_values: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if BigQuery should allow extra values that are not represented in the table schema.

If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#ignore_unknown_values BigqueryTable#ignore_unknown_values}

---

##### `json_options`<sup>Optional</sup> <a name="json_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.jsonOptions"></a>

```python
json_options: BigqueryTableExternalDataConfigurationJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions">BigqueryTableExternalDataConfigurationJsonOptions</a>

json_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#json_options BigqueryTable#json_options}

---

##### `max_bad_records`<sup>Optional</sup> <a name="max_bad_records" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.maxBadRecords"></a>

```python
max_bad_records: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of bad records that BigQuery can ignore when reading data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#max_bad_records BigqueryTable#max_bad_records}

---

##### `metadata_cache_mode`<sup>Optional</sup> <a name="metadata_cache_mode" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.metadataCacheMode"></a>

```python
metadata_cache_mode: str
```

- *Type:* str

Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#metadata_cache_mode BigqueryTable#metadata_cache_mode}

---

##### `object_metadata`<sup>Optional</sup> <a name="object_metadata" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.objectMetadata"></a>

```python
object_metadata: str
```

- *Type:* str

Object Metadata is used to create Object Tables.

Object Tables contain a listing of objects (with their metadata) found at the sourceUris. If ObjectMetadata is set, sourceFormat should be omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#object_metadata BigqueryTable#object_metadata}

---

##### `parquet_options`<sup>Optional</sup> <a name="parquet_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.parquetOptions"></a>

```python
parquet_options: BigqueryTableExternalDataConfigurationParquetOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions">BigqueryTableExternalDataConfigurationParquetOptions</a>

parquet_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#parquet_options BigqueryTable#parquet_options}

---

##### `reference_file_schema_uri`<sup>Optional</sup> <a name="reference_file_schema_uri" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.referenceFileSchemaUri"></a>

```python
reference_file_schema_uri: str
```

- *Type:* str

When creating an external table, the user can provide a reference file with the table schema.

This is enabled for the following formats: AVRO, PARQUET, ORC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#reference_file_schema_uri BigqueryTable#reference_file_schema_uri}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.schema"></a>

```python
schema: str
```

- *Type:* str

A JSON schema for the external table.

Schema is required for CSV and JSON formats and is disallowed for Google Cloud Bigtable, Cloud Datastore backups, and Avro formats when using external tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#schema BigqueryTable#schema}

---

##### `source_format`<sup>Optional</sup> <a name="source_format" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.sourceFormat"></a>

```python
source_format: str
```

- *Type:* str

Please see sourceFormat under ExternalDataConfiguration in Bigquery's public API documentation (https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#externaldataconfiguration) for supported formats. To use "GOOGLE_SHEETS" the scopes must include "googleapis.com/auth/drive.readonly".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#source_format BigqueryTable#source_format}

---

### BigqueryTableExternalDataConfigurationAvroOptions <a name="BigqueryTableExternalDataConfigurationAvroOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions(
  use_avro_logical_types: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions.property.useAvroLogicalTypes">use_avro_logical_types</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER). |

---

##### `use_avro_logical_types`<sup>Required</sup> <a name="use_avro_logical_types" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions.property.useAvroLogicalTypes"></a>

```python
use_avro_logical_types: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#use_avro_logical_types BigqueryTable#use_avro_logical_types}

---

### BigqueryTableExternalDataConfigurationCsvOptions <a name="BigqueryTableExternalDataConfigurationCsvOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions(
  quote: str,
  allow_jagged_rows: typing.Union[bool, IResolvable] = None,
  allow_quoted_newlines: typing.Union[bool, IResolvable] = None,
  encoding: str = None,
  field_delimiter: str = None,
  skip_leading_rows: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.quote">quote</a></code> | <code>str</code> | The value that is used to quote data sections in a CSV file. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.allowJaggedRows">allow_jagged_rows</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if BigQuery should accept rows that are missing trailing optional columns. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.allowQuotedNewlines">allow_quoted_newlines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.encoding">encoding</a></code> | <code>str</code> | The character encoding of the data. The supported values are UTF-8 or ISO-8859-1. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | The separator for fields in a CSV file. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.skipLeadingRows">skip_leading_rows</a></code> | <code>typing.Union[int, float]</code> | The number of rows at the top of a CSV file that BigQuery will skip when reading the data. |

---

##### `quote`<sup>Required</sup> <a name="quote" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.quote"></a>

```python
quote: str
```

- *Type:* str

The value that is used to quote data sections in a CSV file.

If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allow_quoted_newlines property to true. The API-side default is ", specified in Terraform escaped as ". Due to limitations with Terraform default values, this value is required to be explicitly set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#quote BigqueryTable#quote}

---

##### `allow_jagged_rows`<sup>Optional</sup> <a name="allow_jagged_rows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.allowJaggedRows"></a>

```python
allow_jagged_rows: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if BigQuery should accept rows that are missing trailing optional columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#allow_jagged_rows BigqueryTable#allow_jagged_rows}

---

##### `allow_quoted_newlines`<sup>Optional</sup> <a name="allow_quoted_newlines" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.allowQuotedNewlines"></a>

```python
allow_quoted_newlines: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file.

The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#allow_quoted_newlines BigqueryTable#allow_quoted_newlines}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

The character encoding of the data. The supported values are UTF-8 or ISO-8859-1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#encoding BigqueryTable#encoding}

---

##### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

The separator for fields in a CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#field_delimiter BigqueryTable#field_delimiter}

---

##### `skip_leading_rows`<sup>Optional</sup> <a name="skip_leading_rows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.skipLeadingRows"></a>

```python
skip_leading_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of rows at the top of a CSV file that BigQuery will skip when reading the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#skip_leading_rows BigqueryTable#skip_leading_rows}

---

### BigqueryTableExternalDataConfigurationGoogleSheetsOptions <a name="BigqueryTableExternalDataConfigurationGoogleSheetsOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions(
  range: str = None,
  skip_leading_rows: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions.property.range">range</a></code> | <code>str</code> | Range of a sheet to query from. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions.property.skipLeadingRows">skip_leading_rows</a></code> | <code>typing.Union[int, float]</code> | The number of rows at the top of the sheet that BigQuery will skip when reading the data. |

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions.property.range"></a>

```python
range: str
```

- *Type:* str

Range of a sheet to query from.

Only used when non-empty. At least one of range or skip_leading_rows must be set. Typical format: "sheet_name!top_left_cell_id:bottom_right_cell_id" For example: "sheet1!A1:B20"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#range BigqueryTable#range}

---

##### `skip_leading_rows`<sup>Optional</sup> <a name="skip_leading_rows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions.property.skipLeadingRows"></a>

```python
skip_leading_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of rows at the top of the sheet that BigQuery will skip when reading the data.

At least one of range or skip_leading_rows must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#skip_leading_rows BigqueryTable#skip_leading_rows}

---

### BigqueryTableExternalDataConfigurationHivePartitioningOptions <a name="BigqueryTableExternalDataConfigurationHivePartitioningOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions(
  mode: str = None,
  require_partition_filter: typing.Union[bool, IResolvable] = None,
  source_uri_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions.property.mode">mode</a></code> | <code>str</code> | When set, what mode of hive partitioning to use when reading data. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions.property.requirePartitionFilter">require_partition_filter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions.property.sourceUriPrefix">source_uri_prefix</a></code> | <code>str</code> | When hive partition detection is requested, a common for all source uris must be required. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions.property.mode"></a>

```python
mode: str
```

- *Type:* str

When set, what mode of hive partitioning to use when reading data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#mode BigqueryTable#mode}

---

##### `require_partition_filter`<sup>Optional</sup> <a name="require_partition_filter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions.property.requirePartitionFilter"></a>

```python
require_partition_filter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#require_partition_filter BigqueryTable#require_partition_filter}

---

##### `source_uri_prefix`<sup>Optional</sup> <a name="source_uri_prefix" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions.property.sourceUriPrefix"></a>

```python
source_uri_prefix: str
```

- *Type:* str

When hive partition detection is requested, a common for all source uris must be required.

The prefix must end immediately before the partition key encoding begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#source_uri_prefix BigqueryTable#source_uri_prefix}

---

### BigqueryTableExternalDataConfigurationJsonOptions <a name="BigqueryTableExternalDataConfigurationJsonOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions(
  encoding: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions.property.encoding">encoding</a></code> | <code>str</code> | The character encoding of the data. |

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

The character encoding of the data.

The supported values are UTF-8, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#encoding BigqueryTable#encoding}

---

### BigqueryTableExternalDataConfigurationParquetOptions <a name="BigqueryTableExternalDataConfigurationParquetOptions" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions(
  enable_list_inference: typing.Union[bool, IResolvable] = None,
  enum_as_string: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions.property.enableListInference">enable_list_inference</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether to use schema inference specifically for Parquet LIST logical type. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions.property.enumAsString">enum_as_string</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default. |

---

##### `enable_list_inference`<sup>Optional</sup> <a name="enable_list_inference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions.property.enableListInference"></a>

```python
enable_list_inference: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether to use schema inference specifically for Parquet LIST logical type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#enable_list_inference BigqueryTable#enable_list_inference}

---

##### `enum_as_string`<sup>Optional</sup> <a name="enum_as_string" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions.property.enumAsString"></a>

```python
enum_as_string: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#enum_as_string BigqueryTable#enum_as_string}

---

### BigqueryTableMaterializedView <a name="BigqueryTableMaterializedView" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableMaterializedView(
  query: str,
  allow_non_incremental_definition: typing.Union[bool, IResolvable] = None,
  enable_refresh: typing.Union[bool, IResolvable] = None,
  refresh_interval_ms: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.query">query</a></code> | <code>str</code> | A query whose result is persisted. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.allowNonIncrementalDefinition">allow_non_incremental_definition</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow non incremental materialized view definition. The default value is false. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.enableRefresh">enable_refresh</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if BigQuery should automatically refresh materialized view when the base table is updated. The default is true. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.refreshIntervalMs">refresh_interval_ms</a></code> | <code>typing.Union[int, float]</code> | Specifies maximum frequency at which this materialized view will be refreshed. The default is 1800000. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.query"></a>

```python
query: str
```

- *Type:* str

A query whose result is persisted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#query BigqueryTable#query}

---

##### `allow_non_incremental_definition`<sup>Optional</sup> <a name="allow_non_incremental_definition" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.allowNonIncrementalDefinition"></a>

```python
allow_non_incremental_definition: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow non incremental materialized view definition. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#allow_non_incremental_definition BigqueryTable#allow_non_incremental_definition}

---

##### `enable_refresh`<sup>Optional</sup> <a name="enable_refresh" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.enableRefresh"></a>

```python
enable_refresh: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if BigQuery should automatically refresh materialized view when the base table is updated. The default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#enable_refresh BigqueryTable#enable_refresh}

---

##### `refresh_interval_ms`<sup>Optional</sup> <a name="refresh_interval_ms" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.refreshIntervalMs"></a>

```python
refresh_interval_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies maximum frequency at which this materialized view will be refreshed. The default is 1800000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#refresh_interval_ms BigqueryTable#refresh_interval_ms}

---

### BigqueryTableRangePartitioning <a name="BigqueryTableRangePartitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableRangePartitioning(
  field: str,
  range: BigqueryTableRangePartitioningRange
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning.property.field">field</a></code> | <code>str</code> | The field used to determine how to create a range-based partition. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning.property.range">range</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange">BigqueryTableRangePartitioningRange</a></code> | range block. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning.property.field"></a>

```python
field: str
```

- *Type:* str

The field used to determine how to create a range-based partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#field BigqueryTable#field}

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning.property.range"></a>

```python
range: BigqueryTableRangePartitioningRange
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange">BigqueryTableRangePartitioningRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#range BigqueryTable#range}

---

### BigqueryTableRangePartitioningRange <a name="BigqueryTableRangePartitioningRange" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableRangePartitioningRange(
  end: typing.Union[int, float],
  interval: typing.Union[int, float],
  start: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange.property.end">end</a></code> | <code>typing.Union[int, float]</code> | End of the range partitioning, exclusive. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | The width of each range within the partition. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange.property.start">start</a></code> | <code>typing.Union[int, float]</code> | Start of the range partitioning, inclusive. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange.property.end"></a>

```python
end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

End of the range partitioning, exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#end BigqueryTable#end}

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The width of each range within the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#interval BigqueryTable#interval}

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange.property.start"></a>

```python
start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Start of the range partitioning, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#start BigqueryTable#start}

---

### BigqueryTableTableConstraints <a name="BigqueryTableTableConstraints" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableTableConstraints(
  foreign_keys: typing.Union[IResolvable, typing.List[BigqueryTableTableConstraintsForeignKeys]] = None,
  primary_key: BigqueryTableTableConstraintsPrimaryKey = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints.property.foreignKeys">foreign_keys</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys">BigqueryTableTableConstraintsForeignKeys</a>]]</code> | foreign_keys block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints.property.primaryKey">primary_key</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey">BigqueryTableTableConstraintsPrimaryKey</a></code> | primary_key block. |

---

##### `foreign_keys`<sup>Optional</sup> <a name="foreign_keys" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints.property.foreignKeys"></a>

```python
foreign_keys: typing.Union[IResolvable, typing.List[BigqueryTableTableConstraintsForeignKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys">BigqueryTableTableConstraintsForeignKeys</a>]]

foreign_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#foreign_keys BigqueryTable#foreign_keys}

---

##### `primary_key`<sup>Optional</sup> <a name="primary_key" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints.property.primaryKey"></a>

```python
primary_key: BigqueryTableTableConstraintsPrimaryKey
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey">BigqueryTableTableConstraintsPrimaryKey</a>

primary_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#primary_key BigqueryTable#primary_key}

---

### BigqueryTableTableConstraintsForeignKeys <a name="BigqueryTableTableConstraintsForeignKeys" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableTableConstraintsForeignKeys(
  column_references: BigqueryTableTableConstraintsForeignKeysColumnReferences,
  referenced_table: BigqueryTableTableConstraintsForeignKeysReferencedTable,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys.property.columnReferences">column_references</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences">BigqueryTableTableConstraintsForeignKeysColumnReferences</a></code> | column_references block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys.property.referencedTable">referenced_table</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable">BigqueryTableTableConstraintsForeignKeysReferencedTable</a></code> | referenced_table block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys.property.name">name</a></code> | <code>str</code> | Set only if the foreign key constraint is named. |

---

##### `column_references`<sup>Required</sup> <a name="column_references" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys.property.columnReferences"></a>

```python
column_references: BigqueryTableTableConstraintsForeignKeysColumnReferences
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences">BigqueryTableTableConstraintsForeignKeysColumnReferences</a>

column_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#column_references BigqueryTable#column_references}

---

##### `referenced_table`<sup>Required</sup> <a name="referenced_table" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys.property.referencedTable"></a>

```python
referenced_table: BigqueryTableTableConstraintsForeignKeysReferencedTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable">BigqueryTableTableConstraintsForeignKeysReferencedTable</a>

referenced_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#referenced_table BigqueryTable#referenced_table}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys.property.name"></a>

```python
name: str
```

- *Type:* str

Set only if the foreign key constraint is named.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#name BigqueryTable#name}

---

### BigqueryTableTableConstraintsForeignKeysColumnReferences <a name="BigqueryTableTableConstraintsForeignKeysColumnReferences" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences(
  referenced_column: str,
  referencing_column: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences.property.referencedColumn">referenced_column</a></code> | <code>str</code> | The column in the primary key that are referenced by the referencingColumn. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences.property.referencingColumn">referencing_column</a></code> | <code>str</code> | The column that composes the foreign key. |

---

##### `referenced_column`<sup>Required</sup> <a name="referenced_column" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences.property.referencedColumn"></a>

```python
referenced_column: str
```

- *Type:* str

The column in the primary key that are referenced by the referencingColumn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#referenced_column BigqueryTable#referenced_column}

---

##### `referencing_column`<sup>Required</sup> <a name="referencing_column" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences.property.referencingColumn"></a>

```python
referencing_column: str
```

- *Type:* str

The column that composes the foreign key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#referencing_column BigqueryTable#referencing_column}

---

### BigqueryTableTableConstraintsForeignKeysReferencedTable <a name="BigqueryTableTableConstraintsForeignKeysReferencedTable" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable(
  dataset_id: str,
  project_id: str,
  table_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable.property.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable.property.projectId">project_id</a></code> | <code>str</code> | The ID of the project containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable.property.tableId">table_id</a></code> | <code>str</code> | The ID of the table. |

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#dataset_id BigqueryTable#dataset_id}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#project_id BigqueryTable#project_id}

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

The ID of the table.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters. Certain operations allow suffixing of the table ID with a partition decorator, such as sample_table$20190123.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#table_id BigqueryTable#table_id}

---

### BigqueryTableTableConstraintsPrimaryKey <a name="BigqueryTableTableConstraintsPrimaryKey" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableTableConstraintsPrimaryKey(
  columns: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey.property.columns">columns</a></code> | <code>typing.List[str]</code> | The columns that are composed of the primary key constraint. |

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey.property.columns"></a>

```python
columns: typing.List[str]
```

- *Type:* typing.List[str]

The columns that are composed of the primary key constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#columns BigqueryTable#columns}

---

### BigqueryTableTableReplicationInfo <a name="BigqueryTableTableReplicationInfo" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableTableReplicationInfo(
  source_dataset_id: str,
  source_project_id: str,
  source_table_id: str,
  replication_interval_ms: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.property.sourceDatasetId">source_dataset_id</a></code> | <code>str</code> | The ID of the source dataset. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.property.sourceProjectId">source_project_id</a></code> | <code>str</code> | The ID of the source project. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.property.sourceTableId">source_table_id</a></code> | <code>str</code> | The ID of the source materialized view. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.property.replicationIntervalMs">replication_interval_ms</a></code> | <code>typing.Union[int, float]</code> | The interval at which the source materialized view is polled for updates. The default is 300000. |

---

##### `source_dataset_id`<sup>Required</sup> <a name="source_dataset_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.property.sourceDatasetId"></a>

```python
source_dataset_id: str
```

- *Type:* str

The ID of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#source_dataset_id BigqueryTable#source_dataset_id}

---

##### `source_project_id`<sup>Required</sup> <a name="source_project_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.property.sourceProjectId"></a>

```python
source_project_id: str
```

- *Type:* str

The ID of the source project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#source_project_id BigqueryTable#source_project_id}

---

##### `source_table_id`<sup>Required</sup> <a name="source_table_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.property.sourceTableId"></a>

```python
source_table_id: str
```

- *Type:* str

The ID of the source materialized view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#source_table_id BigqueryTable#source_table_id}

---

##### `replication_interval_ms`<sup>Optional</sup> <a name="replication_interval_ms" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo.property.replicationIntervalMs"></a>

```python
replication_interval_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The interval at which the source materialized view is polled for updates. The default is 300000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#replication_interval_ms BigqueryTable#replication_interval_ms}

---

### BigqueryTableTimePartitioning <a name="BigqueryTableTimePartitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableTimePartitioning(
  type: str,
  expiration_ms: typing.Union[int, float] = None,
  field: str = None,
  require_partition_filter: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.type">type</a></code> | <code>str</code> | The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.expirationMs">expiration_ms</a></code> | <code>typing.Union[int, float]</code> | Number of milliseconds for which to keep the storage for a partition. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.field">field</a></code> | <code>str</code> | The field used to determine how to create a time-based partition. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.requirePartitionFilter">require_partition_filter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.type"></a>

```python
type: str
```

- *Type:* str

The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#type BigqueryTable#type}

---

##### `expiration_ms`<sup>Optional</sup> <a name="expiration_ms" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.expirationMs"></a>

```python
expiration_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of milliseconds for which to keep the storage for a partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#expiration_ms BigqueryTable#expiration_ms}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.field"></a>

```python
field: str
```

- *Type:* str

The field used to determine how to create a time-based partition.

If time-based partitioning is enabled without this value, the table is partitioned based on the load time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#field BigqueryTable#field}

---

##### `require_partition_filter`<sup>Optional</sup> <a name="require_partition_filter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.requirePartitionFilter"></a>

```python
require_partition_filter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#require_partition_filter BigqueryTable#require_partition_filter}

---

### BigqueryTableView <a name="BigqueryTableView" id="@cdktf/provider-google.bigqueryTable.BigqueryTableView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableView.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableView(
  query: str,
  use_legacy_sql: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView.property.query">query</a></code> | <code>str</code> | A query that BigQuery executes when the view is referenced. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView.property.useLegacySql">use_legacy_sql</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to use BigQuery's legacy SQL for this view. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google.bigqueryTable.BigqueryTableView.property.query"></a>

```python
query: str
```

- *Type:* str

A query that BigQuery executes when the view is referenced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#query BigqueryTable#query}

---

##### `use_legacy_sql`<sup>Optional</sup> <a name="use_legacy_sql" id="@cdktf/provider-google.bigqueryTable.BigqueryTableView.property.useLegacySql"></a>

```python
use_legacy_sql: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to use BigQuery's legacy SQL for this view.

The default value is true. If set to false, the view will use BigQuery's standard SQL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#use_legacy_sql BigqueryTable#use_legacy_sql}

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryTableEncryptionConfigurationOutputReference <a name="BigqueryTableEncryptionConfigurationOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyVersion">kms_key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration">BigqueryTableEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_version`<sup>Required</sup> <a name="kms_key_version" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```python
kms_key_version: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryTableEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration">BigqueryTableEncryptionConfiguration</a>

---


### BigqueryTableExternalDataConfigurationAvroOptionsOutputReference <a name="BigqueryTableExternalDataConfigurationAvroOptionsOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.useAvroLogicalTypesInput">use_avro_logical_types_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.useAvroLogicalTypes">use_avro_logical_types</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions">BigqueryTableExternalDataConfigurationAvroOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `use_avro_logical_types_input`<sup>Optional</sup> <a name="use_avro_logical_types_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.useAvroLogicalTypesInput"></a>

```python
use_avro_logical_types_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_avro_logical_types`<sup>Required</sup> <a name="use_avro_logical_types" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.useAvroLogicalTypes"></a>

```python
use_avro_logical_types: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryTableExternalDataConfigurationAvroOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions">BigqueryTableExternalDataConfigurationAvroOptions</a>

---


### BigqueryTableExternalDataConfigurationCsvOptionsOutputReference <a name="BigqueryTableExternalDataConfigurationCsvOptionsOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetAllowJaggedRows">reset_allow_jagged_rows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetAllowQuotedNewlines">reset_allow_quoted_newlines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetFieldDelimiter">reset_field_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetSkipLeadingRows">reset_skip_leading_rows</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_jagged_rows` <a name="reset_allow_jagged_rows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetAllowJaggedRows"></a>

```python
def reset_allow_jagged_rows() -> None
```

##### `reset_allow_quoted_newlines` <a name="reset_allow_quoted_newlines" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetAllowQuotedNewlines"></a>

```python
def reset_allow_quoted_newlines() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_field_delimiter` <a name="reset_field_delimiter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetFieldDelimiter"></a>

```python
def reset_field_delimiter() -> None
```

##### `reset_skip_leading_rows` <a name="reset_skip_leading_rows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.resetSkipLeadingRows"></a>

```python
def reset_skip_leading_rows() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowJaggedRowsInput">allow_jagged_rows_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowQuotedNewlinesInput">allow_quoted_newlines_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fieldDelimiterInput">field_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.quoteInput">quote_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.skipLeadingRowsInput">skip_leading_rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowJaggedRows">allow_jagged_rows</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowQuotedNewlines">allow_quoted_newlines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.quote">quote</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.skipLeadingRows">skip_leading_rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions">BigqueryTableExternalDataConfigurationCsvOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_jagged_rows_input`<sup>Optional</sup> <a name="allow_jagged_rows_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowJaggedRowsInput"></a>

```python
allow_jagged_rows_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_quoted_newlines_input`<sup>Optional</sup> <a name="allow_quoted_newlines_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowQuotedNewlinesInput"></a>

```python
allow_quoted_newlines_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `field_delimiter_input`<sup>Optional</sup> <a name="field_delimiter_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fieldDelimiterInput"></a>

```python
field_delimiter_input: str
```

- *Type:* str

---

##### `quote_input`<sup>Optional</sup> <a name="quote_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.quoteInput"></a>

```python
quote_input: str
```

- *Type:* str

---

##### `skip_leading_rows_input`<sup>Optional</sup> <a name="skip_leading_rows_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.skipLeadingRowsInput"></a>

```python
skip_leading_rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allow_jagged_rows`<sup>Required</sup> <a name="allow_jagged_rows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowJaggedRows"></a>

```python
allow_jagged_rows: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_quoted_newlines`<sup>Required</sup> <a name="allow_quoted_newlines" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.allowQuotedNewlines"></a>

```python
allow_quoted_newlines: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `field_delimiter`<sup>Required</sup> <a name="field_delimiter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

---

##### `quote`<sup>Required</sup> <a name="quote" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.quote"></a>

```python
quote: str
```

- *Type:* str

---

##### `skip_leading_rows`<sup>Required</sup> <a name="skip_leading_rows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.skipLeadingRows"></a>

```python
skip_leading_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryTableExternalDataConfigurationCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions">BigqueryTableExternalDataConfigurationCsvOptions</a>

---


### BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference <a name="BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resetRange">reset_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resetSkipLeadingRows">reset_skip_leading_rows</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_range` <a name="reset_range" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resetRange"></a>

```python
def reset_range() -> None
```

##### `reset_skip_leading_rows` <a name="reset_skip_leading_rows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.resetSkipLeadingRows"></a>

```python
def reset_skip_leading_rows() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.rangeInput">range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.skipLeadingRowsInput">skip_leading_rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.range">range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.skipLeadingRows">skip_leading_rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions">BigqueryTableExternalDataConfigurationGoogleSheetsOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.rangeInput"></a>

```python
range_input: str
```

- *Type:* str

---

##### `skip_leading_rows_input`<sup>Optional</sup> <a name="skip_leading_rows_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.skipLeadingRowsInput"></a>

```python
skip_leading_rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.range"></a>

```python
range: str
```

- *Type:* str

---

##### `skip_leading_rows`<sup>Required</sup> <a name="skip_leading_rows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.skipLeadingRows"></a>

```python
skip_leading_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryTableExternalDataConfigurationGoogleSheetsOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions">BigqueryTableExternalDataConfigurationGoogleSheetsOptions</a>

---


### BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference <a name="BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetRequirePartitionFilter">reset_require_partition_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetSourceUriPrefix">reset_source_uri_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_require_partition_filter` <a name="reset_require_partition_filter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetRequirePartitionFilter"></a>

```python
def reset_require_partition_filter() -> None
```

##### `reset_source_uri_prefix` <a name="reset_source_uri_prefix" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.resetSourceUriPrefix"></a>

```python
def reset_source_uri_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.requirePartitionFilterInput">require_partition_filter_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.sourceUriPrefixInput">source_uri_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.requirePartitionFilter">require_partition_filter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.sourceUriPrefix">source_uri_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions">BigqueryTableExternalDataConfigurationHivePartitioningOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `require_partition_filter_input`<sup>Optional</sup> <a name="require_partition_filter_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.requirePartitionFilterInput"></a>

```python
require_partition_filter_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_uri_prefix_input`<sup>Optional</sup> <a name="source_uri_prefix_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.sourceUriPrefixInput"></a>

```python
source_uri_prefix_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `require_partition_filter`<sup>Required</sup> <a name="require_partition_filter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.requirePartitionFilter"></a>

```python
require_partition_filter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_uri_prefix`<sup>Required</sup> <a name="source_uri_prefix" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.sourceUriPrefix"></a>

```python
source_uri_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryTableExternalDataConfigurationHivePartitioningOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions">BigqueryTableExternalDataConfigurationHivePartitioningOptions</a>

---


### BigqueryTableExternalDataConfigurationJsonOptionsOutputReference <a name="BigqueryTableExternalDataConfigurationJsonOptionsOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions">BigqueryTableExternalDataConfigurationJsonOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryTableExternalDataConfigurationJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions">BigqueryTableExternalDataConfigurationJsonOptions</a>

---


### BigqueryTableExternalDataConfigurationOutputReference <a name="BigqueryTableExternalDataConfigurationOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putAvroOptions">put_avro_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putCsvOptions">put_csv_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putGoogleSheetsOptions">put_google_sheets_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putHivePartitioningOptions">put_hive_partitioning_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putJsonOptions">put_json_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putParquetOptions">put_parquet_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetAvroOptions">reset_avro_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetConnectionId">reset_connection_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetCsvOptions">reset_csv_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetFileSetSpecType">reset_file_set_spec_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetGoogleSheetsOptions">reset_google_sheets_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetHivePartitioningOptions">reset_hive_partitioning_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetIgnoreUnknownValues">reset_ignore_unknown_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetJsonOptions">reset_json_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetMaxBadRecords">reset_max_bad_records</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetMetadataCacheMode">reset_metadata_cache_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetObjectMetadata">reset_object_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetParquetOptions">reset_parquet_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetReferenceFileSchemaUri">reset_reference_file_schema_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetSchema">reset_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetSourceFormat">reset_source_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_avro_options` <a name="put_avro_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putAvroOptions"></a>

```python
def put_avro_options(
  use_avro_logical_types: typing.Union[bool, IResolvable]
) -> None
```

###### `use_avro_logical_types`<sup>Required</sup> <a name="use_avro_logical_types" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putAvroOptions.parameter.useAvroLogicalTypes"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#use_avro_logical_types BigqueryTable#use_avro_logical_types}

---

##### `put_csv_options` <a name="put_csv_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putCsvOptions"></a>

```python
def put_csv_options(
  quote: str,
  allow_jagged_rows: typing.Union[bool, IResolvable] = None,
  allow_quoted_newlines: typing.Union[bool, IResolvable] = None,
  encoding: str = None,
  field_delimiter: str = None,
  skip_leading_rows: typing.Union[int, float] = None
) -> None
```

###### `quote`<sup>Required</sup> <a name="quote" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putCsvOptions.parameter.quote"></a>

- *Type:* str

The value that is used to quote data sections in a CSV file.

If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allow_quoted_newlines property to true. The API-side default is ", specified in Terraform escaped as ". Due to limitations with Terraform default values, this value is required to be explicitly set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#quote BigqueryTable#quote}

---

###### `allow_jagged_rows`<sup>Optional</sup> <a name="allow_jagged_rows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putCsvOptions.parameter.allowJaggedRows"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if BigQuery should accept rows that are missing trailing optional columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#allow_jagged_rows BigqueryTable#allow_jagged_rows}

---

###### `allow_quoted_newlines`<sup>Optional</sup> <a name="allow_quoted_newlines" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putCsvOptions.parameter.allowQuotedNewlines"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file.

The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#allow_quoted_newlines BigqueryTable#allow_quoted_newlines}

---

###### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putCsvOptions.parameter.encoding"></a>

- *Type:* str

The character encoding of the data. The supported values are UTF-8 or ISO-8859-1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#encoding BigqueryTable#encoding}

---

###### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putCsvOptions.parameter.fieldDelimiter"></a>

- *Type:* str

The separator for fields in a CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#field_delimiter BigqueryTable#field_delimiter}

---

###### `skip_leading_rows`<sup>Optional</sup> <a name="skip_leading_rows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putCsvOptions.parameter.skipLeadingRows"></a>

- *Type:* typing.Union[int, float]

The number of rows at the top of a CSV file that BigQuery will skip when reading the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#skip_leading_rows BigqueryTable#skip_leading_rows}

---

##### `put_google_sheets_options` <a name="put_google_sheets_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putGoogleSheetsOptions"></a>

```python
def put_google_sheets_options(
  range: str = None,
  skip_leading_rows: typing.Union[int, float] = None
) -> None
```

###### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putGoogleSheetsOptions.parameter.range"></a>

- *Type:* str

Range of a sheet to query from.

Only used when non-empty. At least one of range or skip_leading_rows must be set. Typical format: "sheet_name!top_left_cell_id:bottom_right_cell_id" For example: "sheet1!A1:B20"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#range BigqueryTable#range}

---

###### `skip_leading_rows`<sup>Optional</sup> <a name="skip_leading_rows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putGoogleSheetsOptions.parameter.skipLeadingRows"></a>

- *Type:* typing.Union[int, float]

The number of rows at the top of the sheet that BigQuery will skip when reading the data.

At least one of range or skip_leading_rows must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#skip_leading_rows BigqueryTable#skip_leading_rows}

---

##### `put_hive_partitioning_options` <a name="put_hive_partitioning_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putHivePartitioningOptions"></a>

```python
def put_hive_partitioning_options(
  mode: str = None,
  require_partition_filter: typing.Union[bool, IResolvable] = None,
  source_uri_prefix: str = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putHivePartitioningOptions.parameter.mode"></a>

- *Type:* str

When set, what mode of hive partitioning to use when reading data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#mode BigqueryTable#mode}

---

###### `require_partition_filter`<sup>Optional</sup> <a name="require_partition_filter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putHivePartitioningOptions.parameter.requirePartitionFilter"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#require_partition_filter BigqueryTable#require_partition_filter}

---

###### `source_uri_prefix`<sup>Optional</sup> <a name="source_uri_prefix" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putHivePartitioningOptions.parameter.sourceUriPrefix"></a>

- *Type:* str

When hive partition detection is requested, a common for all source uris must be required.

The prefix must end immediately before the partition key encoding begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#source_uri_prefix BigqueryTable#source_uri_prefix}

---

##### `put_json_options` <a name="put_json_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putJsonOptions"></a>

```python
def put_json_options(
  encoding: str = None
) -> None
```

###### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putJsonOptions.parameter.encoding"></a>

- *Type:* str

The character encoding of the data.

The supported values are UTF-8, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#encoding BigqueryTable#encoding}

---

##### `put_parquet_options` <a name="put_parquet_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putParquetOptions"></a>

```python
def put_parquet_options(
  enable_list_inference: typing.Union[bool, IResolvable] = None,
  enum_as_string: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_list_inference`<sup>Optional</sup> <a name="enable_list_inference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putParquetOptions.parameter.enableListInference"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether to use schema inference specifically for Parquet LIST logical type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#enable_list_inference BigqueryTable#enable_list_inference}

---

###### `enum_as_string`<sup>Optional</sup> <a name="enum_as_string" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putParquetOptions.parameter.enumAsString"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#enum_as_string BigqueryTable#enum_as_string}

---

##### `reset_avro_options` <a name="reset_avro_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetAvroOptions"></a>

```python
def reset_avro_options() -> None
```

##### `reset_compression` <a name="reset_compression" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_connection_id` <a name="reset_connection_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetConnectionId"></a>

```python
def reset_connection_id() -> None
```

##### `reset_csv_options` <a name="reset_csv_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetCsvOptions"></a>

```python
def reset_csv_options() -> None
```

##### `reset_file_set_spec_type` <a name="reset_file_set_spec_type" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetFileSetSpecType"></a>

```python
def reset_file_set_spec_type() -> None
```

##### `reset_google_sheets_options` <a name="reset_google_sheets_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetGoogleSheetsOptions"></a>

```python
def reset_google_sheets_options() -> None
```

##### `reset_hive_partitioning_options` <a name="reset_hive_partitioning_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetHivePartitioningOptions"></a>

```python
def reset_hive_partitioning_options() -> None
```

##### `reset_ignore_unknown_values` <a name="reset_ignore_unknown_values" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetIgnoreUnknownValues"></a>

```python
def reset_ignore_unknown_values() -> None
```

##### `reset_json_options` <a name="reset_json_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetJsonOptions"></a>

```python
def reset_json_options() -> None
```

##### `reset_max_bad_records` <a name="reset_max_bad_records" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetMaxBadRecords"></a>

```python
def reset_max_bad_records() -> None
```

##### `reset_metadata_cache_mode` <a name="reset_metadata_cache_mode" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetMetadataCacheMode"></a>

```python
def reset_metadata_cache_mode() -> None
```

##### `reset_object_metadata` <a name="reset_object_metadata" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetObjectMetadata"></a>

```python
def reset_object_metadata() -> None
```

##### `reset_parquet_options` <a name="reset_parquet_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetParquetOptions"></a>

```python
def reset_parquet_options() -> None
```

##### `reset_reference_file_schema_uri` <a name="reset_reference_file_schema_uri" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetReferenceFileSchemaUri"></a>

```python
def reset_reference_file_schema_uri() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```

##### `reset_source_format` <a name="reset_source_format" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetSourceFormat"></a>

```python
def reset_source_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.avroOptions">avro_options</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference">BigqueryTableExternalDataConfigurationAvroOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.csvOptions">csv_options</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference">BigqueryTableExternalDataConfigurationCsvOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptions">google_sheets_options</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference">BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptions">hive_partitioning_options</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference">BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.jsonOptions">json_options</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference">BigqueryTableExternalDataConfigurationJsonOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.parquetOptions">parquet_options</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference">BigqueryTableExternalDataConfigurationParquetOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.autodetectInput">autodetect_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.avroOptionsInput">avro_options_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions">BigqueryTableExternalDataConfigurationAvroOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.csvOptionsInput">csv_options_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions">BigqueryTableExternalDataConfigurationCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.fileSetSpecTypeInput">file_set_spec_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptionsInput">google_sheets_options_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions">BigqueryTableExternalDataConfigurationGoogleSheetsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptionsInput">hive_partitioning_options_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions">BigqueryTableExternalDataConfigurationHivePartitioningOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValuesInput">ignore_unknown_values_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.jsonOptionsInput">json_options_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions">BigqueryTableExternalDataConfigurationJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecordsInput">max_bad_records_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.metadataCacheModeInput">metadata_cache_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.objectMetadataInput">object_metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.parquetOptionsInput">parquet_options_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions">BigqueryTableExternalDataConfigurationParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUriInput">reference_file_schema_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.sourceFormatInput">source_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.sourceUrisInput">source_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.autodetect">autodetect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.fileSetSpecType">file_set_spec_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValues">ignore_unknown_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecords">max_bad_records</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.metadataCacheMode">metadata_cache_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.objectMetadata">object_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUri">reference_file_schema_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.sourceFormat">source_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.sourceUris">source_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration">BigqueryTableExternalDataConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avro_options`<sup>Required</sup> <a name="avro_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.avroOptions"></a>

```python
avro_options: BigqueryTableExternalDataConfigurationAvroOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptionsOutputReference">BigqueryTableExternalDataConfigurationAvroOptionsOutputReference</a>

---

##### `csv_options`<sup>Required</sup> <a name="csv_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.csvOptions"></a>

```python
csv_options: BigqueryTableExternalDataConfigurationCsvOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptionsOutputReference">BigqueryTableExternalDataConfigurationCsvOptionsOutputReference</a>

---

##### `google_sheets_options`<sup>Required</sup> <a name="google_sheets_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptions"></a>

```python
google_sheets_options: BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference">BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference</a>

---

##### `hive_partitioning_options`<sup>Required</sup> <a name="hive_partitioning_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptions"></a>

```python
hive_partitioning_options: BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference">BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference</a>

---

##### `json_options`<sup>Required</sup> <a name="json_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.jsonOptions"></a>

```python
json_options: BigqueryTableExternalDataConfigurationJsonOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptionsOutputReference">BigqueryTableExternalDataConfigurationJsonOptionsOutputReference</a>

---

##### `parquet_options`<sup>Required</sup> <a name="parquet_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.parquetOptions"></a>

```python
parquet_options: BigqueryTableExternalDataConfigurationParquetOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference">BigqueryTableExternalDataConfigurationParquetOptionsOutputReference</a>

---

##### `autodetect_input`<sup>Optional</sup> <a name="autodetect_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.autodetectInput"></a>

```python
autodetect_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `avro_options_input`<sup>Optional</sup> <a name="avro_options_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.avroOptionsInput"></a>

```python
avro_options_input: BigqueryTableExternalDataConfigurationAvroOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions">BigqueryTableExternalDataConfigurationAvroOptions</a>

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `csv_options_input`<sup>Optional</sup> <a name="csv_options_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.csvOptionsInput"></a>

```python
csv_options_input: BigqueryTableExternalDataConfigurationCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions">BigqueryTableExternalDataConfigurationCsvOptions</a>

---

##### `file_set_spec_type_input`<sup>Optional</sup> <a name="file_set_spec_type_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.fileSetSpecTypeInput"></a>

```python
file_set_spec_type_input: str
```

- *Type:* str

---

##### `google_sheets_options_input`<sup>Optional</sup> <a name="google_sheets_options_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptionsInput"></a>

```python
google_sheets_options_input: BigqueryTableExternalDataConfigurationGoogleSheetsOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions">BigqueryTableExternalDataConfigurationGoogleSheetsOptions</a>

---

##### `hive_partitioning_options_input`<sup>Optional</sup> <a name="hive_partitioning_options_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptionsInput"></a>

```python
hive_partitioning_options_input: BigqueryTableExternalDataConfigurationHivePartitioningOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions">BigqueryTableExternalDataConfigurationHivePartitioningOptions</a>

---

##### `ignore_unknown_values_input`<sup>Optional</sup> <a name="ignore_unknown_values_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValuesInput"></a>

```python
ignore_unknown_values_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `json_options_input`<sup>Optional</sup> <a name="json_options_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.jsonOptionsInput"></a>

```python
json_options_input: BigqueryTableExternalDataConfigurationJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationJsonOptions">BigqueryTableExternalDataConfigurationJsonOptions</a>

---

##### `max_bad_records_input`<sup>Optional</sup> <a name="max_bad_records_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecordsInput"></a>

```python
max_bad_records_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metadata_cache_mode_input`<sup>Optional</sup> <a name="metadata_cache_mode_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.metadataCacheModeInput"></a>

```python
metadata_cache_mode_input: str
```

- *Type:* str

---

##### `object_metadata_input`<sup>Optional</sup> <a name="object_metadata_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.objectMetadataInput"></a>

```python
object_metadata_input: str
```

- *Type:* str

---

##### `parquet_options_input`<sup>Optional</sup> <a name="parquet_options_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.parquetOptionsInput"></a>

```python
parquet_options_input: BigqueryTableExternalDataConfigurationParquetOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions">BigqueryTableExternalDataConfigurationParquetOptions</a>

---

##### `reference_file_schema_uri_input`<sup>Optional</sup> <a name="reference_file_schema_uri_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUriInput"></a>

```python
reference_file_schema_uri_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `source_format_input`<sup>Optional</sup> <a name="source_format_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.sourceFormatInput"></a>

```python
source_format_input: str
```

- *Type:* str

---

##### `source_uris_input`<sup>Optional</sup> <a name="source_uris_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.sourceUrisInput"></a>

```python
source_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `autodetect`<sup>Required</sup> <a name="autodetect" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.autodetect"></a>

```python
autodetect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `file_set_spec_type`<sup>Required</sup> <a name="file_set_spec_type" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.fileSetSpecType"></a>

```python
file_set_spec_type: str
```

- *Type:* str

---

##### `ignore_unknown_values`<sup>Required</sup> <a name="ignore_unknown_values" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValues"></a>

```python
ignore_unknown_values: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_bad_records`<sup>Required</sup> <a name="max_bad_records" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecords"></a>

```python
max_bad_records: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metadata_cache_mode`<sup>Required</sup> <a name="metadata_cache_mode" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.metadataCacheMode"></a>

```python
metadata_cache_mode: str
```

- *Type:* str

---

##### `object_metadata`<sup>Required</sup> <a name="object_metadata" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.objectMetadata"></a>

```python
object_metadata: str
```

- *Type:* str

---

##### `reference_file_schema_uri`<sup>Required</sup> <a name="reference_file_schema_uri" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUri"></a>

```python
reference_file_schema_uri: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `source_format`<sup>Required</sup> <a name="source_format" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.sourceFormat"></a>

```python
source_format: str
```

- *Type:* str

---

##### `source_uris`<sup>Required</sup> <a name="source_uris" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.sourceUris"></a>

```python
source_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryTableExternalDataConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration">BigqueryTableExternalDataConfiguration</a>

---


### BigqueryTableExternalDataConfigurationParquetOptionsOutputReference <a name="BigqueryTableExternalDataConfigurationParquetOptionsOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resetEnableListInference">reset_enable_list_inference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resetEnumAsString">reset_enum_as_string</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_list_inference` <a name="reset_enable_list_inference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resetEnableListInference"></a>

```python
def reset_enable_list_inference() -> None
```

##### `reset_enum_as_string` <a name="reset_enum_as_string" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.resetEnumAsString"></a>

```python
def reset_enum_as_string() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enableListInferenceInput">enable_list_inference_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enumAsStringInput">enum_as_string_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enableListInference">enable_list_inference</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enumAsString">enum_as_string</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions">BigqueryTableExternalDataConfigurationParquetOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_list_inference_input`<sup>Optional</sup> <a name="enable_list_inference_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enableListInferenceInput"></a>

```python
enable_list_inference_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enum_as_string_input`<sup>Optional</sup> <a name="enum_as_string_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enumAsStringInput"></a>

```python
enum_as_string_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_list_inference`<sup>Required</sup> <a name="enable_list_inference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enableListInference"></a>

```python
enable_list_inference: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enum_as_string`<sup>Required</sup> <a name="enum_as_string" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.enumAsString"></a>

```python
enum_as_string: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptionsOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryTableExternalDataConfigurationParquetOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationParquetOptions">BigqueryTableExternalDataConfigurationParquetOptions</a>

---


### BigqueryTableMaterializedViewOutputReference <a name="BigqueryTableMaterializedViewOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableMaterializedViewOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resetAllowNonIncrementalDefinition">reset_allow_non_incremental_definition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resetEnableRefresh">reset_enable_refresh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resetRefreshIntervalMs">reset_refresh_interval_ms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_non_incremental_definition` <a name="reset_allow_non_incremental_definition" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resetAllowNonIncrementalDefinition"></a>

```python
def reset_allow_non_incremental_definition() -> None
```

##### `reset_enable_refresh` <a name="reset_enable_refresh" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resetEnableRefresh"></a>

```python
def reset_enable_refresh() -> None
```

##### `reset_refresh_interval_ms` <a name="reset_refresh_interval_ms" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.resetRefreshIntervalMs"></a>

```python
def reset_refresh_interval_ms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.allowNonIncrementalDefinitionInput">allow_non_incremental_definition_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.enableRefreshInput">enable_refresh_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.refreshIntervalMsInput">refresh_interval_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.allowNonIncrementalDefinition">allow_non_incremental_definition</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.enableRefresh">enable_refresh</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.refreshIntervalMs">refresh_interval_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView">BigqueryTableMaterializedView</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_non_incremental_definition_input`<sup>Optional</sup> <a name="allow_non_incremental_definition_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.allowNonIncrementalDefinitionInput"></a>

```python
allow_non_incremental_definition_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_refresh_input`<sup>Optional</sup> <a name="enable_refresh_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.enableRefreshInput"></a>

```python
enable_refresh_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `refresh_interval_ms_input`<sup>Optional</sup> <a name="refresh_interval_ms_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.refreshIntervalMsInput"></a>

```python
refresh_interval_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allow_non_incremental_definition`<sup>Required</sup> <a name="allow_non_incremental_definition" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.allowNonIncrementalDefinition"></a>

```python
allow_non_incremental_definition: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_refresh`<sup>Required</sup> <a name="enable_refresh" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.enableRefresh"></a>

```python
enable_refresh: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `refresh_interval_ms`<sup>Required</sup> <a name="refresh_interval_ms" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.refreshIntervalMs"></a>

```python
refresh_interval_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryTableMaterializedView
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView">BigqueryTableMaterializedView</a>

---


### BigqueryTableRangePartitioningOutputReference <a name="BigqueryTableRangePartitioningOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableRangePartitioningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.putRange">put_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_range` <a name="put_range" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.putRange"></a>

```python
def put_range(
  end: typing.Union[int, float],
  interval: typing.Union[int, float],
  start: typing.Union[int, float]
) -> None
```

###### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.putRange.parameter.end"></a>

- *Type:* typing.Union[int, float]

End of the range partitioning, exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#end BigqueryTable#end}

---

###### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.putRange.parameter.interval"></a>

- *Type:* typing.Union[int, float]

The width of each range within the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#interval BigqueryTable#interval}

---

###### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.putRange.parameter.start"></a>

- *Type:* typing.Union[int, float]

Start of the range partitioning, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#start BigqueryTable#start}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference">BigqueryTableRangePartitioningRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.rangeInput">range_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange">BigqueryTableRangePartitioningRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.range"></a>

```python
range: BigqueryTableRangePartitioningRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference">BigqueryTableRangePartitioningRangeOutputReference</a>

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.rangeInput"></a>

```python
range_input: BigqueryTableRangePartitioningRange
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange">BigqueryTableRangePartitioningRange</a>

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryTableRangePartitioning
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a>

---


### BigqueryTableRangePartitioningRangeOutputReference <a name="BigqueryTableRangePartitioningRangeOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.endInput">end_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.intervalInput">interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.startInput">start_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.end">end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.start">start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange">BigqueryTableRangePartitioningRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_input`<sup>Optional</sup> <a name="end_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.endInput"></a>

```python
end_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.intervalInput"></a>

```python
interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.startInput"></a>

```python
start_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.end"></a>

```python
end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.start"></a>

```python
start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRangeOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryTableRangePartitioningRange
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange">BigqueryTableRangePartitioningRange</a>

---


### BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference <a name="BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencedColumnInput">referenced_column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencingColumnInput">referencing_column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencedColumn">referenced_column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencingColumn">referencing_column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences">BigqueryTableTableConstraintsForeignKeysColumnReferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `referenced_column_input`<sup>Optional</sup> <a name="referenced_column_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencedColumnInput"></a>

```python
referenced_column_input: str
```

- *Type:* str

---

##### `referencing_column_input`<sup>Optional</sup> <a name="referencing_column_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencingColumnInput"></a>

```python
referencing_column_input: str
```

- *Type:* str

---

##### `referenced_column`<sup>Required</sup> <a name="referenced_column" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencedColumn"></a>

```python
referenced_column: str
```

- *Type:* str

---

##### `referencing_column`<sup>Required</sup> <a name="referencing_column" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.referencingColumn"></a>

```python
referencing_column: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryTableTableConstraintsForeignKeysColumnReferences
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences">BigqueryTableTableConstraintsForeignKeysColumnReferences</a>

---


### BigqueryTableTableConstraintsForeignKeysList <a name="BigqueryTableTableConstraintsForeignKeysList" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableTableConstraintsForeignKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BigqueryTableTableConstraintsForeignKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys">BigqueryTableTableConstraintsForeignKeys</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BigqueryTableTableConstraintsForeignKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys">BigqueryTableTableConstraintsForeignKeys</a>]]

---


### BigqueryTableTableConstraintsForeignKeysOutputReference <a name="BigqueryTableTableConstraintsForeignKeysOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.putColumnReferences">put_column_references</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.putReferencedTable">put_referenced_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_column_references` <a name="put_column_references" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.putColumnReferences"></a>

```python
def put_column_references(
  referenced_column: str,
  referencing_column: str
) -> None
```

###### `referenced_column`<sup>Required</sup> <a name="referenced_column" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.putColumnReferences.parameter.referencedColumn"></a>

- *Type:* str

The column in the primary key that are referenced by the referencingColumn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#referenced_column BigqueryTable#referenced_column}

---

###### `referencing_column`<sup>Required</sup> <a name="referencing_column" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.putColumnReferences.parameter.referencingColumn"></a>

- *Type:* str

The column that composes the foreign key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#referencing_column BigqueryTable#referencing_column}

---

##### `put_referenced_table` <a name="put_referenced_table" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.putReferencedTable"></a>

```python
def put_referenced_table(
  dataset_id: str,
  project_id: str,
  table_id: str
) -> None
```

###### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.putReferencedTable.parameter.datasetId"></a>

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#dataset_id BigqueryTable#dataset_id}

---

###### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.putReferencedTable.parameter.projectId"></a>

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#project_id BigqueryTable#project_id}

---

###### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.putReferencedTable.parameter.tableId"></a>

- *Type:* str

The ID of the table.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters. Certain operations allow suffixing of the table ID with a partition decorator, such as sample_table$20190123.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#table_id BigqueryTable#table_id}

---

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.columnReferences">column_references</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference">BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.referencedTable">referenced_table</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference">BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.columnReferencesInput">column_references_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences">BigqueryTableTableConstraintsForeignKeysColumnReferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.referencedTableInput">referenced_table_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable">BigqueryTableTableConstraintsForeignKeysReferencedTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys">BigqueryTableTableConstraintsForeignKeys</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_references`<sup>Required</sup> <a name="column_references" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.columnReferences"></a>

```python
column_references: BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference">BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference</a>

---

##### `referenced_table`<sup>Required</sup> <a name="referenced_table" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.referencedTable"></a>

```python
referenced_table: BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference">BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference</a>

---

##### `column_references_input`<sup>Optional</sup> <a name="column_references_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.columnReferencesInput"></a>

```python
column_references_input: BigqueryTableTableConstraintsForeignKeysColumnReferences
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysColumnReferences">BigqueryTableTableConstraintsForeignKeysColumnReferences</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `referenced_table_input`<sup>Optional</sup> <a name="referenced_table_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.referencedTableInput"></a>

```python
referenced_table_input: BigqueryTableTableConstraintsForeignKeysReferencedTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable">BigqueryTableTableConstraintsForeignKeysReferencedTable</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BigqueryTableTableConstraintsForeignKeys]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys">BigqueryTableTableConstraintsForeignKeys</a>]

---


### BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference <a name="BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.tableIdInput">table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable">BigqueryTableTableConstraintsForeignKeysReferencedTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `table_id_input`<sup>Optional</sup> <a name="table_id_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.tableIdInput"></a>

```python
table_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryTableTableConstraintsForeignKeysReferencedTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysReferencedTable">BigqueryTableTableConstraintsForeignKeysReferencedTable</a>

---


### BigqueryTableTableConstraintsOutputReference <a name="BigqueryTableTableConstraintsOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableTableConstraintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.putForeignKeys">put_foreign_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.putPrimaryKey">put_primary_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.resetForeignKeys">reset_foreign_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.resetPrimaryKey">reset_primary_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_foreign_keys` <a name="put_foreign_keys" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.putForeignKeys"></a>

```python
def put_foreign_keys(
  value: typing.Union[IResolvable, typing.List[BigqueryTableTableConstraintsForeignKeys]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.putForeignKeys.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys">BigqueryTableTableConstraintsForeignKeys</a>]]

---

##### `put_primary_key` <a name="put_primary_key" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.putPrimaryKey"></a>

```python
def put_primary_key(
  columns: typing.List[str]
) -> None
```

###### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.putPrimaryKey.parameter.columns"></a>

- *Type:* typing.List[str]

The columns that are composed of the primary key constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_table#columns BigqueryTable#columns}

---

##### `reset_foreign_keys` <a name="reset_foreign_keys" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.resetForeignKeys"></a>

```python
def reset_foreign_keys() -> None
```

##### `reset_primary_key` <a name="reset_primary_key" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.resetPrimaryKey"></a>

```python
def reset_primary_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.foreignKeys">foreign_keys</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList">BigqueryTableTableConstraintsForeignKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.primaryKey">primary_key</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference">BigqueryTableTableConstraintsPrimaryKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.foreignKeysInput">foreign_keys_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys">BigqueryTableTableConstraintsForeignKeys</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.primaryKeyInput">primary_key_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey">BigqueryTableTableConstraintsPrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints">BigqueryTableTableConstraints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `foreign_keys`<sup>Required</sup> <a name="foreign_keys" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.foreignKeys"></a>

```python
foreign_keys: BigqueryTableTableConstraintsForeignKeysList
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeysList">BigqueryTableTableConstraintsForeignKeysList</a>

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.primaryKey"></a>

```python
primary_key: BigqueryTableTableConstraintsPrimaryKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference">BigqueryTableTableConstraintsPrimaryKeyOutputReference</a>

---

##### `foreign_keys_input`<sup>Optional</sup> <a name="foreign_keys_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.foreignKeysInput"></a>

```python
foreign_keys_input: typing.Union[IResolvable, typing.List[BigqueryTableTableConstraintsForeignKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsForeignKeys">BigqueryTableTableConstraintsForeignKeys</a>]]

---

##### `primary_key_input`<sup>Optional</sup> <a name="primary_key_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.primaryKeyInput"></a>

```python
primary_key_input: BigqueryTableTableConstraintsPrimaryKey
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey">BigqueryTableTableConstraintsPrimaryKey</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryTableTableConstraints
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraints">BigqueryTableTableConstraints</a>

---


### BigqueryTableTableConstraintsPrimaryKeyOutputReference <a name="BigqueryTableTableConstraintsPrimaryKeyOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.columnsInput">columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.columns">columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey">BigqueryTableTableConstraintsPrimaryKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns_input`<sup>Optional</sup> <a name="columns_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.columnsInput"></a>

```python
columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.columns"></a>

```python
columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKeyOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryTableTableConstraintsPrimaryKey
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableConstraintsPrimaryKey">BigqueryTableTableConstraintsPrimaryKey</a>

---


### BigqueryTableTableReplicationInfoOutputReference <a name="BigqueryTableTableReplicationInfoOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableTableReplicationInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.resetReplicationIntervalMs">reset_replication_interval_ms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_replication_interval_ms` <a name="reset_replication_interval_ms" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.resetReplicationIntervalMs"></a>

```python
def reset_replication_interval_ms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.replicationIntervalMsInput">replication_interval_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceDatasetIdInput">source_dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceProjectIdInput">source_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceTableIdInput">source_table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.replicationIntervalMs">replication_interval_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceDatasetId">source_dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceProjectId">source_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceTableId">source_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo">BigqueryTableTableReplicationInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `replication_interval_ms_input`<sup>Optional</sup> <a name="replication_interval_ms_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.replicationIntervalMsInput"></a>

```python
replication_interval_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_dataset_id_input`<sup>Optional</sup> <a name="source_dataset_id_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceDatasetIdInput"></a>

```python
source_dataset_id_input: str
```

- *Type:* str

---

##### `source_project_id_input`<sup>Optional</sup> <a name="source_project_id_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceProjectIdInput"></a>

```python
source_project_id_input: str
```

- *Type:* str

---

##### `source_table_id_input`<sup>Optional</sup> <a name="source_table_id_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceTableIdInput"></a>

```python
source_table_id_input: str
```

- *Type:* str

---

##### `replication_interval_ms`<sup>Required</sup> <a name="replication_interval_ms" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.replicationIntervalMs"></a>

```python
replication_interval_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_dataset_id`<sup>Required</sup> <a name="source_dataset_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceDatasetId"></a>

```python
source_dataset_id: str
```

- *Type:* str

---

##### `source_project_id`<sup>Required</sup> <a name="source_project_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceProjectId"></a>

```python
source_project_id: str
```

- *Type:* str

---

##### `source_table_id`<sup>Required</sup> <a name="source_table_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.sourceTableId"></a>

```python
source_table_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfoOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryTableTableReplicationInfo
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTableReplicationInfo">BigqueryTableTableReplicationInfo</a>

---


### BigqueryTableTimePartitioningOutputReference <a name="BigqueryTableTimePartitioningOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableTimePartitioningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resetExpirationMs">reset_expiration_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resetField">reset_field</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resetRequirePartitionFilter">reset_require_partition_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expiration_ms` <a name="reset_expiration_ms" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resetExpirationMs"></a>

```python
def reset_expiration_ms() -> None
```

##### `reset_field` <a name="reset_field" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resetField"></a>

```python
def reset_field() -> None
```

##### `reset_require_partition_filter` <a name="reset_require_partition_filter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.resetRequirePartitionFilter"></a>

```python
def reset_require_partition_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.expirationMsInput">expiration_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.requirePartitionFilterInput">require_partition_filter_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.expirationMs">expiration_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.requirePartitionFilter">require_partition_filter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning">BigqueryTableTimePartitioning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiration_ms_input`<sup>Optional</sup> <a name="expiration_ms_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.expirationMsInput"></a>

```python
expiration_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `require_partition_filter_input`<sup>Optional</sup> <a name="require_partition_filter_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.requirePartitionFilterInput"></a>

```python
require_partition_filter_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `expiration_ms`<sup>Required</sup> <a name="expiration_ms" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.expirationMs"></a>

```python
expiration_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `require_partition_filter`<sup>Required</sup> <a name="require_partition_filter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.requirePartitionFilter"></a>

```python
require_partition_filter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioningOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryTableTimePartitioning
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning">BigqueryTableTimePartitioning</a>

---


### BigqueryTableViewOutputReference <a name="BigqueryTableViewOutputReference" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableViewOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.resetUseLegacySql">reset_use_legacy_sql</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_use_legacy_sql` <a name="reset_use_legacy_sql" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.resetUseLegacySql"></a>

```python
def reset_use_legacy_sql() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.useLegacySqlInput">use_legacy_sql_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.useLegacySql">use_legacy_sql</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView">BigqueryTableView</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `use_legacy_sql_input`<sup>Optional</sup> <a name="use_legacy_sql_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.useLegacySqlInput"></a>

```python
use_legacy_sql_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `use_legacy_sql`<sup>Required</sup> <a name="use_legacy_sql" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.useLegacySql"></a>

```python
use_legacy_sql: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryTable.BigqueryTableViewOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryTableView
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView">BigqueryTableView</a>

---



