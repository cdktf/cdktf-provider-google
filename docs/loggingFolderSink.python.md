# `google_logging_folder_sink`

Refer to the Terraform Registory for docs: [`google_logging_folder_sink`](https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink).

# `loggingFolderSink` Submodule <a name="`loggingFolderSink` Submodule" id="@cdktf/provider-google.loggingFolderSink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingFolderSink <a name="LoggingFolderSink" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink google_logging_folder_sink}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_folder_sink

loggingFolderSink.LoggingFolderSink(
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
  folder: str,
  name: str,
  bigquery_options: LoggingFolderSinkBigqueryOptions = None,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  exclusions: typing.Union[IResolvable, typing.List[LoggingFolderSinkExclusions]] = None,
  filter: str = None,
  id: str = None,
  include_children: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.destination">destination</a></code> | <code>str</code> | The destination of the sink (or, in other words, where logs are written to). |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.folder">folder</a></code> | <code>str</code> | The folder to be exported to the sink. Note that either [FOLDER_ID] or "folders/[FOLDER_ID]" is accepted. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the logging sink. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.bigqueryOptions">bigquery_options</a></code> | <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptions">LoggingFolderSinkBigqueryOptions</a></code> | bigquery_options block. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of this sink. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to True, then this sink is disabled and it does not export any log entries. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.exclusions">exclusions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions">LoggingFolderSinkExclusions</a>]]</code> | exclusions block. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.filter">filter</a></code> | <code>str</code> | The filter to apply when exporting logs. Only log entries that match the filter are exported. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#id LoggingFolderSink#id}. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.includeChildren">include_children</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to include children folders in the sink export. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.destination"></a>

- *Type:* str

The destination of the sink (or, in other words, where logs are written to).

Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#destination LoggingFolderSink#destination}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.folder"></a>

- *Type:* str

The folder to be exported to the sink. Note that either [FOLDER_ID] or "folders/[FOLDER_ID]" is accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#folder LoggingFolderSink#folder}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.name"></a>

- *Type:* str

The name of the logging sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#name LoggingFolderSink#name}

---

##### `bigquery_options`<sup>Optional</sup> <a name="bigquery_options" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.bigqueryOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptions">LoggingFolderSinkBigqueryOptions</a>

bigquery_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#bigquery_options LoggingFolderSink#bigquery_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.description"></a>

- *Type:* str

A description of this sink. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#description LoggingFolderSink#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to True, then this sink is disabled and it does not export any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#disabled LoggingFolderSink#disabled}

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.exclusions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions">LoggingFolderSinkExclusions</a>]]

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#exclusions LoggingFolderSink#exclusions}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.filter"></a>

- *Type:* str

The filter to apply when exporting logs. Only log entries that match the filter are exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#filter LoggingFolderSink#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#id LoggingFolderSink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_children`<sup>Optional</sup> <a name="include_children" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.Initializer.parameter.includeChildren"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to include children folders in the sink export.

If true, logs associated with child projects are also exported; otherwise only logs relating to the provided folder are included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#include_children LoggingFolderSink#include_children}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.putBigqueryOptions">put_bigquery_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.putExclusions">put_exclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetBigqueryOptions">reset_bigquery_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetExclusions">reset_exclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetIncludeChildren">reset_include_children</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_bigquery_options` <a name="put_bigquery_options" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.putBigqueryOptions"></a>

```python
def put_bigquery_options(
  use_partitioned_tables: typing.Union[bool, IResolvable]
) -> None
```

###### `use_partitioned_tables`<sup>Required</sup> <a name="use_partitioned_tables" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.putBigqueryOptions.parameter.usePartitionedTables"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to use BigQuery's partition tables.

By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#use_partitioned_tables LoggingFolderSink#use_partitioned_tables}

---

##### `put_exclusions` <a name="put_exclusions" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.putExclusions"></a>

```python
def put_exclusions(
  value: typing.Union[IResolvable, typing.List[LoggingFolderSinkExclusions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.putExclusions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions">LoggingFolderSinkExclusions</a>]]

---

##### `reset_bigquery_options` <a name="reset_bigquery_options" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetBigqueryOptions"></a>

```python
def reset_bigquery_options() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_exclusions` <a name="reset_exclusions" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetExclusions"></a>

```python
def reset_exclusions() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_children` <a name="reset_include_children" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.resetIncludeChildren"></a>

```python
def reset_include_children() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import logging_folder_sink

loggingFolderSink.LoggingFolderSink.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import logging_folder_sink

loggingFolderSink.LoggingFolderSink.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import logging_folder_sink

loggingFolderSink.LoggingFolderSink.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.bigqueryOptions">bigquery_options</a></code> | <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference">LoggingFolderSinkBigqueryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.exclusions">exclusions</a></code> | <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList">LoggingFolderSinkExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.writerIdentity">writer_identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.bigqueryOptionsInput">bigquery_options_input</a></code> | <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptions">LoggingFolderSinkBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.exclusionsInput">exclusions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions">LoggingFolderSinkExclusions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.includeChildrenInput">include_children_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.includeChildren">include_children</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bigquery_options`<sup>Required</sup> <a name="bigquery_options" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.bigqueryOptions"></a>

```python
bigquery_options: LoggingFolderSinkBigqueryOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference">LoggingFolderSinkBigqueryOptionsOutputReference</a>

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.exclusions"></a>

```python
exclusions: LoggingFolderSinkExclusionsList
```

- *Type:* <a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList">LoggingFolderSinkExclusionsList</a>

---

##### `writer_identity`<sup>Required</sup> <a name="writer_identity" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.writerIdentity"></a>

```python
writer_identity: str
```

- *Type:* str

---

##### `bigquery_options_input`<sup>Optional</sup> <a name="bigquery_options_input" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.bigqueryOptionsInput"></a>

```python
bigquery_options_input: LoggingFolderSinkBigqueryOptions
```

- *Type:* <a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptions">LoggingFolderSinkBigqueryOptions</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exclusions_input`<sup>Optional</sup> <a name="exclusions_input" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.exclusionsInput"></a>

```python
exclusions_input: typing.Union[IResolvable, typing.List[LoggingFolderSinkExclusions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions">LoggingFolderSinkExclusions</a>]]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_children_input`<sup>Optional</sup> <a name="include_children_input" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.includeChildrenInput"></a>

```python
include_children_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_children`<sup>Required</sup> <a name="include_children" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.includeChildren"></a>

```python
include_children: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSink.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingFolderSinkBigqueryOptions <a name="LoggingFolderSinkBigqueryOptions" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_folder_sink

loggingFolderSink.LoggingFolderSinkBigqueryOptions(
  use_partitioned_tables: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptions.property.usePartitionedTables">use_partitioned_tables</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to use BigQuery's partition tables. |

---

##### `use_partitioned_tables`<sup>Required</sup> <a name="use_partitioned_tables" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptions.property.usePartitionedTables"></a>

```python
use_partitioned_tables: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to use BigQuery's partition tables.

By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#use_partitioned_tables LoggingFolderSink#use_partitioned_tables}

---

### LoggingFolderSinkConfig <a name="LoggingFolderSinkConfig" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_folder_sink

loggingFolderSink.LoggingFolderSinkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: str,
  folder: str,
  name: str,
  bigquery_options: LoggingFolderSinkBigqueryOptions = None,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  exclusions: typing.Union[IResolvable, typing.List[LoggingFolderSinkExclusions]] = None,
  filter: str = None,
  id: str = None,
  include_children: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.destination">destination</a></code> | <code>str</code> | The destination of the sink (or, in other words, where logs are written to). |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.folder">folder</a></code> | <code>str</code> | The folder to be exported to the sink. Note that either [FOLDER_ID] or "folders/[FOLDER_ID]" is accepted. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.name">name</a></code> | <code>str</code> | The name of the logging sink. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.bigqueryOptions">bigquery_options</a></code> | <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptions">LoggingFolderSinkBigqueryOptions</a></code> | bigquery_options block. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.description">description</a></code> | <code>str</code> | A description of this sink. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to True, then this sink is disabled and it does not export any log entries. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.exclusions">exclusions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions">LoggingFolderSinkExclusions</a>]]</code> | exclusions block. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.filter">filter</a></code> | <code>str</code> | The filter to apply when exporting logs. Only log entries that match the filter are exported. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#id LoggingFolderSink#id}. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.includeChildren">include_children</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to include children folders in the sink export. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.destination"></a>

```python
destination: str
```

- *Type:* str

The destination of the sink (or, in other words, where logs are written to).

Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#destination LoggingFolderSink#destination}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

The folder to be exported to the sink. Note that either [FOLDER_ID] or "folders/[FOLDER_ID]" is accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#folder LoggingFolderSink#folder}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the logging sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#name LoggingFolderSink#name}

---

##### `bigquery_options`<sup>Optional</sup> <a name="bigquery_options" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.bigqueryOptions"></a>

```python
bigquery_options: LoggingFolderSinkBigqueryOptions
```

- *Type:* <a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptions">LoggingFolderSinkBigqueryOptions</a>

bigquery_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#bigquery_options LoggingFolderSink#bigquery_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of this sink. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#description LoggingFolderSink#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to True, then this sink is disabled and it does not export any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#disabled LoggingFolderSink#disabled}

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.exclusions"></a>

```python
exclusions: typing.Union[IResolvable, typing.List[LoggingFolderSinkExclusions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions">LoggingFolderSinkExclusions</a>]]

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#exclusions LoggingFolderSink#exclusions}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

The filter to apply when exporting logs. Only log entries that match the filter are exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#filter LoggingFolderSink#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#id LoggingFolderSink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_children`<sup>Optional</sup> <a name="include_children" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkConfig.property.includeChildren"></a>

```python
include_children: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to include children folders in the sink export.

If true, logs associated with child projects are also exported; otherwise only logs relating to the provided folder are included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#include_children LoggingFolderSink#include_children}

---

### LoggingFolderSinkExclusions <a name="LoggingFolderSinkExclusions" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_folder_sink

loggingFolderSink.LoggingFolderSinkExclusions(
  filter: str,
  name: str,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions.property.filter">filter</a></code> | <code>str</code> | An advanced logs filter that matches the log entries to be excluded. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions.property.name">name</a></code> | <code>str</code> | A client-assigned identifier, such as "load-balancer-exclusion". |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions.property.description">description</a></code> | <code>str</code> | A description of this exclusion. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to True, then this exclusion is disabled and it does not exclude any log entries. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions.property.filter"></a>

```python
filter: str
```

- *Type:* str

An advanced logs filter that matches the log entries to be excluded.

By using the sample function, you can exclude less than 100% of the matching log entries

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#filter LoggingFolderSink#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions.property.name"></a>

```python
name: str
```

- *Type:* str

A client-assigned identifier, such as "load-balancer-exclusion".

Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#name LoggingFolderSink#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions.property.description"></a>

```python
description: str
```

- *Type:* str

A description of this exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#description LoggingFolderSink#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to True, then this exclusion is disabled and it does not exclude any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/logging_folder_sink#disabled LoggingFolderSink#disabled}

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingFolderSinkBigqueryOptionsOutputReference <a name="LoggingFolderSinkBigqueryOptionsOutputReference" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_folder_sink

loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput">use_partitioned_tables_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.property.usePartitionedTables">use_partitioned_tables</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptions">LoggingFolderSinkBigqueryOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `use_partitioned_tables_input`<sup>Optional</sup> <a name="use_partitioned_tables_input" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput"></a>

```python
use_partitioned_tables_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_partitioned_tables`<sup>Required</sup> <a name="use_partitioned_tables" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.property.usePartitionedTables"></a>

```python
use_partitioned_tables: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptionsOutputReference.property.internalValue"></a>

```python
internal_value: LoggingFolderSinkBigqueryOptions
```

- *Type:* <a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkBigqueryOptions">LoggingFolderSinkBigqueryOptions</a>

---


### LoggingFolderSinkExclusionsList <a name="LoggingFolderSinkExclusionsList" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_folder_sink

loggingFolderSink.LoggingFolderSinkExclusionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LoggingFolderSinkExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions">LoggingFolderSinkExclusions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LoggingFolderSinkExclusions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions">LoggingFolderSinkExclusions</a>]]

---


### LoggingFolderSinkExclusionsOutputReference <a name="LoggingFolderSinkExclusionsOutputReference" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_folder_sink

loggingFolderSink.LoggingFolderSinkExclusionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions">LoggingFolderSinkExclusions</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LoggingFolderSinkExclusions, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.loggingFolderSink.LoggingFolderSinkExclusions">LoggingFolderSinkExclusions</a>, cdktf.IResolvable]

---



