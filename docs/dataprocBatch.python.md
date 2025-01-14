# `dataprocBatch` Submodule <a name="`dataprocBatch` Submodule" id="@cdktf/provider-google.dataprocBatch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocBatch <a name="DataprocBatch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch google_dataproc_batch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatch(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  batch_id: str = None,
  environment_config: DataprocBatchEnvironmentConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  pyspark_batch: DataprocBatchPysparkBatch = None,
  runtime_config: DataprocBatchRuntimeConfig = None,
  spark_batch: DataprocBatchSparkBatch = None,
  spark_r_batch: DataprocBatchSparkRBatch = None,
  spark_sql_batch: DataprocBatchSparkSqlBatch = None,
  timeouts: DataprocBatchTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.batchId">batch_id</a></code> | <code>str</code> | The ID to use for the batch, which will become the final component of the batch's resource name. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.environmentConfig">environment_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig">DataprocBatchEnvironmentConfig</a></code> | environment_config block. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#id DataprocBatch#id}. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels to associate with this batch. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.location">location</a></code> | <code>str</code> | The location in which the batch will be created in. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#project DataprocBatch#project}. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.pysparkBatch">pyspark_batch</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch">DataprocBatchPysparkBatch</a></code> | pyspark_batch block. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.runtimeConfig">runtime_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig">DataprocBatchRuntimeConfig</a></code> | runtime_config block. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.sparkBatch">spark_batch</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch">DataprocBatchSparkBatch</a></code> | spark_batch block. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.sparkRBatch">spark_r_batch</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch">DataprocBatchSparkRBatch</a></code> | spark_r_batch block. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.sparkSqlBatch">spark_sql_batch</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch">DataprocBatchSparkSqlBatch</a></code> | spark_sql_batch block. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts">DataprocBatchTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `batch_id`<sup>Optional</sup> <a name="batch_id" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.batchId"></a>

- *Type:* str

The ID to use for the batch, which will become the final component of the batch's resource name.

This value must be 4-63 characters. Valid characters are /[a-z][0-9]-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#batch_id DataprocBatch#batch_id}

---

##### `environment_config`<sup>Optional</sup> <a name="environment_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.environmentConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig">DataprocBatchEnvironmentConfig</a>

environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#environment_config DataprocBatch#environment_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#id DataprocBatch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels to associate with this batch.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#labels DataprocBatch#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.location"></a>

- *Type:* str

The location in which the batch will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#location DataprocBatch#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#project DataprocBatch#project}.

---

##### `pyspark_batch`<sup>Optional</sup> <a name="pyspark_batch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.pysparkBatch"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch">DataprocBatchPysparkBatch</a>

pyspark_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#pyspark_batch DataprocBatch#pyspark_batch}

---

##### `runtime_config`<sup>Optional</sup> <a name="runtime_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.runtimeConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig">DataprocBatchRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#runtime_config DataprocBatch#runtime_config}

---

##### `spark_batch`<sup>Optional</sup> <a name="spark_batch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.sparkBatch"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch">DataprocBatchSparkBatch</a>

spark_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#spark_batch DataprocBatch#spark_batch}

---

##### `spark_r_batch`<sup>Optional</sup> <a name="spark_r_batch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.sparkRBatch"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch">DataprocBatchSparkRBatch</a>

spark_r_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#spark_r_batch DataprocBatch#spark_r_batch}

---

##### `spark_sql_batch`<sup>Optional</sup> <a name="spark_sql_batch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.sparkSqlBatch"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch">DataprocBatchSparkSqlBatch</a>

spark_sql_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#spark_sql_batch DataprocBatch#spark_sql_batch}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts">DataprocBatchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#timeouts DataprocBatch#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.putEnvironmentConfig">put_environment_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.putPysparkBatch">put_pyspark_batch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.putRuntimeConfig">put_runtime_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkBatch">put_spark_batch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkRBatch">put_spark_r_batch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkSqlBatch">put_spark_sql_batch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.resetBatchId">reset_batch_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.resetEnvironmentConfig">reset_environment_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.resetPysparkBatch">reset_pyspark_batch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.resetRuntimeConfig">reset_runtime_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.resetSparkBatch">reset_spark_batch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.resetSparkRBatch">reset_spark_r_batch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.resetSparkSqlBatch">reset_spark_sql_batch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_environment_config` <a name="put_environment_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putEnvironmentConfig"></a>

```python
def put_environment_config(
  execution_config: DataprocBatchEnvironmentConfigExecutionConfig = None,
  peripherals_config: DataprocBatchEnvironmentConfigPeripheralsConfig = None
) -> None
```

###### `execution_config`<sup>Optional</sup> <a name="execution_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putEnvironmentConfig.parameter.executionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig">DataprocBatchEnvironmentConfigExecutionConfig</a>

execution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#execution_config DataprocBatch#execution_config}

---

###### `peripherals_config`<sup>Optional</sup> <a name="peripherals_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putEnvironmentConfig.parameter.peripheralsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig">DataprocBatchEnvironmentConfigPeripheralsConfig</a>

peripherals_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#peripherals_config DataprocBatch#peripherals_config}

---

##### `put_pyspark_batch` <a name="put_pyspark_batch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putPysparkBatch"></a>

```python
def put_pyspark_batch(
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  jar_file_uris: typing.List[str] = None,
  main_python_file_uri: str = None,
  python_file_uris: typing.List[str] = None
) -> None
```

###### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putPysparkBatch.parameter.archiveUris"></a>

- *Type:* typing.List[str]

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#archive_uris DataprocBatch#archive_uris}

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putPysparkBatch.parameter.args"></a>

- *Type:* typing.List[str]

The arguments to pass to the driver.

Do not include arguments that can be set as batch
properties, such as --conf, since a collision can occur that causes an incorrect batch submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#args DataprocBatch#args}

---

###### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putPysparkBatch.parameter.fileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#file_uris DataprocBatch#file_uris}

---

###### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putPysparkBatch.parameter.jarFileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#jar_file_uris DataprocBatch#jar_file_uris}

---

###### `main_python_file_uri`<sup>Optional</sup> <a name="main_python_file_uri" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putPysparkBatch.parameter.mainPythonFileUri"></a>

- *Type:* str

The HCFS URI of the main Python file to use as the Spark driver. Must be a .py file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#main_python_file_uri DataprocBatch#main_python_file_uri}

---

###### `python_file_uris`<sup>Optional</sup> <a name="python_file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putPysparkBatch.parameter.pythonFileUris"></a>

- *Type:* typing.List[str]

HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#python_file_uris DataprocBatch#python_file_uris}

---

##### `put_runtime_config` <a name="put_runtime_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putRuntimeConfig"></a>

```python
def put_runtime_config(
  autotuning_config: DataprocBatchRuntimeConfigAutotuningConfig = None,
  cohort: str = None,
  container_image: str = None,
  properties: typing.Mapping[str] = None,
  version: str = None
) -> None
```

###### `autotuning_config`<sup>Optional</sup> <a name="autotuning_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putRuntimeConfig.parameter.autotuningConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig">DataprocBatchRuntimeConfigAutotuningConfig</a>

autotuning_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#autotuning_config DataprocBatch#autotuning_config}

---

###### `cohort`<sup>Optional</sup> <a name="cohort" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putRuntimeConfig.parameter.cohort"></a>

- *Type:* str

Optional. Cohort identifier. Identifies families of the workloads having the same shape, e.g. daily ETL jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#cohort DataprocBatch#cohort}

---

###### `container_image`<sup>Optional</sup> <a name="container_image" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putRuntimeConfig.parameter.containerImage"></a>

- *Type:* str

Optional custom container image for the job runtime environment. If not specified, a default container image will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#container_image DataprocBatch#container_image}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putRuntimeConfig.parameter.properties"></a>

- *Type:* typing.Mapping[str]

A mapping of property names to values, which are used to configure workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#properties DataprocBatch#properties}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putRuntimeConfig.parameter.version"></a>

- *Type:* str

Version of the batch runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#version DataprocBatch#version}

---

##### `put_spark_batch` <a name="put_spark_batch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkBatch"></a>

```python
def put_spark_batch(
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  jar_file_uris: typing.List[str] = None,
  main_class: str = None,
  main_jar_file_uri: str = None
) -> None
```

###### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkBatch.parameter.archiveUris"></a>

- *Type:* typing.List[str]

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#archive_uris DataprocBatch#archive_uris}

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkBatch.parameter.args"></a>

- *Type:* typing.List[str]

The arguments to pass to the driver.

Do not include arguments that can be set as batch
properties, such as --conf, since a collision can occur that causes an incorrect batch submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#args DataprocBatch#args}

---

###### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkBatch.parameter.fileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#file_uris DataprocBatch#file_uris}

---

###### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkBatch.parameter.jarFileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#jar_file_uris DataprocBatch#jar_file_uris}

---

###### `main_class`<sup>Optional</sup> <a name="main_class" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkBatch.parameter.mainClass"></a>

- *Type:* str

The name of the driver main class.

The jar file that contains the class must be in the
classpath or specified in jarFileUris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#main_class DataprocBatch#main_class}

---

###### `main_jar_file_uri`<sup>Optional</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkBatch.parameter.mainJarFileUri"></a>

- *Type:* str

The HCFS URI of the jar file that contains the main class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#main_jar_file_uri DataprocBatch#main_jar_file_uri}

---

##### `put_spark_r_batch` <a name="put_spark_r_batch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkRBatch"></a>

```python
def put_spark_r_batch(
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  main_r_file_uri: str = None
) -> None
```

###### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkRBatch.parameter.archiveUris"></a>

- *Type:* typing.List[str]

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#archive_uris DataprocBatch#archive_uris}

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkRBatch.parameter.args"></a>

- *Type:* typing.List[str]

The arguments to pass to the driver.

Do not include arguments that can be set as batch
properties, such as --conf, since a collision can occur that causes an incorrect batch submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#args DataprocBatch#args}

---

###### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkRBatch.parameter.fileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#file_uris DataprocBatch#file_uris}

---

###### `main_r_file_uri`<sup>Optional</sup> <a name="main_r_file_uri" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkRBatch.parameter.mainRFileUri"></a>

- *Type:* str

The HCFS URI of the main R file to use as the driver.

Must be a .R or .r file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#main_r_file_uri DataprocBatch#main_r_file_uri}

---

##### `put_spark_sql_batch` <a name="put_spark_sql_batch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkSqlBatch"></a>

```python
def put_spark_sql_batch(
  jar_file_uris: typing.List[str] = None,
  query_file_uri: str = None,
  query_variables: typing.Mapping[str] = None
) -> None
```

###### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkSqlBatch.parameter.jarFileUris"></a>

- *Type:* typing.List[str]

HCFS URIs of jar files to be added to the Spark CLASSPATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#jar_file_uris DataprocBatch#jar_file_uris}

---

###### `query_file_uri`<sup>Optional</sup> <a name="query_file_uri" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkSqlBatch.parameter.queryFileUri"></a>

- *Type:* str

The HCFS URI of the script that contains Spark SQL queries to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#query_file_uri DataprocBatch#query_file_uri}

---

###### `query_variables`<sup>Optional</sup> <a name="query_variables" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putSparkSqlBatch.parameter.queryVariables"></a>

- *Type:* typing.Mapping[str]

Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#query_variables DataprocBatch#query_variables}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#create DataprocBatch#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#delete DataprocBatch#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#update DataprocBatch#update}.

---

##### `reset_batch_id` <a name="reset_batch_id" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.resetBatchId"></a>

```python
def reset_batch_id() -> None
```

##### `reset_environment_config` <a name="reset_environment_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.resetEnvironmentConfig"></a>

```python
def reset_environment_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_pyspark_batch` <a name="reset_pyspark_batch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.resetPysparkBatch"></a>

```python
def reset_pyspark_batch() -> None
```

##### `reset_runtime_config` <a name="reset_runtime_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.resetRuntimeConfig"></a>

```python
def reset_runtime_config() -> None
```

##### `reset_spark_batch` <a name="reset_spark_batch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.resetSparkBatch"></a>

```python
def reset_spark_batch() -> None
```

##### `reset_spark_r_batch` <a name="reset_spark_r_batch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.resetSparkRBatch"></a>

```python
def reset_spark_r_batch() -> None
```

##### `reset_spark_sql_batch` <a name="reset_spark_sql_batch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.resetSparkSqlBatch"></a>

```python
def reset_spark_sql_batch() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataprocBatch resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatch.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatch.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatch.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatch.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataprocBatch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataprocBatch to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataprocBatch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataprocBatch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.environmentConfig">environment_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference">DataprocBatchEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.pysparkBatch">pyspark_batch</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference">DataprocBatchPysparkBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.runtimeConfig">runtime_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference">DataprocBatchRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.runtimeInfo">runtime_info</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList">DataprocBatchRuntimeInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.sparkBatch">spark_batch</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference">DataprocBatchSparkBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.sparkRBatch">spark_r_batch</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference">DataprocBatchSparkRBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.sparkSqlBatch">spark_sql_batch</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference">DataprocBatchSparkSqlBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.stateHistory">state_history</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList">DataprocBatchStateHistoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.stateMessage">state_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.stateTime">state_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference">DataprocBatchTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.batchIdInput">batch_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.environmentConfigInput">environment_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig">DataprocBatchEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.pysparkBatchInput">pyspark_batch_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch">DataprocBatchPysparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.runtimeConfigInput">runtime_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig">DataprocBatchRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.sparkBatchInput">spark_batch_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch">DataprocBatchSparkBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.sparkRBatchInput">spark_r_batch_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch">DataprocBatchSparkRBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.sparkSqlBatchInput">spark_sql_batch_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch">DataprocBatchSparkSqlBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts">DataprocBatchTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.batchId">batch_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `environment_config`<sup>Required</sup> <a name="environment_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.environmentConfig"></a>

```python
environment_config: DataprocBatchEnvironmentConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference">DataprocBatchEnvironmentConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `pyspark_batch`<sup>Required</sup> <a name="pyspark_batch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.pysparkBatch"></a>

```python
pyspark_batch: DataprocBatchPysparkBatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference">DataprocBatchPysparkBatchOutputReference</a>

---

##### `runtime_config`<sup>Required</sup> <a name="runtime_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.runtimeConfig"></a>

```python
runtime_config: DataprocBatchRuntimeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference">DataprocBatchRuntimeConfigOutputReference</a>

---

##### `runtime_info`<sup>Required</sup> <a name="runtime_info" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.runtimeInfo"></a>

```python
runtime_info: DataprocBatchRuntimeInfoList
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList">DataprocBatchRuntimeInfoList</a>

---

##### `spark_batch`<sup>Required</sup> <a name="spark_batch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.sparkBatch"></a>

```python
spark_batch: DataprocBatchSparkBatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference">DataprocBatchSparkBatchOutputReference</a>

---

##### `spark_r_batch`<sup>Required</sup> <a name="spark_r_batch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.sparkRBatch"></a>

```python
spark_r_batch: DataprocBatchSparkRBatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference">DataprocBatchSparkRBatchOutputReference</a>

---

##### `spark_sql_batch`<sup>Required</sup> <a name="spark_sql_batch" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.sparkSqlBatch"></a>

```python
spark_sql_batch: DataprocBatchSparkSqlBatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference">DataprocBatchSparkSqlBatchOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_history`<sup>Required</sup> <a name="state_history" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.stateHistory"></a>

```python
state_history: DataprocBatchStateHistoryList
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList">DataprocBatchStateHistoryList</a>

---

##### `state_message`<sup>Required</sup> <a name="state_message" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.stateMessage"></a>

```python
state_message: str
```

- *Type:* str

---

##### `state_time`<sup>Required</sup> <a name="state_time" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.stateTime"></a>

```python
state_time: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.timeouts"></a>

```python
timeouts: DataprocBatchTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference">DataprocBatchTimeoutsOutputReference</a>

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `batch_id_input`<sup>Optional</sup> <a name="batch_id_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.batchIdInput"></a>

```python
batch_id_input: str
```

- *Type:* str

---

##### `environment_config_input`<sup>Optional</sup> <a name="environment_config_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.environmentConfigInput"></a>

```python
environment_config_input: DataprocBatchEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig">DataprocBatchEnvironmentConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `pyspark_batch_input`<sup>Optional</sup> <a name="pyspark_batch_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.pysparkBatchInput"></a>

```python
pyspark_batch_input: DataprocBatchPysparkBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch">DataprocBatchPysparkBatch</a>

---

##### `runtime_config_input`<sup>Optional</sup> <a name="runtime_config_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.runtimeConfigInput"></a>

```python
runtime_config_input: DataprocBatchRuntimeConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig">DataprocBatchRuntimeConfig</a>

---

##### `spark_batch_input`<sup>Optional</sup> <a name="spark_batch_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.sparkBatchInput"></a>

```python
spark_batch_input: DataprocBatchSparkBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch">DataprocBatchSparkBatch</a>

---

##### `spark_r_batch_input`<sup>Optional</sup> <a name="spark_r_batch_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.sparkRBatchInput"></a>

```python
spark_r_batch_input: DataprocBatchSparkRBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch">DataprocBatchSparkRBatch</a>

---

##### `spark_sql_batch_input`<sup>Optional</sup> <a name="spark_sql_batch_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.sparkSqlBatchInput"></a>

```python
spark_sql_batch_input: DataprocBatchSparkSqlBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch">DataprocBatchSparkSqlBatch</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataprocBatchTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts">DataprocBatchTimeouts</a>]

---

##### `batch_id`<sup>Required</sup> <a name="batch_id" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.batchId"></a>

```python
batch_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatch.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataprocBatch.DataprocBatch.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocBatchConfig <a name="DataprocBatchConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  batch_id: str = None,
  environment_config: DataprocBatchEnvironmentConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  pyspark_batch: DataprocBatchPysparkBatch = None,
  runtime_config: DataprocBatchRuntimeConfig = None,
  spark_batch: DataprocBatchSparkBatch = None,
  spark_r_batch: DataprocBatchSparkRBatch = None,
  spark_sql_batch: DataprocBatchSparkSqlBatch = None,
  timeouts: DataprocBatchTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.batchId">batch_id</a></code> | <code>str</code> | The ID to use for the batch, which will become the final component of the batch's resource name. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.environmentConfig">environment_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig">DataprocBatchEnvironmentConfig</a></code> | environment_config block. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#id DataprocBatch#id}. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels to associate with this batch. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.location">location</a></code> | <code>str</code> | The location in which the batch will be created in. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#project DataprocBatch#project}. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.pysparkBatch">pyspark_batch</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch">DataprocBatchPysparkBatch</a></code> | pyspark_batch block. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.runtimeConfig">runtime_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig">DataprocBatchRuntimeConfig</a></code> | runtime_config block. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.sparkBatch">spark_batch</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch">DataprocBatchSparkBatch</a></code> | spark_batch block. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.sparkRBatch">spark_r_batch</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch">DataprocBatchSparkRBatch</a></code> | spark_r_batch block. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.sparkSqlBatch">spark_sql_batch</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch">DataprocBatchSparkSqlBatch</a></code> | spark_sql_batch block. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts">DataprocBatchTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `batch_id`<sup>Optional</sup> <a name="batch_id" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.batchId"></a>

```python
batch_id: str
```

- *Type:* str

The ID to use for the batch, which will become the final component of the batch's resource name.

This value must be 4-63 characters. Valid characters are /[a-z][0-9]-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#batch_id DataprocBatch#batch_id}

---

##### `environment_config`<sup>Optional</sup> <a name="environment_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.environmentConfig"></a>

```python
environment_config: DataprocBatchEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig">DataprocBatchEnvironmentConfig</a>

environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#environment_config DataprocBatch#environment_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#id DataprocBatch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels to associate with this batch.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#labels DataprocBatch#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location in which the batch will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#location DataprocBatch#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#project DataprocBatch#project}.

---

##### `pyspark_batch`<sup>Optional</sup> <a name="pyspark_batch" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.pysparkBatch"></a>

```python
pyspark_batch: DataprocBatchPysparkBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch">DataprocBatchPysparkBatch</a>

pyspark_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#pyspark_batch DataprocBatch#pyspark_batch}

---

##### `runtime_config`<sup>Optional</sup> <a name="runtime_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.runtimeConfig"></a>

```python
runtime_config: DataprocBatchRuntimeConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig">DataprocBatchRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#runtime_config DataprocBatch#runtime_config}

---

##### `spark_batch`<sup>Optional</sup> <a name="spark_batch" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.sparkBatch"></a>

```python
spark_batch: DataprocBatchSparkBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch">DataprocBatchSparkBatch</a>

spark_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#spark_batch DataprocBatch#spark_batch}

---

##### `spark_r_batch`<sup>Optional</sup> <a name="spark_r_batch" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.sparkRBatch"></a>

```python
spark_r_batch: DataprocBatchSparkRBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch">DataprocBatchSparkRBatch</a>

spark_r_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#spark_r_batch DataprocBatch#spark_r_batch}

---

##### `spark_sql_batch`<sup>Optional</sup> <a name="spark_sql_batch" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.sparkSqlBatch"></a>

```python
spark_sql_batch: DataprocBatchSparkSqlBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch">DataprocBatchSparkSqlBatch</a>

spark_sql_batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#spark_sql_batch DataprocBatch#spark_sql_batch}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocBatch.DataprocBatchConfig.property.timeouts"></a>

```python
timeouts: DataprocBatchTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts">DataprocBatchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#timeouts DataprocBatch#timeouts}

---

### DataprocBatchEnvironmentConfig <a name="DataprocBatchEnvironmentConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchEnvironmentConfig(
  execution_config: DataprocBatchEnvironmentConfigExecutionConfig = None,
  peripherals_config: DataprocBatchEnvironmentConfigPeripheralsConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig.property.executionConfig">execution_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig">DataprocBatchEnvironmentConfigExecutionConfig</a></code> | execution_config block. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig.property.peripheralsConfig">peripherals_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig">DataprocBatchEnvironmentConfigPeripheralsConfig</a></code> | peripherals_config block. |

---

##### `execution_config`<sup>Optional</sup> <a name="execution_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig.property.executionConfig"></a>

```python
execution_config: DataprocBatchEnvironmentConfigExecutionConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig">DataprocBatchEnvironmentConfigExecutionConfig</a>

execution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#execution_config DataprocBatch#execution_config}

---

##### `peripherals_config`<sup>Optional</sup> <a name="peripherals_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig.property.peripheralsConfig"></a>

```python
peripherals_config: DataprocBatchEnvironmentConfigPeripheralsConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig">DataprocBatchEnvironmentConfigPeripheralsConfig</a>

peripherals_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#peripherals_config DataprocBatch#peripherals_config}

---

### DataprocBatchEnvironmentConfigExecutionConfig <a name="DataprocBatchEnvironmentConfigExecutionConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig(
  kms_key: str = None,
  network_tags: typing.List[str] = None,
  network_uri: str = None,
  service_account: str = None,
  staging_bucket: str = None,
  subnetwork_uri: str = None,
  ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.kmsKey">kms_key</a></code> | <code>str</code> | The Cloud KMS key to use for encryption. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.networkTags">network_tags</a></code> | <code>typing.List[str]</code> | Tags used for network traffic control. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.networkUri">network_uri</a></code> | <code>str</code> | Network configuration for workload execution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | Service account that used to execute workload. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.stagingBucket">staging_bucket</a></code> | <code>str</code> | A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.subnetworkUri">subnetwork_uri</a></code> | <code>str</code> | Subnetwork configuration for workload execution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.ttl">ttl</a></code> | <code>str</code> | The duration after which the workload will be terminated. |

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The Cloud KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#kms_key DataprocBatch#kms_key}

---

##### `network_tags`<sup>Optional</sup> <a name="network_tags" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.networkTags"></a>

```python
network_tags: typing.List[str]
```

- *Type:* typing.List[str]

Tags used for network traffic control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#network_tags DataprocBatch#network_tags}

---

##### `network_uri`<sup>Optional</sup> <a name="network_uri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.networkUri"></a>

```python
network_uri: str
```

- *Type:* str

Network configuration for workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#network_uri DataprocBatch#network_uri}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Service account that used to execute workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#service_account DataprocBatch#service_account}

---

##### `staging_bucket`<sup>Optional</sup> <a name="staging_bucket" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.stagingBucket"></a>

```python
staging_bucket: str
```

- *Type:* str

A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files.

If you do not specify a staging bucket,
Cloud Dataproc will determine a Cloud Storage location according to the region where your workload is running,
and then create and manage project-level, per-location staging and temporary buckets.
This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#staging_bucket DataprocBatch#staging_bucket}

---

##### `subnetwork_uri`<sup>Optional</sup> <a name="subnetwork_uri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.subnetworkUri"></a>

```python
subnetwork_uri: str
```

- *Type:* str

Subnetwork configuration for workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#subnetwork_uri DataprocBatch#subnetwork_uri}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

The duration after which the workload will be terminated.

When the workload exceeds this duration, it will be unconditionally terminated without waiting for ongoing
work to finish. If ttl is not specified for a batch workload, the workload will be allowed to run until it
exits naturally (or run forever without exiting). If ttl is not specified for an interactive session,
it defaults to 24 hours. If ttl is not specified for a batch that uses 2.1+ runtime version, it defaults to 4 hours.
Minimum value is 10 minutes; maximum value is 14 days. If both ttl and idleTtl are specified (for an interactive session),
the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idleTtl or
when ttl has been exceeded, whichever occurs first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#ttl DataprocBatch#ttl}

---

### DataprocBatchEnvironmentConfigPeripheralsConfig <a name="DataprocBatchEnvironmentConfigPeripheralsConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig(
  metastore_service: str = None,
  spark_history_server_config: DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig.property.metastoreService">metastore_service</a></code> | <code>str</code> | Resource name of an existing Dataproc Metastore service. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig.property.sparkHistoryServerConfig">spark_history_server_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | spark_history_server_config block. |

---

##### `metastore_service`<sup>Optional</sup> <a name="metastore_service" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig.property.metastoreService"></a>

```python
metastore_service: str
```

- *Type:* str

Resource name of an existing Dataproc Metastore service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#metastore_service DataprocBatch#metastore_service}

---

##### `spark_history_server_config`<sup>Optional</sup> <a name="spark_history_server_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig.property.sparkHistoryServerConfig"></a>

```python
spark_history_server_config: DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

spark_history_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#spark_history_server_config DataprocBatch#spark_history_server_config}

---

### DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig <a name="DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig(
  dataproc_cluster: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.property.dataprocCluster">dataproc_cluster</a></code> | <code>str</code> | Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload. |

---

##### `dataproc_cluster`<sup>Optional</sup> <a name="dataproc_cluster" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.property.dataprocCluster"></a>

```python
dataproc_cluster: str
```

- *Type:* str

Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#dataproc_cluster DataprocBatch#dataproc_cluster}

---

### DataprocBatchPysparkBatch <a name="DataprocBatchPysparkBatch" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchPysparkBatch(
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  jar_file_uris: typing.List[str] = None,
  main_python_file_uri: str = None,
  python_file_uris: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.args">args</a></code> | <code>typing.List[str]</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of jar files to add to the classpath of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.mainPythonFileUri">main_python_file_uri</a></code> | <code>str</code> | The HCFS URI of the main Python file to use as the Spark driver. Must be a .py file. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.pythonFileUris">python_file_uris</a></code> | <code>typing.List[str]</code> | HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip. |

---

##### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#archive_uris DataprocBatch#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

The arguments to pass to the driver.

Do not include arguments that can be set as batch
properties, such as --conf, since a collision can occur that causes an incorrect batch submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#args DataprocBatch#args}

---

##### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#file_uris DataprocBatch#file_uris}

---

##### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#jar_file_uris DataprocBatch#jar_file_uris}

---

##### `main_python_file_uri`<sup>Optional</sup> <a name="main_python_file_uri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.mainPythonFileUri"></a>

```python
main_python_file_uri: str
```

- *Type:* str

The HCFS URI of the main Python file to use as the Spark driver. Must be a .py file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#main_python_file_uri DataprocBatch#main_python_file_uri}

---

##### `python_file_uris`<sup>Optional</sup> <a name="python_file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch.property.pythonFileUris"></a>

```python
python_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#python_file_uris DataprocBatch#python_file_uris}

---

### DataprocBatchRuntimeConfig <a name="DataprocBatchRuntimeConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchRuntimeConfig(
  autotuning_config: DataprocBatchRuntimeConfigAutotuningConfig = None,
  cohort: str = None,
  container_image: str = None,
  properties: typing.Mapping[str] = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.autotuningConfig">autotuning_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig">DataprocBatchRuntimeConfigAutotuningConfig</a></code> | autotuning_config block. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.cohort">cohort</a></code> | <code>str</code> | Optional. Cohort identifier. Identifies families of the workloads having the same shape, e.g. daily ETL jobs. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.containerImage">container_image</a></code> | <code>str</code> | Optional custom container image for the job runtime environment. If not specified, a default container image will be used. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | A mapping of property names to values, which are used to configure workload execution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.version">version</a></code> | <code>str</code> | Version of the batch runtime. |

---

##### `autotuning_config`<sup>Optional</sup> <a name="autotuning_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.autotuningConfig"></a>

```python
autotuning_config: DataprocBatchRuntimeConfigAutotuningConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig">DataprocBatchRuntimeConfigAutotuningConfig</a>

autotuning_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#autotuning_config DataprocBatch#autotuning_config}

---

##### `cohort`<sup>Optional</sup> <a name="cohort" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.cohort"></a>

```python
cohort: str
```

- *Type:* str

Optional. Cohort identifier. Identifies families of the workloads having the same shape, e.g. daily ETL jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#cohort DataprocBatch#cohort}

---

##### `container_image`<sup>Optional</sup> <a name="container_image" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.containerImage"></a>

```python
container_image: str
```

- *Type:* str

Optional custom container image for the job runtime environment. If not specified, a default container image will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#container_image DataprocBatch#container_image}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of property names to values, which are used to configure workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#properties DataprocBatch#properties}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Version of the batch runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#version DataprocBatch#version}

---

### DataprocBatchRuntimeConfigAutotuningConfig <a name="DataprocBatchRuntimeConfigAutotuningConfig" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig(
  scenarios: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig.property.scenarios">scenarios</a></code> | <code>typing.List[str]</code> | Optional. Scenarios for which tunings are applied. Possible values: ["SCALING", "BROADCAST_HASH_JOIN", "MEMORY"]. |

---

##### `scenarios`<sup>Optional</sup> <a name="scenarios" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig.property.scenarios"></a>

```python
scenarios: typing.List[str]
```

- *Type:* typing.List[str]

Optional. Scenarios for which tunings are applied. Possible values: ["SCALING", "BROADCAST_HASH_JOIN", "MEMORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#scenarios DataprocBatch#scenarios}

---

### DataprocBatchRuntimeInfo <a name="DataprocBatchRuntimeInfo" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchRuntimeInfo()
```


### DataprocBatchRuntimeInfoApproximateUsage <a name="DataprocBatchRuntimeInfoApproximateUsage" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsage.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchRuntimeInfoApproximateUsage()
```


### DataprocBatchRuntimeInfoCurrentUsage <a name="DataprocBatchRuntimeInfoCurrentUsage" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsage.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchRuntimeInfoCurrentUsage()
```


### DataprocBatchSparkBatch <a name="DataprocBatchSparkBatch" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchSparkBatch(
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  jar_file_uris: typing.List[str] = None,
  main_class: str = None,
  main_jar_file_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.args">args</a></code> | <code>typing.List[str]</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of jar files to add to the classpath of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.mainClass">main_class</a></code> | <code>str</code> | The name of the driver main class. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.mainJarFileUri">main_jar_file_uri</a></code> | <code>str</code> | The HCFS URI of the jar file that contains the main class. |

---

##### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#archive_uris DataprocBatch#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

The arguments to pass to the driver.

Do not include arguments that can be set as batch
properties, such as --conf, since a collision can occur that causes an incorrect batch submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#args DataprocBatch#args}

---

##### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#file_uris DataprocBatch#file_uris}

---

##### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#jar_file_uris DataprocBatch#jar_file_uris}

---

##### `main_class`<sup>Optional</sup> <a name="main_class" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.mainClass"></a>

```python
main_class: str
```

- *Type:* str

The name of the driver main class.

The jar file that contains the class must be in the
classpath or specified in jarFileUris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#main_class DataprocBatch#main_class}

---

##### `main_jar_file_uri`<sup>Optional</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch.property.mainJarFileUri"></a>

```python
main_jar_file_uri: str
```

- *Type:* str

The HCFS URI of the jar file that contains the main class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#main_jar_file_uri DataprocBatch#main_jar_file_uri}

---

### DataprocBatchSparkRBatch <a name="DataprocBatchSparkRBatch" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchSparkRBatch(
  archive_uris: typing.List[str] = None,
  args: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  main_r_file_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch.property.args">args</a></code> | <code>typing.List[str]</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch.property.mainRFileUri">main_r_file_uri</a></code> | <code>str</code> | The HCFS URI of the main R file to use as the driver. |

---

##### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#archive_uris DataprocBatch#archive_uris}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

The arguments to pass to the driver.

Do not include arguments that can be set as batch
properties, such as --conf, since a collision can occur that causes an incorrect batch submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#args DataprocBatch#args}

---

##### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#file_uris DataprocBatch#file_uris}

---

##### `main_r_file_uri`<sup>Optional</sup> <a name="main_r_file_uri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch.property.mainRFileUri"></a>

```python
main_r_file_uri: str
```

- *Type:* str

The HCFS URI of the main R file to use as the driver.

Must be a .R or .r file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#main_r_file_uri DataprocBatch#main_r_file_uri}

---

### DataprocBatchSparkSqlBatch <a name="DataprocBatchSparkSqlBatch" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchSparkSqlBatch(
  jar_file_uris: typing.List[str] = None,
  query_file_uri: str = None,
  query_variables: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | HCFS URIs of jar files to be added to the Spark CLASSPATH. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch.property.queryFileUri">query_file_uri</a></code> | <code>str</code> | The HCFS URI of the script that contains Spark SQL queries to execute. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch.property.queryVariables">query_variables</a></code> | <code>typing.Mapping[str]</code> | Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";). |

---

##### `jar_file_uris`<sup>Optional</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

HCFS URIs of jar files to be added to the Spark CLASSPATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#jar_file_uris DataprocBatch#jar_file_uris}

---

##### `query_file_uri`<sup>Optional</sup> <a name="query_file_uri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch.property.queryFileUri"></a>

```python
query_file_uri: str
```

- *Type:* str

The HCFS URI of the script that contains Spark SQL queries to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#query_file_uri DataprocBatch#query_file_uri}

---

##### `query_variables`<sup>Optional</sup> <a name="query_variables" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch.property.queryVariables"></a>

```python
query_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#query_variables DataprocBatch#query_variables}

---

### DataprocBatchStateHistory <a name="DataprocBatchStateHistory" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistory.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchStateHistory()
```


### DataprocBatchTimeouts <a name="DataprocBatchTimeouts" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#create DataprocBatch#create}. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#delete DataprocBatch#delete}. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#update DataprocBatch#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#create DataprocBatch#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#delete DataprocBatch#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#update DataprocBatch#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocBatchEnvironmentConfigExecutionConfigOutputReference <a name="DataprocBatchEnvironmentConfigExecutionConfigOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetNetworkTags">reset_network_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetNetworkUri">reset_network_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetStagingBucket">reset_staging_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetSubnetworkUri">reset_subnetwork_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_network_tags` <a name="reset_network_tags" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetNetworkTags"></a>

```python
def reset_network_tags() -> None
```

##### `reset_network_uri` <a name="reset_network_uri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetNetworkUri"></a>

```python
def reset_network_uri() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_staging_bucket` <a name="reset_staging_bucket" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetStagingBucket"></a>

```python
def reset_staging_bucket() -> None
```

##### `reset_subnetwork_uri` <a name="reset_subnetwork_uri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetSubnetworkUri"></a>

```python
def reset_subnetwork_uri() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.resetTtl"></a>

```python
def reset_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkTagsInput">network_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkUriInput">network_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.stagingBucketInput">staging_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUriInput">subnetwork_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkTags">network_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkUri">network_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.stagingBucket">staging_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUri">subnetwork_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig">DataprocBatchEnvironmentConfigExecutionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `network_tags_input`<sup>Optional</sup> <a name="network_tags_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkTagsInput"></a>

```python
network_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_uri_input`<sup>Optional</sup> <a name="network_uri_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkUriInput"></a>

```python
network_uri_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `staging_bucket_input`<sup>Optional</sup> <a name="staging_bucket_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.stagingBucketInput"></a>

```python
staging_bucket_input: str
```

- *Type:* str

---

##### `subnetwork_uri_input`<sup>Optional</sup> <a name="subnetwork_uri_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUriInput"></a>

```python
subnetwork_uri_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `network_tags`<sup>Required</sup> <a name="network_tags" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkTags"></a>

```python
network_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_uri`<sup>Required</sup> <a name="network_uri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.networkUri"></a>

```python
network_uri: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `staging_bucket`<sup>Required</sup> <a name="staging_bucket" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.stagingBucket"></a>

```python
staging_bucket: str
```

- *Type:* str

---

##### `subnetwork_uri`<sup>Required</sup> <a name="subnetwork_uri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUri"></a>

```python
subnetwork_uri: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocBatchEnvironmentConfigExecutionConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig">DataprocBatchEnvironmentConfigExecutionConfig</a>

---


### DataprocBatchEnvironmentConfigOutputReference <a name="DataprocBatchEnvironmentConfigOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchEnvironmentConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.putExecutionConfig">put_execution_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.putPeripheralsConfig">put_peripherals_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.resetExecutionConfig">reset_execution_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.resetPeripheralsConfig">reset_peripherals_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_execution_config` <a name="put_execution_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.putExecutionConfig"></a>

```python
def put_execution_config(
  kms_key: str = None,
  network_tags: typing.List[str] = None,
  network_uri: str = None,
  service_account: str = None,
  staging_bucket: str = None,
  subnetwork_uri: str = None,
  ttl: str = None
) -> None
```

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.putExecutionConfig.parameter.kmsKey"></a>

- *Type:* str

The Cloud KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#kms_key DataprocBatch#kms_key}

---

###### `network_tags`<sup>Optional</sup> <a name="network_tags" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.putExecutionConfig.parameter.networkTags"></a>

- *Type:* typing.List[str]

Tags used for network traffic control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#network_tags DataprocBatch#network_tags}

---

###### `network_uri`<sup>Optional</sup> <a name="network_uri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.putExecutionConfig.parameter.networkUri"></a>

- *Type:* str

Network configuration for workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#network_uri DataprocBatch#network_uri}

---

###### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.putExecutionConfig.parameter.serviceAccount"></a>

- *Type:* str

Service account that used to execute workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#service_account DataprocBatch#service_account}

---

###### `staging_bucket`<sup>Optional</sup> <a name="staging_bucket" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.putExecutionConfig.parameter.stagingBucket"></a>

- *Type:* str

A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files.

If you do not specify a staging bucket,
Cloud Dataproc will determine a Cloud Storage location according to the region where your workload is running,
and then create and manage project-level, per-location staging and temporary buckets.
This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#staging_bucket DataprocBatch#staging_bucket}

---

###### `subnetwork_uri`<sup>Optional</sup> <a name="subnetwork_uri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.putExecutionConfig.parameter.subnetworkUri"></a>

- *Type:* str

Subnetwork configuration for workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#subnetwork_uri DataprocBatch#subnetwork_uri}

---

###### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.putExecutionConfig.parameter.ttl"></a>

- *Type:* str

The duration after which the workload will be terminated.

When the workload exceeds this duration, it will be unconditionally terminated without waiting for ongoing
work to finish. If ttl is not specified for a batch workload, the workload will be allowed to run until it
exits naturally (or run forever without exiting). If ttl is not specified for an interactive session,
it defaults to 24 hours. If ttl is not specified for a batch that uses 2.1+ runtime version, it defaults to 4 hours.
Minimum value is 10 minutes; maximum value is 14 days. If both ttl and idleTtl are specified (for an interactive session),
the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idleTtl or
when ttl has been exceeded, whichever occurs first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#ttl DataprocBatch#ttl}

---

##### `put_peripherals_config` <a name="put_peripherals_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.putPeripheralsConfig"></a>

```python
def put_peripherals_config(
  metastore_service: str = None,
  spark_history_server_config: DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig = None
) -> None
```

###### `metastore_service`<sup>Optional</sup> <a name="metastore_service" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.putPeripheralsConfig.parameter.metastoreService"></a>

- *Type:* str

Resource name of an existing Dataproc Metastore service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#metastore_service DataprocBatch#metastore_service}

---

###### `spark_history_server_config`<sup>Optional</sup> <a name="spark_history_server_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.putPeripheralsConfig.parameter.sparkHistoryServerConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

spark_history_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#spark_history_server_config DataprocBatch#spark_history_server_config}

---

##### `reset_execution_config` <a name="reset_execution_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.resetExecutionConfig"></a>

```python
def reset_execution_config() -> None
```

##### `reset_peripherals_config` <a name="reset_peripherals_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.resetPeripheralsConfig"></a>

```python
def reset_peripherals_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.executionConfig">execution_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference">DataprocBatchEnvironmentConfigExecutionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.peripheralsConfig">peripherals_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference">DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.executionConfigInput">execution_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig">DataprocBatchEnvironmentConfigExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.peripheralsConfigInput">peripherals_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig">DataprocBatchEnvironmentConfigPeripheralsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig">DataprocBatchEnvironmentConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_config`<sup>Required</sup> <a name="execution_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.executionConfig"></a>

```python
execution_config: DataprocBatchEnvironmentConfigExecutionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfigOutputReference">DataprocBatchEnvironmentConfigExecutionConfigOutputReference</a>

---

##### `peripherals_config`<sup>Required</sup> <a name="peripherals_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.peripheralsConfig"></a>

```python
peripherals_config: DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference">DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference</a>

---

##### `execution_config_input`<sup>Optional</sup> <a name="execution_config_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.executionConfigInput"></a>

```python
execution_config_input: DataprocBatchEnvironmentConfigExecutionConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigExecutionConfig">DataprocBatchEnvironmentConfigExecutionConfig</a>

---

##### `peripherals_config_input`<sup>Optional</sup> <a name="peripherals_config_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.peripheralsConfigInput"></a>

```python
peripherals_config_input: DataprocBatchEnvironmentConfigPeripheralsConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig">DataprocBatchEnvironmentConfigPeripheralsConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocBatchEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfig">DataprocBatchEnvironmentConfig</a>

---


### DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference <a name="DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig">put_spark_history_server_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resetMetastoreService">reset_metastore_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resetSparkHistoryServerConfig">reset_spark_history_server_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_spark_history_server_config` <a name="put_spark_history_server_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig"></a>

```python
def put_spark_history_server_config(
  dataproc_cluster: str = None
) -> None
```

###### `dataproc_cluster`<sup>Optional</sup> <a name="dataproc_cluster" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig.parameter.dataprocCluster"></a>

- *Type:* str

Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#dataproc_cluster DataprocBatch#dataproc_cluster}

---

##### `reset_metastore_service` <a name="reset_metastore_service" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resetMetastoreService"></a>

```python
def reset_metastore_service() -> None
```

##### `reset_spark_history_server_config` <a name="reset_spark_history_server_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.resetSparkHistoryServerConfig"></a>

```python
def reset_spark_history_server_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfig">spark_history_server_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreServiceInput">metastore_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfigInput">spark_history_server_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreService">metastore_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig">DataprocBatchEnvironmentConfigPeripheralsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `spark_history_server_config`<sup>Required</sup> <a name="spark_history_server_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfig"></a>

```python
spark_history_server_config: DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference</a>

---

##### `metastore_service_input`<sup>Optional</sup> <a name="metastore_service_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreServiceInput"></a>

```python
metastore_service_input: str
```

- *Type:* str

---

##### `spark_history_server_config_input`<sup>Optional</sup> <a name="spark_history_server_config_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfigInput"></a>

```python
spark_history_server_config_input: DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---

##### `metastore_service`<sup>Required</sup> <a name="metastore_service" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreService"></a>

```python
metastore_service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocBatchEnvironmentConfigPeripheralsConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfig">DataprocBatchEnvironmentConfigPeripheralsConfig</a>

---


### DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference <a name="DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster">reset_dataproc_cluster</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataproc_cluster` <a name="reset_dataproc_cluster" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster"></a>

```python
def reset_dataproc_cluster() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput">dataproc_cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster">dataproc_cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataproc_cluster_input`<sup>Optional</sup> <a name="dataproc_cluster_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput"></a>

```python
dataproc_cluster_input: str
```

- *Type:* str

---

##### `dataproc_cluster`<sup>Required</sup> <a name="dataproc_cluster" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster"></a>

```python
dataproc_cluster: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocBatchEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---


### DataprocBatchPysparkBatchOutputReference <a name="DataprocBatchPysparkBatchOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchPysparkBatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetArchiveUris">reset_archive_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetFileUris">reset_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetJarFileUris">reset_jar_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetMainPythonFileUri">reset_main_python_file_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetPythonFileUris">reset_python_file_uris</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_archive_uris` <a name="reset_archive_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetArchiveUris"></a>

```python
def reset_archive_uris() -> None
```

##### `reset_args` <a name="reset_args" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_file_uris` <a name="reset_file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetFileUris"></a>

```python
def reset_file_uris() -> None
```

##### `reset_jar_file_uris` <a name="reset_jar_file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetJarFileUris"></a>

```python
def reset_jar_file_uris() -> None
```

##### `reset_main_python_file_uri` <a name="reset_main_python_file_uri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetMainPythonFileUri"></a>

```python
def reset_main_python_file_uri() -> None
```

##### `reset_python_file_uris` <a name="reset_python_file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.resetPythonFileUris"></a>

```python
def reset_python_file_uris() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.archiveUrisInput">archive_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.fileUrisInput">file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.jarFileUrisInput">jar_file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.mainPythonFileUriInput">main_python_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.pythonFileUrisInput">python_file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.mainPythonFileUri">main_python_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.pythonFileUris">python_file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch">DataprocBatchPysparkBatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `archive_uris_input`<sup>Optional</sup> <a name="archive_uris_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.archiveUrisInput"></a>

```python
archive_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris_input`<sup>Optional</sup> <a name="file_uris_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.fileUrisInput"></a>

```python
file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar_file_uris_input`<sup>Optional</sup> <a name="jar_file_uris_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.jarFileUrisInput"></a>

```python
jar_file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_python_file_uri_input`<sup>Optional</sup> <a name="main_python_file_uri_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.mainPythonFileUriInput"></a>

```python
main_python_file_uri_input: str
```

- *Type:* str

---

##### `python_file_uris_input`<sup>Optional</sup> <a name="python_file_uris_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.pythonFileUrisInput"></a>

```python
python_file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `archive_uris`<sup>Required</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris`<sup>Required</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar_file_uris`<sup>Required</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_python_file_uri`<sup>Required</sup> <a name="main_python_file_uri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.mainPythonFileUri"></a>

```python
main_python_file_uri: str
```

- *Type:* str

---

##### `python_file_uris`<sup>Required</sup> <a name="python_file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.pythonFileUris"></a>

```python
python_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatchOutputReference.property.internalValue"></a>

```python
internal_value: DataprocBatchPysparkBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchPysparkBatch">DataprocBatchPysparkBatch</a>

---


### DataprocBatchRuntimeConfigAutotuningConfigOutputReference <a name="DataprocBatchRuntimeConfigAutotuningConfigOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.resetScenarios">reset_scenarios</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scenarios` <a name="reset_scenarios" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.resetScenarios"></a>

```python
def reset_scenarios() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.scenariosInput">scenarios_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.scenarios">scenarios</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig">DataprocBatchRuntimeConfigAutotuningConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scenarios_input`<sup>Optional</sup> <a name="scenarios_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.scenariosInput"></a>

```python
scenarios_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scenarios`<sup>Required</sup> <a name="scenarios" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.scenarios"></a>

```python
scenarios: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocBatchRuntimeConfigAutotuningConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig">DataprocBatchRuntimeConfigAutotuningConfig</a>

---


### DataprocBatchRuntimeConfigOutputReference <a name="DataprocBatchRuntimeConfigOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchRuntimeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.putAutotuningConfig">put_autotuning_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetAutotuningConfig">reset_autotuning_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetCohort">reset_cohort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetContainerImage">reset_container_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_autotuning_config` <a name="put_autotuning_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.putAutotuningConfig"></a>

```python
def put_autotuning_config(
  scenarios: typing.List[str] = None
) -> None
```

###### `scenarios`<sup>Optional</sup> <a name="scenarios" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.putAutotuningConfig.parameter.scenarios"></a>

- *Type:* typing.List[str]

Optional. Scenarios for which tunings are applied. Possible values: ["SCALING", "BROADCAST_HASH_JOIN", "MEMORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_batch#scenarios DataprocBatch#scenarios}

---

##### `reset_autotuning_config` <a name="reset_autotuning_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetAutotuningConfig"></a>

```python
def reset_autotuning_config() -> None
```

##### `reset_cohort` <a name="reset_cohort" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetCohort"></a>

```python
def reset_cohort() -> None
```

##### `reset_container_image` <a name="reset_container_image" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetContainerImage"></a>

```python
def reset_container_image() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.autotuningConfig">autotuning_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference">DataprocBatchRuntimeConfigAutotuningConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.effectiveProperties">effective_properties</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.autotuningConfigInput">autotuning_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig">DataprocBatchRuntimeConfigAutotuningConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.cohortInput">cohort_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.containerImageInput">container_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.cohort">cohort</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.containerImage">container_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig">DataprocBatchRuntimeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autotuning_config`<sup>Required</sup> <a name="autotuning_config" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.autotuningConfig"></a>

```python
autotuning_config: DataprocBatchRuntimeConfigAutotuningConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfigOutputReference">DataprocBatchRuntimeConfigAutotuningConfigOutputReference</a>

---

##### `effective_properties`<sup>Required</sup> <a name="effective_properties" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.effectiveProperties"></a>

```python
effective_properties: StringMap
```

- *Type:* cdktf.StringMap

---

##### `autotuning_config_input`<sup>Optional</sup> <a name="autotuning_config_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.autotuningConfigInput"></a>

```python
autotuning_config_input: DataprocBatchRuntimeConfigAutotuningConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigAutotuningConfig">DataprocBatchRuntimeConfigAutotuningConfig</a>

---

##### `cohort_input`<sup>Optional</sup> <a name="cohort_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.cohortInput"></a>

```python
cohort_input: str
```

- *Type:* str

---

##### `container_image_input`<sup>Optional</sup> <a name="container_image_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.containerImageInput"></a>

```python
container_image_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `cohort`<sup>Required</sup> <a name="cohort" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.cohort"></a>

```python
cohort: str
```

- *Type:* str

---

##### `container_image`<sup>Required</sup> <a name="container_image" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.containerImage"></a>

```python
container_image: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocBatchRuntimeConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeConfig">DataprocBatchRuntimeConfig</a>

---


### DataprocBatchRuntimeInfoApproximateUsageList <a name="DataprocBatchRuntimeInfoApproximateUsageList" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataprocBatchRuntimeInfoApproximateUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataprocBatchRuntimeInfoApproximateUsageOutputReference <a name="DataprocBatchRuntimeInfoApproximateUsageOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.milliAcceleratorSeconds">milli_accelerator_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.milliDcuSeconds">milli_dcu_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.shuffleStorageGbSeconds">shuffle_storage_gb_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsage">DataprocBatchRuntimeInfoApproximateUsage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_type`<sup>Required</sup> <a name="accelerator_type" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

---

##### `milli_accelerator_seconds`<sup>Required</sup> <a name="milli_accelerator_seconds" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.milliAcceleratorSeconds"></a>

```python
milli_accelerator_seconds: str
```

- *Type:* str

---

##### `milli_dcu_seconds`<sup>Required</sup> <a name="milli_dcu_seconds" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.milliDcuSeconds"></a>

```python
milli_dcu_seconds: str
```

- *Type:* str

---

##### `shuffle_storage_gb_seconds`<sup>Required</sup> <a name="shuffle_storage_gb_seconds" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.shuffleStorageGbSeconds"></a>

```python
shuffle_storage_gb_seconds: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageOutputReference.property.internalValue"></a>

```python
internal_value: DataprocBatchRuntimeInfoApproximateUsage
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsage">DataprocBatchRuntimeInfoApproximateUsage</a>

---


### DataprocBatchRuntimeInfoCurrentUsageList <a name="DataprocBatchRuntimeInfoCurrentUsageList" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataprocBatchRuntimeInfoCurrentUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataprocBatchRuntimeInfoCurrentUsageOutputReference <a name="DataprocBatchRuntimeInfoCurrentUsageOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliAccelerator">milli_accelerator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliDcu">milli_dcu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliDcuPremium">milli_dcu_premium</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.shuffleStorageGb">shuffle_storage_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.shuffleStorageGbPremium">shuffle_storage_gb_premium</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.snapshotTime">snapshot_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsage">DataprocBatchRuntimeInfoCurrentUsage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_type`<sup>Required</sup> <a name="accelerator_type" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

---

##### `milli_accelerator`<sup>Required</sup> <a name="milli_accelerator" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliAccelerator"></a>

```python
milli_accelerator: str
```

- *Type:* str

---

##### `milli_dcu`<sup>Required</sup> <a name="milli_dcu" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliDcu"></a>

```python
milli_dcu: str
```

- *Type:* str

---

##### `milli_dcu_premium`<sup>Required</sup> <a name="milli_dcu_premium" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.milliDcuPremium"></a>

```python
milli_dcu_premium: str
```

- *Type:* str

---

##### `shuffle_storage_gb`<sup>Required</sup> <a name="shuffle_storage_gb" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.shuffleStorageGb"></a>

```python
shuffle_storage_gb: str
```

- *Type:* str

---

##### `shuffle_storage_gb_premium`<sup>Required</sup> <a name="shuffle_storage_gb_premium" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.shuffleStorageGbPremium"></a>

```python
shuffle_storage_gb_premium: str
```

- *Type:* str

---

##### `snapshot_time`<sup>Required</sup> <a name="snapshot_time" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.snapshotTime"></a>

```python
snapshot_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageOutputReference.property.internalValue"></a>

```python
internal_value: DataprocBatchRuntimeInfoCurrentUsage
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsage">DataprocBatchRuntimeInfoCurrentUsage</a>

---


### DataprocBatchRuntimeInfoList <a name="DataprocBatchRuntimeInfoList" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchRuntimeInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataprocBatchRuntimeInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataprocBatchRuntimeInfoOutputReference <a name="DataprocBatchRuntimeInfoOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchRuntimeInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.approximateUsage">approximate_usage</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList">DataprocBatchRuntimeInfoApproximateUsageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.currentUsage">current_usage</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList">DataprocBatchRuntimeInfoCurrentUsageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.diagnosticOutputUri">diagnostic_output_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.endpoints">endpoints</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.outputUri">output_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfo">DataprocBatchRuntimeInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approximate_usage`<sup>Required</sup> <a name="approximate_usage" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.approximateUsage"></a>

```python
approximate_usage: DataprocBatchRuntimeInfoApproximateUsageList
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoApproximateUsageList">DataprocBatchRuntimeInfoApproximateUsageList</a>

---

##### `current_usage`<sup>Required</sup> <a name="current_usage" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.currentUsage"></a>

```python
current_usage: DataprocBatchRuntimeInfoCurrentUsageList
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoCurrentUsageList">DataprocBatchRuntimeInfoCurrentUsageList</a>

---

##### `diagnostic_output_uri`<sup>Required</sup> <a name="diagnostic_output_uri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.diagnosticOutputUri"></a>

```python
diagnostic_output_uri: str
```

- *Type:* str

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.endpoints"></a>

```python
endpoints: StringMap
```

- *Type:* cdktf.StringMap

---

##### `output_uri`<sup>Required</sup> <a name="output_uri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.outputUri"></a>

```python
output_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataprocBatchRuntimeInfo
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchRuntimeInfo">DataprocBatchRuntimeInfo</a>

---


### DataprocBatchSparkBatchOutputReference <a name="DataprocBatchSparkBatchOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchSparkBatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetArchiveUris">reset_archive_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetFileUris">reset_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetJarFileUris">reset_jar_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetMainClass">reset_main_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetMainJarFileUri">reset_main_jar_file_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_archive_uris` <a name="reset_archive_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetArchiveUris"></a>

```python
def reset_archive_uris() -> None
```

##### `reset_args` <a name="reset_args" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_file_uris` <a name="reset_file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetFileUris"></a>

```python
def reset_file_uris() -> None
```

##### `reset_jar_file_uris` <a name="reset_jar_file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetJarFileUris"></a>

```python
def reset_jar_file_uris() -> None
```

##### `reset_main_class` <a name="reset_main_class" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetMainClass"></a>

```python
def reset_main_class() -> None
```

##### `reset_main_jar_file_uri` <a name="reset_main_jar_file_uri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.resetMainJarFileUri"></a>

```python
def reset_main_jar_file_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.archiveUrisInput">archive_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.fileUrisInput">file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.jarFileUrisInput">jar_file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.mainClassInput">main_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.mainJarFileUriInput">main_jar_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.mainClass">main_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.mainJarFileUri">main_jar_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch">DataprocBatchSparkBatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `archive_uris_input`<sup>Optional</sup> <a name="archive_uris_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.archiveUrisInput"></a>

```python
archive_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris_input`<sup>Optional</sup> <a name="file_uris_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.fileUrisInput"></a>

```python
file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar_file_uris_input`<sup>Optional</sup> <a name="jar_file_uris_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.jarFileUrisInput"></a>

```python
jar_file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_class_input`<sup>Optional</sup> <a name="main_class_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.mainClassInput"></a>

```python
main_class_input: str
```

- *Type:* str

---

##### `main_jar_file_uri_input`<sup>Optional</sup> <a name="main_jar_file_uri_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.mainJarFileUriInput"></a>

```python
main_jar_file_uri_input: str
```

- *Type:* str

---

##### `archive_uris`<sup>Required</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris`<sup>Required</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jar_file_uris`<sup>Required</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_class`<sup>Required</sup> <a name="main_class" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.mainClass"></a>

```python
main_class: str
```

- *Type:* str

---

##### `main_jar_file_uri`<sup>Required</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.mainJarFileUri"></a>

```python
main_jar_file_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatchOutputReference.property.internalValue"></a>

```python
internal_value: DataprocBatchSparkBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkBatch">DataprocBatchSparkBatch</a>

---


### DataprocBatchSparkRBatchOutputReference <a name="DataprocBatchSparkRBatchOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchSparkRBatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resetArchiveUris">reset_archive_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resetFileUris">reset_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resetMainRFileUri">reset_main_r_file_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_archive_uris` <a name="reset_archive_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resetArchiveUris"></a>

```python
def reset_archive_uris() -> None
```

##### `reset_args` <a name="reset_args" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_file_uris` <a name="reset_file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resetFileUris"></a>

```python
def reset_file_uris() -> None
```

##### `reset_main_r_file_uri` <a name="reset_main_r_file_uri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.resetMainRFileUri"></a>

```python
def reset_main_r_file_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.archiveUrisInput">archive_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.fileUrisInput">file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.mainRFileUriInput">main_r_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.mainRFileUri">main_r_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch">DataprocBatchSparkRBatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `archive_uris_input`<sup>Optional</sup> <a name="archive_uris_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.archiveUrisInput"></a>

```python
archive_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris_input`<sup>Optional</sup> <a name="file_uris_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.fileUrisInput"></a>

```python
file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_r_file_uri_input`<sup>Optional</sup> <a name="main_r_file_uri_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.mainRFileUriInput"></a>

```python
main_r_file_uri_input: str
```

- *Type:* str

---

##### `archive_uris`<sup>Required</sup> <a name="archive_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris`<sup>Required</sup> <a name="file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_r_file_uri`<sup>Required</sup> <a name="main_r_file_uri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.mainRFileUri"></a>

```python
main_r_file_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatchOutputReference.property.internalValue"></a>

```python
internal_value: DataprocBatchSparkRBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkRBatch">DataprocBatchSparkRBatch</a>

---


### DataprocBatchSparkSqlBatchOutputReference <a name="DataprocBatchSparkSqlBatchOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchSparkSqlBatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resetJarFileUris">reset_jar_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resetQueryFileUri">reset_query_file_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resetQueryVariables">reset_query_variables</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_jar_file_uris` <a name="reset_jar_file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resetJarFileUris"></a>

```python
def reset_jar_file_uris() -> None
```

##### `reset_query_file_uri` <a name="reset_query_file_uri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resetQueryFileUri"></a>

```python
def reset_query_file_uri() -> None
```

##### `reset_query_variables` <a name="reset_query_variables" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.resetQueryVariables"></a>

```python
def reset_query_variables() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.jarFileUrisInput">jar_file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.queryFileUriInput">query_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.queryVariablesInput">query_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.jarFileUris">jar_file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.queryFileUri">query_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.queryVariables">query_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch">DataprocBatchSparkSqlBatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `jar_file_uris_input`<sup>Optional</sup> <a name="jar_file_uris_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.jarFileUrisInput"></a>

```python
jar_file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_file_uri_input`<sup>Optional</sup> <a name="query_file_uri_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.queryFileUriInput"></a>

```python
query_file_uri_input: str
```

- *Type:* str

---

##### `query_variables_input`<sup>Optional</sup> <a name="query_variables_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.queryVariablesInput"></a>

```python
query_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `jar_file_uris`<sup>Required</sup> <a name="jar_file_uris" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.jarFileUris"></a>

```python
jar_file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_file_uri`<sup>Required</sup> <a name="query_file_uri" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.queryFileUri"></a>

```python
query_file_uri: str
```

- *Type:* str

---

##### `query_variables`<sup>Required</sup> <a name="query_variables" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.queryVariables"></a>

```python
query_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatchOutputReference.property.internalValue"></a>

```python
internal_value: DataprocBatchSparkSqlBatch
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchSparkSqlBatch">DataprocBatchSparkSqlBatch</a>

---


### DataprocBatchStateHistoryList <a name="DataprocBatchStateHistoryList" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchStateHistoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataprocBatchStateHistoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataprocBatchStateHistoryOutputReference <a name="DataprocBatchStateHistoryOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchStateHistoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.stateMessage">state_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.stateStartTime">state_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistory">DataprocBatchStateHistory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_message`<sup>Required</sup> <a name="state_message" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.stateMessage"></a>

```python
state_message: str
```

- *Type:* str

---

##### `state_start_time`<sup>Required</sup> <a name="state_start_time" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.stateStartTime"></a>

```python
state_start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistoryOutputReference.property.internalValue"></a>

```python
internal_value: DataprocBatchStateHistory
```

- *Type:* <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchStateHistory">DataprocBatchStateHistory</a>

---


### DataprocBatchTimeoutsOutputReference <a name="DataprocBatchTimeoutsOutputReference" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_batch

dataprocBatch.DataprocBatchTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts">DataprocBatchTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocBatch.DataprocBatchTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataprocBatchTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataprocBatch.DataprocBatchTimeouts">DataprocBatchTimeouts</a>]

---



