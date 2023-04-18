# `google_bigquery_table`

Refer to the Terraform Registory for docs: [`google_bigquery_table`](https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table).

# `bigqueryTable` Submodule <a name="`bigqueryTable` Submodule" id="@cdktf/provider-google.bigqueryTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryTable <a name="BigqueryTable" id="@cdktf/provider-google.bigqueryTable.BigqueryTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table google_bigquery_table}.

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
  project: str = None,
  range_partitioning: BigqueryTableRangePartitioning = None,
  schema: str = None,
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
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#id BigqueryTable#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A mapping of labels to assign to the resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.materializedView">materialized_view</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView">BigqueryTableMaterializedView</a></code> | materialized_view block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.rangePartitioning">range_partitioning</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a></code> | range_partitioning block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.schema">schema</a></code> | <code>str</code> | A JSON schema for the table. |
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#dataset_id BigqueryTable#dataset_id}

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.tableId"></a>

- *Type:* str

A unique ID for the resource. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#table_id BigqueryTable#table_id}

---

##### `clustering`<sup>Optional</sup> <a name="clustering" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.clustering"></a>

- *Type:* typing.List[str]

Specifies column names to use for data clustering.

Up to four top-level columns are allowed, and should be specified in descending priority order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#clustering BigqueryTable#clustering}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.deletionProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#deletion_protection BigqueryTable#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.description"></a>

- *Type:* str

The field description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#description BigqueryTable#description}

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration">BigqueryTableEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#encryption_configuration BigqueryTable#encryption_configuration}

---

##### `expiration_time`<sup>Optional</sup> <a name="expiration_time" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.expirationTime"></a>

- *Type:* typing.Union[int, float]

The time when this table expires, in milliseconds since the epoch.

If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#expiration_time BigqueryTable#expiration_time}

---

##### `external_data_configuration`<sup>Optional</sup> <a name="external_data_configuration" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.externalDataConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration">BigqueryTableExternalDataConfiguration</a>

external_data_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#external_data_configuration BigqueryTable#external_data_configuration}

---

##### `friendly_name`<sup>Optional</sup> <a name="friendly_name" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.friendlyName"></a>

- *Type:* str

A descriptive name for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#friendly_name BigqueryTable#friendly_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#id BigqueryTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A mapping of labels to assign to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#labels BigqueryTable#labels}

---

##### `materialized_view`<sup>Optional</sup> <a name="materialized_view" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.materializedView"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView">BigqueryTableMaterializedView</a>

materialized_view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#materialized_view BigqueryTable#materialized_view}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#project BigqueryTable#project}

---

##### `range_partitioning`<sup>Optional</sup> <a name="range_partitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.rangePartitioning"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a>

range_partitioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#range_partitioning BigqueryTable#range_partitioning}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.schema"></a>

- *Type:* str

A JSON schema for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#schema BigqueryTable#schema}

---

##### `time_partitioning`<sup>Optional</sup> <a name="time_partitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.timePartitioning"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning">BigqueryTableTimePartitioning</a>

time_partitioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#time_partitioning BigqueryTable#time_partitioning}

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.Initializer.parameter.view"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView">BigqueryTableView</a>

view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#view BigqueryTable#view}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration">put_external_data_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putMaterializedView">put_materialized_view</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.putRangePartitioning">put_range_partitioning</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetRangePartitioning">reset_range_partitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.resetSchema">reset_schema</a></code> | *No description.* |
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

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

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

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#kms_key_name BigqueryTable#kms_key_name}

---

##### `put_external_data_configuration` <a name="put_external_data_configuration" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration"></a>

```python
def put_external_data_configuration(
  autodetect: typing.Union[bool, IResolvable],
  source_format: str,
  source_uris: typing.List[str],
  avro_options: BigqueryTableExternalDataConfigurationAvroOptions = None,
  compression: str = None,
  connection_id: str = None,
  csv_options: BigqueryTableExternalDataConfigurationCsvOptions = None,
  google_sheets_options: BigqueryTableExternalDataConfigurationGoogleSheetsOptions = None,
  hive_partitioning_options: BigqueryTableExternalDataConfigurationHivePartitioningOptions = None,
  ignore_unknown_values: typing.Union[bool, IResolvable] = None,
  max_bad_records: typing.Union[int, float] = None,
  reference_file_schema_uri: str = None,
  schema: str = None
) -> None
```

###### `autodetect`<sup>Required</sup> <a name="autodetect" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.autodetect"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Let BigQuery try to autodetect the schema and format of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#autodetect BigqueryTable#autodetect}

---

###### `source_format`<sup>Required</sup> <a name="source_format" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.sourceFormat"></a>

- *Type:* str

The data format.

Supported values are: "CSV", "GOOGLE_SHEETS", "NEWLINE_DELIMITED_JSON", "AVRO", "PARQUET", "ORC" and "DATASTORE_BACKUP". To use "GOOGLE_SHEETS" the scopes must include "googleapis.com/auth/drive.readonly".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#source_format BigqueryTable#source_format}

---

###### `source_uris`<sup>Required</sup> <a name="source_uris" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.sourceUris"></a>

- *Type:* typing.List[str]

A list of the fully-qualified URIs that point to your data in Google Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#source_uris BigqueryTable#source_uris}

---

###### `avro_options`<sup>Optional</sup> <a name="avro_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.avroOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions">BigqueryTableExternalDataConfigurationAvroOptions</a>

avro_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#avro_options BigqueryTable#avro_options}

---

###### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.compression"></a>

- *Type:* str

The compression type of the data source. Valid values are "NONE" or "GZIP".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#compression BigqueryTable#compression}

---

###### `connection_id`<sup>Optional</sup> <a name="connection_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.connectionId"></a>

- *Type:* str

The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3.

The connectionId can have the form "{{project}}.{{location}}.{{connection_id}}" or "projects/{{project}}/locations/{{location}}/connections/{{connection_id}}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#connection_id BigqueryTable#connection_id}

---

###### `csv_options`<sup>Optional</sup> <a name="csv_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.csvOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions">BigqueryTableExternalDataConfigurationCsvOptions</a>

csv_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#csv_options BigqueryTable#csv_options}

---

###### `google_sheets_options`<sup>Optional</sup> <a name="google_sheets_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.googleSheetsOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions">BigqueryTableExternalDataConfigurationGoogleSheetsOptions</a>

google_sheets_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#google_sheets_options BigqueryTable#google_sheets_options}

---

###### `hive_partitioning_options`<sup>Optional</sup> <a name="hive_partitioning_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.hivePartitioningOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions">BigqueryTableExternalDataConfigurationHivePartitioningOptions</a>

hive_partitioning_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#hive_partitioning_options BigqueryTable#hive_partitioning_options}

---

###### `ignore_unknown_values`<sup>Optional</sup> <a name="ignore_unknown_values" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.ignoreUnknownValues"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if BigQuery should allow extra values that are not represented in the table schema.

If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#ignore_unknown_values BigqueryTable#ignore_unknown_values}

---

###### `max_bad_records`<sup>Optional</sup> <a name="max_bad_records" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.maxBadRecords"></a>

- *Type:* typing.Union[int, float]

The maximum number of bad records that BigQuery can ignore when reading data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#max_bad_records BigqueryTable#max_bad_records}

---

###### `reference_file_schema_uri`<sup>Optional</sup> <a name="reference_file_schema_uri" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.referenceFileSchemaUri"></a>

- *Type:* str

When creating an external table, the user can provide a reference file with the table schema.

This is enabled for the following formats: AVRO, PARQUET, ORC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#reference_file_schema_uri BigqueryTable#reference_file_schema_uri}

---

###### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putExternalDataConfiguration.parameter.schema"></a>

- *Type:* str

A JSON schema for the external table.

Schema is required for CSV and JSON formats and is disallowed for Google Cloud Bigtable, Cloud Datastore backups, and Avro formats when using external tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#schema BigqueryTable#schema}

---

##### `put_materialized_view` <a name="put_materialized_view" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putMaterializedView"></a>

```python
def put_materialized_view(
  query: str,
  enable_refresh: typing.Union[bool, IResolvable] = None,
  refresh_interval_ms: typing.Union[int, float] = None
) -> None
```

###### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putMaterializedView.parameter.query"></a>

- *Type:* str

A query whose result is persisted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#query BigqueryTable#query}

---

###### `enable_refresh`<sup>Optional</sup> <a name="enable_refresh" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putMaterializedView.parameter.enableRefresh"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if BigQuery should automatically refresh materialized view when the base table is updated. The default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#enable_refresh BigqueryTable#enable_refresh}

---

###### `refresh_interval_ms`<sup>Optional</sup> <a name="refresh_interval_ms" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putMaterializedView.parameter.refreshIntervalMs"></a>

- *Type:* typing.Union[int, float]

Specifies maximum frequency at which this materialized view will be refreshed. The default is 1800000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#refresh_interval_ms BigqueryTable#refresh_interval_ms}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#field BigqueryTable#field}

---

###### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putRangePartitioning.parameter.range"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange">BigqueryTableRangePartitioningRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#range BigqueryTable#range}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#type BigqueryTable#type}

---

###### `expiration_ms`<sup>Optional</sup> <a name="expiration_ms" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTimePartitioning.parameter.expirationMs"></a>

- *Type:* typing.Union[int, float]

Number of milliseconds for which to keep the storage for a partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#expiration_ms BigqueryTable#expiration_ms}

---

###### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTimePartitioning.parameter.field"></a>

- *Type:* str

The field used to determine how to create a time-based partition.

If time-based partitioning is enabled without this value, the table is partitioned based on the load time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#field BigqueryTable#field}

---

###### `require_partition_filter`<sup>Optional</sup> <a name="require_partition_filter" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putTimePartitioning.parameter.requirePartitionFilter"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#require_partition_filter BigqueryTable#require_partition_filter}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#query BigqueryTable#query}

---

###### `use_legacy_sql`<sup>Optional</sup> <a name="use_legacy_sql" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.putView.parameter.useLegacySql"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to use BigQuery's legacy SQL for this view.

The default value is true. If set to false, the view will use BigQuery's standard SQL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#use_legacy_sql BigqueryTable#use_legacy_sql}

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

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_range_partitioning` <a name="reset_range_partitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetRangePartitioning"></a>

```python
def reset_range_partitioning() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.resetSchema"></a>

```python
def reset_schema() -> None
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
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.rangePartitioningInput">range_partitioning_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableIdInput">table_id_input</a></code> | <code>str</code> | *No description.* |
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
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTable.property.project">project</a></code> | <code>str</code> | *No description.* |
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

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `table_id_input`<sup>Optional</sup> <a name="table_id_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.tableIdInput"></a>

```python
table_id_input: str
```

- *Type:* str

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

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryTable.BigqueryTable.property.project"></a>

```python
project: str
```

- *Type:* str

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
  project: str = None,
  range_partitioning: BigqueryTableRangePartitioning = None,
  schema: str = None,
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
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#id BigqueryTable#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A mapping of labels to assign to the resource. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.materializedView">materialized_view</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView">BigqueryTableMaterializedView</a></code> | materialized_view block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.rangePartitioning">range_partitioning</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a></code> | range_partitioning block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.schema">schema</a></code> | <code>str</code> | A JSON schema for the table. |
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#dataset_id BigqueryTable#dataset_id}

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

A unique ID for the resource. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#table_id BigqueryTable#table_id}

---

##### `clustering`<sup>Optional</sup> <a name="clustering" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.clustering"></a>

```python
clustering: typing.List[str]
```

- *Type:* typing.List[str]

Specifies column names to use for data clustering.

Up to four top-level columns are allowed, and should be specified in descending priority order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#clustering BigqueryTable#clustering}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#deletion_protection BigqueryTable#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The field description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#description BigqueryTable#description}

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.encryptionConfiguration"></a>

```python
encryption_configuration: BigqueryTableEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableEncryptionConfiguration">BigqueryTableEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#encryption_configuration BigqueryTable#encryption_configuration}

---

##### `expiration_time`<sup>Optional</sup> <a name="expiration_time" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.expirationTime"></a>

```python
expiration_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time when this table expires, in milliseconds since the epoch.

If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#expiration_time BigqueryTable#expiration_time}

---

##### `external_data_configuration`<sup>Optional</sup> <a name="external_data_configuration" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.externalDataConfiguration"></a>

```python
external_data_configuration: BigqueryTableExternalDataConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration">BigqueryTableExternalDataConfiguration</a>

external_data_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#external_data_configuration BigqueryTable#external_data_configuration}

---

##### `friendly_name`<sup>Optional</sup> <a name="friendly_name" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.friendlyName"></a>

```python
friendly_name: str
```

- *Type:* str

A descriptive name for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#friendly_name BigqueryTable#friendly_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#id BigqueryTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of labels to assign to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#labels BigqueryTable#labels}

---

##### `materialized_view`<sup>Optional</sup> <a name="materialized_view" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.materializedView"></a>

```python
materialized_view: BigqueryTableMaterializedView
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView">BigqueryTableMaterializedView</a>

materialized_view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#materialized_view BigqueryTable#materialized_view}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#project BigqueryTable#project}

---

##### `range_partitioning`<sup>Optional</sup> <a name="range_partitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.rangePartitioning"></a>

```python
range_partitioning: BigqueryTableRangePartitioning
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning">BigqueryTableRangePartitioning</a>

range_partitioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#range_partitioning BigqueryTable#range_partitioning}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

A JSON schema for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#schema BigqueryTable#schema}

---

##### `time_partitioning`<sup>Optional</sup> <a name="time_partitioning" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.timePartitioning"></a>

```python
time_partitioning: BigqueryTableTimePartitioning
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning">BigqueryTableTimePartitioning</a>

time_partitioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#time_partitioning BigqueryTable#time_partitioning}

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-google.bigqueryTable.BigqueryTableConfig.property.view"></a>

```python
view: BigqueryTableView
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableView">BigqueryTableView</a>

view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#view BigqueryTable#view}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#kms_key_name BigqueryTable#kms_key_name}

---

### BigqueryTableExternalDataConfiguration <a name="BigqueryTableExternalDataConfiguration" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableExternalDataConfiguration(
  autodetect: typing.Union[bool, IResolvable],
  source_format: str,
  source_uris: typing.List[str],
  avro_options: BigqueryTableExternalDataConfigurationAvroOptions = None,
  compression: str = None,
  connection_id: str = None,
  csv_options: BigqueryTableExternalDataConfigurationCsvOptions = None,
  google_sheets_options: BigqueryTableExternalDataConfigurationGoogleSheetsOptions = None,
  hive_partitioning_options: BigqueryTableExternalDataConfigurationHivePartitioningOptions = None,
  ignore_unknown_values: typing.Union[bool, IResolvable] = None,
  max_bad_records: typing.Union[int, float] = None,
  reference_file_schema_uri: str = None,
  schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.autodetect">autodetect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Let BigQuery try to autodetect the schema and format of the table. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.sourceFormat">source_format</a></code> | <code>str</code> | The data format. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.sourceUris">source_uris</a></code> | <code>typing.List[str]</code> | A list of the fully-qualified URIs that point to your data in Google Cloud. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.avroOptions">avro_options</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions">BigqueryTableExternalDataConfigurationAvroOptions</a></code> | avro_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.compression">compression</a></code> | <code>str</code> | The compression type of the data source. Valid values are "NONE" or "GZIP". |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.connectionId">connection_id</a></code> | <code>str</code> | The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.csvOptions">csv_options</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions">BigqueryTableExternalDataConfigurationCsvOptions</a></code> | csv_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.googleSheetsOptions">google_sheets_options</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions">BigqueryTableExternalDataConfigurationGoogleSheetsOptions</a></code> | google_sheets_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.hivePartitioningOptions">hive_partitioning_options</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions">BigqueryTableExternalDataConfigurationHivePartitioningOptions</a></code> | hive_partitioning_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.ignoreUnknownValues">ignore_unknown_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if BigQuery should allow extra values that are not represented in the table schema. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.maxBadRecords">max_bad_records</a></code> | <code>typing.Union[int, float]</code> | The maximum number of bad records that BigQuery can ignore when reading data. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.referenceFileSchemaUri">reference_file_schema_uri</a></code> | <code>str</code> | When creating an external table, the user can provide a reference file with the table schema. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.schema">schema</a></code> | <code>str</code> | A JSON schema for the external table. |

---

##### `autodetect`<sup>Required</sup> <a name="autodetect" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.autodetect"></a>

```python
autodetect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Let BigQuery try to autodetect the schema and format of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#autodetect BigqueryTable#autodetect}

---

##### `source_format`<sup>Required</sup> <a name="source_format" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.sourceFormat"></a>

```python
source_format: str
```

- *Type:* str

The data format.

Supported values are: "CSV", "GOOGLE_SHEETS", "NEWLINE_DELIMITED_JSON", "AVRO", "PARQUET", "ORC" and "DATASTORE_BACKUP". To use "GOOGLE_SHEETS" the scopes must include "googleapis.com/auth/drive.readonly".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#source_format BigqueryTable#source_format}

---

##### `source_uris`<sup>Required</sup> <a name="source_uris" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.sourceUris"></a>

```python
source_uris: typing.List[str]
```

- *Type:* typing.List[str]

A list of the fully-qualified URIs that point to your data in Google Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#source_uris BigqueryTable#source_uris}

---

##### `avro_options`<sup>Optional</sup> <a name="avro_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.avroOptions"></a>

```python
avro_options: BigqueryTableExternalDataConfigurationAvroOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions">BigqueryTableExternalDataConfigurationAvroOptions</a>

avro_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#avro_options BigqueryTable#avro_options}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.compression"></a>

```python
compression: str
```

- *Type:* str

The compression type of the data source. Valid values are "NONE" or "GZIP".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#compression BigqueryTable#compression}

---

##### `connection_id`<sup>Optional</sup> <a name="connection_id" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3.

The connectionId can have the form "{{project}}.{{location}}.{{connection_id}}" or "projects/{{project}}/locations/{{location}}/connections/{{connection_id}}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#connection_id BigqueryTable#connection_id}

---

##### `csv_options`<sup>Optional</sup> <a name="csv_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.csvOptions"></a>

```python
csv_options: BigqueryTableExternalDataConfigurationCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions">BigqueryTableExternalDataConfigurationCsvOptions</a>

csv_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#csv_options BigqueryTable#csv_options}

---

##### `google_sheets_options`<sup>Optional</sup> <a name="google_sheets_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.googleSheetsOptions"></a>

```python
google_sheets_options: BigqueryTableExternalDataConfigurationGoogleSheetsOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions">BigqueryTableExternalDataConfigurationGoogleSheetsOptions</a>

google_sheets_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#google_sheets_options BigqueryTable#google_sheets_options}

---

##### `hive_partitioning_options`<sup>Optional</sup> <a name="hive_partitioning_options" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.hivePartitioningOptions"></a>

```python
hive_partitioning_options: BigqueryTableExternalDataConfigurationHivePartitioningOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions">BigqueryTableExternalDataConfigurationHivePartitioningOptions</a>

hive_partitioning_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#hive_partitioning_options BigqueryTable#hive_partitioning_options}

---

##### `ignore_unknown_values`<sup>Optional</sup> <a name="ignore_unknown_values" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.ignoreUnknownValues"></a>

```python
ignore_unknown_values: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if BigQuery should allow extra values that are not represented in the table schema.

If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#ignore_unknown_values BigqueryTable#ignore_unknown_values}

---

##### `max_bad_records`<sup>Optional</sup> <a name="max_bad_records" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.maxBadRecords"></a>

```python
max_bad_records: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of bad records that BigQuery can ignore when reading data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#max_bad_records BigqueryTable#max_bad_records}

---

##### `reference_file_schema_uri`<sup>Optional</sup> <a name="reference_file_schema_uri" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.referenceFileSchemaUri"></a>

```python
reference_file_schema_uri: str
```

- *Type:* str

When creating an external table, the user can provide a reference file with the table schema.

This is enabled for the following formats: AVRO, PARQUET, ORC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#reference_file_schema_uri BigqueryTable#reference_file_schema_uri}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfiguration.property.schema"></a>

```python
schema: str
```

- *Type:* str

A JSON schema for the external table.

Schema is required for CSV and JSON formats and is disallowed for Google Cloud Bigtable, Cloud Datastore backups, and Avro formats when using external tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#schema BigqueryTable#schema}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#use_avro_logical_types BigqueryTable#use_avro_logical_types}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#quote BigqueryTable#quote}

---

##### `allow_jagged_rows`<sup>Optional</sup> <a name="allow_jagged_rows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.allowJaggedRows"></a>

```python
allow_jagged_rows: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if BigQuery should accept rows that are missing trailing optional columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#allow_jagged_rows BigqueryTable#allow_jagged_rows}

---

##### `allow_quoted_newlines`<sup>Optional</sup> <a name="allow_quoted_newlines" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.allowQuotedNewlines"></a>

```python
allow_quoted_newlines: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file.

The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#allow_quoted_newlines BigqueryTable#allow_quoted_newlines}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

The character encoding of the data. The supported values are UTF-8 or ISO-8859-1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#encoding BigqueryTable#encoding}

---

##### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

The separator for fields in a CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#field_delimiter BigqueryTable#field_delimiter}

---

##### `skip_leading_rows`<sup>Optional</sup> <a name="skip_leading_rows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions.property.skipLeadingRows"></a>

```python
skip_leading_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of rows at the top of a CSV file that BigQuery will skip when reading the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#skip_leading_rows BigqueryTable#skip_leading_rows}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#range BigqueryTable#range}

---

##### `skip_leading_rows`<sup>Optional</sup> <a name="skip_leading_rows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions.property.skipLeadingRows"></a>

```python
skip_leading_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of rows at the top of the sheet that BigQuery will skip when reading the data.

At least one of range or skip_leading_rows must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#skip_leading_rows BigqueryTable#skip_leading_rows}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#mode BigqueryTable#mode}

---

##### `require_partition_filter`<sup>Optional</sup> <a name="require_partition_filter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions.property.requirePartitionFilter"></a>

```python
require_partition_filter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#require_partition_filter BigqueryTable#require_partition_filter}

---

##### `source_uri_prefix`<sup>Optional</sup> <a name="source_uri_prefix" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions.property.sourceUriPrefix"></a>

```python
source_uri_prefix: str
```

- *Type:* str

When hive partition detection is requested, a common for all source uris must be required.

The prefix must end immediately before the partition key encoding begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#source_uri_prefix BigqueryTable#source_uri_prefix}

---

### BigqueryTableMaterializedView <a name="BigqueryTableMaterializedView" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_table

bigqueryTable.BigqueryTableMaterializedView(
  query: str,
  enable_refresh: typing.Union[bool, IResolvable] = None,
  refresh_interval_ms: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.query">query</a></code> | <code>str</code> | A query whose result is persisted. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.enableRefresh">enable_refresh</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if BigQuery should automatically refresh materialized view when the base table is updated. The default is true. |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.refreshIntervalMs">refresh_interval_ms</a></code> | <code>typing.Union[int, float]</code> | Specifies maximum frequency at which this materialized view will be refreshed. The default is 1800000. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.query"></a>

```python
query: str
```

- *Type:* str

A query whose result is persisted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#query BigqueryTable#query}

---

##### `enable_refresh`<sup>Optional</sup> <a name="enable_refresh" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.enableRefresh"></a>

```python
enable_refresh: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if BigQuery should automatically refresh materialized view when the base table is updated. The default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#enable_refresh BigqueryTable#enable_refresh}

---

##### `refresh_interval_ms`<sup>Optional</sup> <a name="refresh_interval_ms" id="@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedView.property.refreshIntervalMs"></a>

```python
refresh_interval_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies maximum frequency at which this materialized view will be refreshed. The default is 1800000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#refresh_interval_ms BigqueryTable#refresh_interval_ms}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#field BigqueryTable#field}

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioning.property.range"></a>

```python
range: BigqueryTableRangePartitioningRange
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange">BigqueryTableRangePartitioningRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#range BigqueryTable#range}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#end BigqueryTable#end}

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The width of each range within the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#interval BigqueryTable#interval}

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningRange.property.start"></a>

```python
start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Start of the range partitioning, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#start BigqueryTable#start}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#type BigqueryTable#type}

---

##### `expiration_ms`<sup>Optional</sup> <a name="expiration_ms" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.expirationMs"></a>

```python
expiration_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of milliseconds for which to keep the storage for a partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#expiration_ms BigqueryTable#expiration_ms}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.field"></a>

```python
field: str
```

- *Type:* str

The field used to determine how to create a time-based partition.

If time-based partitioning is enabled without this value, the table is partitioned based on the load time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#field BigqueryTable#field}

---

##### `require_partition_filter`<sup>Optional</sup> <a name="require_partition_filter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableTimePartitioning.property.requirePartitionFilter"></a>

```python
require_partition_filter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#require_partition_filter BigqueryTable#require_partition_filter}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#query BigqueryTable#query}

---

##### `use_legacy_sql`<sup>Optional</sup> <a name="use_legacy_sql" id="@cdktf/provider-google.bigqueryTable.BigqueryTableView.property.useLegacySql"></a>

```python
use_legacy_sql: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to use BigQuery's legacy SQL for this view.

The default value is true. If set to false, the view will use BigQuery's standard SQL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#use_legacy_sql BigqueryTable#use_legacy_sql}

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
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetAvroOptions">reset_avro_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetConnectionId">reset_connection_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetCsvOptions">reset_csv_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetGoogleSheetsOptions">reset_google_sheets_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetHivePartitioningOptions">reset_hive_partitioning_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetIgnoreUnknownValues">reset_ignore_unknown_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetMaxBadRecords">reset_max_bad_records</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetReferenceFileSchemaUri">reset_reference_file_schema_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetSchema">reset_schema</a></code> | *No description.* |

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#use_avro_logical_types BigqueryTable#use_avro_logical_types}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#quote BigqueryTable#quote}

---

###### `allow_jagged_rows`<sup>Optional</sup> <a name="allow_jagged_rows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putCsvOptions.parameter.allowJaggedRows"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if BigQuery should accept rows that are missing trailing optional columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#allow_jagged_rows BigqueryTable#allow_jagged_rows}

---

###### `allow_quoted_newlines`<sup>Optional</sup> <a name="allow_quoted_newlines" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putCsvOptions.parameter.allowQuotedNewlines"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file.

The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#allow_quoted_newlines BigqueryTable#allow_quoted_newlines}

---

###### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putCsvOptions.parameter.encoding"></a>

- *Type:* str

The character encoding of the data. The supported values are UTF-8 or ISO-8859-1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#encoding BigqueryTable#encoding}

---

###### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putCsvOptions.parameter.fieldDelimiter"></a>

- *Type:* str

The separator for fields in a CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#field_delimiter BigqueryTable#field_delimiter}

---

###### `skip_leading_rows`<sup>Optional</sup> <a name="skip_leading_rows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putCsvOptions.parameter.skipLeadingRows"></a>

- *Type:* typing.Union[int, float]

The number of rows at the top of a CSV file that BigQuery will skip when reading the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#skip_leading_rows BigqueryTable#skip_leading_rows}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#range BigqueryTable#range}

---

###### `skip_leading_rows`<sup>Optional</sup> <a name="skip_leading_rows" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putGoogleSheetsOptions.parameter.skipLeadingRows"></a>

- *Type:* typing.Union[int, float]

The number of rows at the top of the sheet that BigQuery will skip when reading the data.

At least one of range or skip_leading_rows must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#skip_leading_rows BigqueryTable#skip_leading_rows}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#mode BigqueryTable#mode}

---

###### `require_partition_filter`<sup>Optional</sup> <a name="require_partition_filter" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putHivePartitioningOptions.parameter.requirePartitionFilter"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#require_partition_filter BigqueryTable#require_partition_filter}

---

###### `source_uri_prefix`<sup>Optional</sup> <a name="source_uri_prefix" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.putHivePartitioningOptions.parameter.sourceUriPrefix"></a>

- *Type:* str

When hive partition detection is requested, a common for all source uris must be required.

The prefix must end immediately before the partition key encoding begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#source_uri_prefix BigqueryTable#source_uri_prefix}

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

##### `reset_max_bad_records` <a name="reset_max_bad_records" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetMaxBadRecords"></a>

```python
def reset_max_bad_records() -> None
```

##### `reset_reference_file_schema_uri` <a name="reset_reference_file_schema_uri" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetReferenceFileSchemaUri"></a>

```python
def reset_reference_file_schema_uri() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
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
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.autodetectInput">autodetect_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.avroOptionsInput">avro_options_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationAvroOptions">BigqueryTableExternalDataConfigurationAvroOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.csvOptionsInput">csv_options_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationCsvOptions">BigqueryTableExternalDataConfigurationCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.googleSheetsOptionsInput">google_sheets_options_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationGoogleSheetsOptions">BigqueryTableExternalDataConfigurationGoogleSheetsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.hivePartitioningOptionsInput">hive_partitioning_options_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationHivePartitioningOptions">BigqueryTableExternalDataConfigurationHivePartitioningOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValuesInput">ignore_unknown_values_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecordsInput">max_bad_records_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.referenceFileSchemaUriInput">reference_file_schema_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.sourceFormatInput">source_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.sourceUrisInput">source_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.autodetect">autodetect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.ignoreUnknownValues">ignore_unknown_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecords">max_bad_records</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
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

##### `max_bad_records_input`<sup>Optional</sup> <a name="max_bad_records_input" id="@cdktf/provider-google.bigqueryTable.BigqueryTableExternalDataConfigurationOutputReference.property.maxBadRecordsInput"></a>

```python
max_bad_records_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

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
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.enableRefreshInput">enable_refresh_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryTable.BigqueryTableMaterializedViewOutputReference.property.refreshIntervalMsInput">refresh_interval_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#end BigqueryTable#end}

---

###### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.putRange.parameter.interval"></a>

- *Type:* typing.Union[int, float]

The width of each range within the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#interval BigqueryTable#interval}

---

###### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-google.bigqueryTable.BigqueryTableRangePartitioningOutputReference.putRange.parameter.start"></a>

- *Type:* typing.Union[int, float]

Start of the range partitioning, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/bigquery_table#start BigqueryTable#start}

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



