# `loggingProjectSink` Submodule <a name="`loggingProjectSink` Submodule" id="@cdktf/provider-google.loggingProjectSink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingProjectSink <a name="LoggingProjectSink" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink google_logging_project_sink}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_project_sink

loggingProjectSink.LoggingProjectSink(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: str,
  name: str,
  bigquery_options: LoggingProjectSinkBigqueryOptions = None,
  custom_writer_identity: str = None,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  exclusions: typing.Union[IResolvable, typing.List[LoggingProjectSinkExclusions]] = None,
  filter: str = None,
  id: str = None,
  project: str = None,
  unique_writer_identity: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.destination">destination</a></code> | <code>str</code> | The destination of the sink (or, in other words, where logs are written to). |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the logging sink. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.bigqueryOptions">bigquery_options</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptions">LoggingProjectSinkBigqueryOptions</a></code> | bigquery_options block. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.customWriterIdentity">custom_writer_identity</a></code> | <code>str</code> | A service account provided by the caller that will be used to write the log entries. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of this sink. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to True, then this sink is disabled and it does not export any log entries. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.exclusions">exclusions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions">LoggingProjectSinkExclusions</a>]]</code> | exclusions block. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.filter">filter</a></code> | <code>str</code> | The filter to apply when exporting logs. Only log entries that match the filter are exported. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#id LoggingProjectSink#id}. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project to create the sink in. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.uniqueWriterIdentity">unique_writer_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to create a unique identity associated with this sink. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.destination"></a>

- *Type:* str

The destination of the sink (or, in other words, where logs are written to).

Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#destination LoggingProjectSink#destination}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.name"></a>

- *Type:* str

The name of the logging sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#name LoggingProjectSink#name}

---

##### `bigquery_options`<sup>Optional</sup> <a name="bigquery_options" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.bigqueryOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptions">LoggingProjectSinkBigqueryOptions</a>

bigquery_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#bigquery_options LoggingProjectSink#bigquery_options}

---

##### `custom_writer_identity`<sup>Optional</sup> <a name="custom_writer_identity" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.customWriterIdentity"></a>

- *Type:* str

A service account provided by the caller that will be used to write the log entries.

The format must be serviceAccount:some@email. This field can only be specified if you are routing logs to a destination outside this sink's project. If not specified, a Logging service account will automatically be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#custom_writer_identity LoggingProjectSink#custom_writer_identity}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.description"></a>

- *Type:* str

A description of this sink. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#description LoggingProjectSink#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to True, then this sink is disabled and it does not export any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#disabled LoggingProjectSink#disabled}

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.exclusions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions">LoggingProjectSinkExclusions</a>]]

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#exclusions LoggingProjectSink#exclusions}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.filter"></a>

- *Type:* str

The filter to apply when exporting logs. Only log entries that match the filter are exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#filter LoggingProjectSink#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#id LoggingProjectSink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project to create the sink in.

If omitted, the project associated with the provider is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#project LoggingProjectSink#project}

---

##### `unique_writer_identity`<sup>Optional</sup> <a name="unique_writer_identity" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.Initializer.parameter.uniqueWriterIdentity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to create a unique identity associated with this sink.

If false (the legacy behavior), then the writer_identity used is serviceAccount:cloud-logs@system.gserviceaccount.com. If true (default), then a unique service account is created and used for this sink. If you wish to publish logs across projects, you must set unique_writer_identity to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#unique_writer_identity LoggingProjectSink#unique_writer_identity}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.putBigqueryOptions">put_bigquery_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.putExclusions">put_exclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetBigqueryOptions">reset_bigquery_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetCustomWriterIdentity">reset_custom_writer_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetExclusions">reset_exclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetUniqueWriterIdentity">reset_unique_writer_identity</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_bigquery_options` <a name="put_bigquery_options" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.putBigqueryOptions"></a>

```python
def put_bigquery_options(
  use_partitioned_tables: typing.Union[bool, IResolvable]
) -> None
```

###### `use_partitioned_tables`<sup>Required</sup> <a name="use_partitioned_tables" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.putBigqueryOptions.parameter.usePartitionedTables"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to use BigQuery's partition tables.

By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#use_partitioned_tables LoggingProjectSink#use_partitioned_tables}

---

##### `put_exclusions` <a name="put_exclusions" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.putExclusions"></a>

```python
def put_exclusions(
  value: typing.Union[IResolvable, typing.List[LoggingProjectSinkExclusions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.putExclusions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions">LoggingProjectSinkExclusions</a>]]

---

##### `reset_bigquery_options` <a name="reset_bigquery_options" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetBigqueryOptions"></a>

```python
def reset_bigquery_options() -> None
```

##### `reset_custom_writer_identity` <a name="reset_custom_writer_identity" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetCustomWriterIdentity"></a>

```python
def reset_custom_writer_identity() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_exclusions` <a name="reset_exclusions" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetExclusions"></a>

```python
def reset_exclusions() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_unique_writer_identity` <a name="reset_unique_writer_identity" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.resetUniqueWriterIdentity"></a>

```python
def reset_unique_writer_identity() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LoggingProjectSink resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import logging_project_sink

loggingProjectSink.LoggingProjectSink.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import logging_project_sink

loggingProjectSink.LoggingProjectSink.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import logging_project_sink

loggingProjectSink.LoggingProjectSink.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import logging_project_sink

loggingProjectSink.LoggingProjectSink.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LoggingProjectSink resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LoggingProjectSink to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LoggingProjectSink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoggingProjectSink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.bigqueryOptions">bigquery_options</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference">LoggingProjectSinkBigqueryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.exclusions">exclusions</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList">LoggingProjectSinkExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.writerIdentity">writer_identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.bigqueryOptionsInput">bigquery_options_input</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptions">LoggingProjectSinkBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.customWriterIdentityInput">custom_writer_identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.exclusionsInput">exclusions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions">LoggingProjectSinkExclusions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.uniqueWriterIdentityInput">unique_writer_identity_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.customWriterIdentity">custom_writer_identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.uniqueWriterIdentity">unique_writer_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bigquery_options`<sup>Required</sup> <a name="bigquery_options" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.bigqueryOptions"></a>

```python
bigquery_options: LoggingProjectSinkBigqueryOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference">LoggingProjectSinkBigqueryOptionsOutputReference</a>

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.exclusions"></a>

```python
exclusions: LoggingProjectSinkExclusionsList
```

- *Type:* <a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList">LoggingProjectSinkExclusionsList</a>

---

##### `writer_identity`<sup>Required</sup> <a name="writer_identity" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.writerIdentity"></a>

```python
writer_identity: str
```

- *Type:* str

---

##### `bigquery_options_input`<sup>Optional</sup> <a name="bigquery_options_input" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.bigqueryOptionsInput"></a>

```python
bigquery_options_input: LoggingProjectSinkBigqueryOptions
```

- *Type:* <a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptions">LoggingProjectSinkBigqueryOptions</a>

---

##### `custom_writer_identity_input`<sup>Optional</sup> <a name="custom_writer_identity_input" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.customWriterIdentityInput"></a>

```python
custom_writer_identity_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exclusions_input`<sup>Optional</sup> <a name="exclusions_input" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.exclusionsInput"></a>

```python
exclusions_input: typing.Union[IResolvable, typing.List[LoggingProjectSinkExclusions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions">LoggingProjectSinkExclusions</a>]]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `unique_writer_identity_input`<sup>Optional</sup> <a name="unique_writer_identity_input" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.uniqueWriterIdentityInput"></a>

```python
unique_writer_identity_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_writer_identity`<sup>Required</sup> <a name="custom_writer_identity" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.customWriterIdentity"></a>

```python
custom_writer_identity: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `unique_writer_identity`<sup>Required</sup> <a name="unique_writer_identity" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.uniqueWriterIdentity"></a>

```python
unique_writer_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSink.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingProjectSinkBigqueryOptions <a name="LoggingProjectSinkBigqueryOptions" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_project_sink

loggingProjectSink.LoggingProjectSinkBigqueryOptions(
  use_partitioned_tables: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptions.property.usePartitionedTables">use_partitioned_tables</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to use BigQuery's partition tables. |

---

##### `use_partitioned_tables`<sup>Required</sup> <a name="use_partitioned_tables" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptions.property.usePartitionedTables"></a>

```python
use_partitioned_tables: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to use BigQuery's partition tables.

By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#use_partitioned_tables LoggingProjectSink#use_partitioned_tables}

---

### LoggingProjectSinkConfig <a name="LoggingProjectSinkConfig" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_project_sink

loggingProjectSink.LoggingProjectSinkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: str,
  name: str,
  bigquery_options: LoggingProjectSinkBigqueryOptions = None,
  custom_writer_identity: str = None,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  exclusions: typing.Union[IResolvable, typing.List[LoggingProjectSinkExclusions]] = None,
  filter: str = None,
  id: str = None,
  project: str = None,
  unique_writer_identity: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.destination">destination</a></code> | <code>str</code> | The destination of the sink (or, in other words, where logs are written to). |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.name">name</a></code> | <code>str</code> | The name of the logging sink. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.bigqueryOptions">bigquery_options</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptions">LoggingProjectSinkBigqueryOptions</a></code> | bigquery_options block. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.customWriterIdentity">custom_writer_identity</a></code> | <code>str</code> | A service account provided by the caller that will be used to write the log entries. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.description">description</a></code> | <code>str</code> | A description of this sink. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to True, then this sink is disabled and it does not export any log entries. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.exclusions">exclusions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions">LoggingProjectSinkExclusions</a>]]</code> | exclusions block. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.filter">filter</a></code> | <code>str</code> | The filter to apply when exporting logs. Only log entries that match the filter are exported. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#id LoggingProjectSink#id}. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.project">project</a></code> | <code>str</code> | The ID of the project to create the sink in. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.uniqueWriterIdentity">unique_writer_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to create a unique identity associated with this sink. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.destination"></a>

```python
destination: str
```

- *Type:* str

The destination of the sink (or, in other words, where logs are written to).

Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#destination LoggingProjectSink#destination}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the logging sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#name LoggingProjectSink#name}

---

##### `bigquery_options`<sup>Optional</sup> <a name="bigquery_options" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.bigqueryOptions"></a>

```python
bigquery_options: LoggingProjectSinkBigqueryOptions
```

- *Type:* <a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptions">LoggingProjectSinkBigqueryOptions</a>

bigquery_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#bigquery_options LoggingProjectSink#bigquery_options}

---

##### `custom_writer_identity`<sup>Optional</sup> <a name="custom_writer_identity" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.customWriterIdentity"></a>

```python
custom_writer_identity: str
```

- *Type:* str

A service account provided by the caller that will be used to write the log entries.

The format must be serviceAccount:some@email. This field can only be specified if you are routing logs to a destination outside this sink's project. If not specified, a Logging service account will automatically be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#custom_writer_identity LoggingProjectSink#custom_writer_identity}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of this sink. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#description LoggingProjectSink#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to True, then this sink is disabled and it does not export any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#disabled LoggingProjectSink#disabled}

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.exclusions"></a>

```python
exclusions: typing.Union[IResolvable, typing.List[LoggingProjectSinkExclusions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions">LoggingProjectSinkExclusions</a>]]

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#exclusions LoggingProjectSink#exclusions}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

The filter to apply when exporting logs. Only log entries that match the filter are exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#filter LoggingProjectSink#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#id LoggingProjectSink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project to create the sink in.

If omitted, the project associated with the provider is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#project LoggingProjectSink#project}

---

##### `unique_writer_identity`<sup>Optional</sup> <a name="unique_writer_identity" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkConfig.property.uniqueWriterIdentity"></a>

```python
unique_writer_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to create a unique identity associated with this sink.

If false (the legacy behavior), then the writer_identity used is serviceAccount:cloud-logs@system.gserviceaccount.com. If true (default), then a unique service account is created and used for this sink. If you wish to publish logs across projects, you must set unique_writer_identity to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#unique_writer_identity LoggingProjectSink#unique_writer_identity}

---

### LoggingProjectSinkExclusions <a name="LoggingProjectSinkExclusions" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_project_sink

loggingProjectSink.LoggingProjectSinkExclusions(
  filter: str,
  name: str,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions.property.filter">filter</a></code> | <code>str</code> | An advanced logs filter that matches the log entries to be excluded. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions.property.name">name</a></code> | <code>str</code> | A client-assigned identifier, such as "load-balancer-exclusion". |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions.property.description">description</a></code> | <code>str</code> | A description of this exclusion. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to True, then this exclusion is disabled and it does not exclude any log entries. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions.property.filter"></a>

```python
filter: str
```

- *Type:* str

An advanced logs filter that matches the log entries to be excluded.

By using the sample function, you can exclude less than 100% of the matching log entries

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#filter LoggingProjectSink#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions.property.name"></a>

```python
name: str
```

- *Type:* str

A client-assigned identifier, such as "load-balancer-exclusion".

Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#name LoggingProjectSink#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions.property.description"></a>

```python
description: str
```

- *Type:* str

A description of this exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#description LoggingProjectSink#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to True, then this exclusion is disabled and it does not exclude any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/logging_project_sink#disabled LoggingProjectSink#disabled}

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingProjectSinkBigqueryOptionsOutputReference <a name="LoggingProjectSinkBigqueryOptionsOutputReference" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_project_sink

loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput">use_partitioned_tables_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.property.usePartitionedTables">use_partitioned_tables</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptions">LoggingProjectSinkBigqueryOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `use_partitioned_tables_input`<sup>Optional</sup> <a name="use_partitioned_tables_input" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput"></a>

```python
use_partitioned_tables_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_partitioned_tables`<sup>Required</sup> <a name="use_partitioned_tables" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.property.usePartitionedTables"></a>

```python
use_partitioned_tables: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptionsOutputReference.property.internalValue"></a>

```python
internal_value: LoggingProjectSinkBigqueryOptions
```

- *Type:* <a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkBigqueryOptions">LoggingProjectSinkBigqueryOptions</a>

---


### LoggingProjectSinkExclusionsList <a name="LoggingProjectSinkExclusionsList" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_project_sink

loggingProjectSink.LoggingProjectSinkExclusionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LoggingProjectSinkExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions">LoggingProjectSinkExclusions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LoggingProjectSinkExclusions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions">LoggingProjectSinkExclusions</a>]]

---


### LoggingProjectSinkExclusionsOutputReference <a name="LoggingProjectSinkExclusionsOutputReference" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_project_sink

loggingProjectSink.LoggingProjectSinkExclusionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions">LoggingProjectSinkExclusions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LoggingProjectSinkExclusions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.loggingProjectSink.LoggingProjectSinkExclusions">LoggingProjectSinkExclusions</a>]

---



