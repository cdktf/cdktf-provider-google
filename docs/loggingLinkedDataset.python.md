# `google_logging_linked_dataset`

Refer to the Terraform Registory for docs: [`google_logging_linked_dataset`](https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/logging_linked_dataset).

# `loggingLinkedDataset` Submodule <a name="`loggingLinkedDataset` Submodule" id="@cdktf/provider-google.loggingLinkedDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingLinkedDataset <a name="LoggingLinkedDataset" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/logging_linked_dataset google_logging_linked_dataset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_linked_dataset

loggingLinkedDataset.LoggingLinkedDataset(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  link_id: str,
  bigquery_dataset: typing.Union[IResolvable, typing.List[LoggingLinkedDatasetBigqueryDataset]] = None,
  description: str = None,
  id: str = None,
  location: str = None,
  parent: str = None,
  timeouts: LoggingLinkedDatasetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | The bucket to which the linked dataset is attached. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.linkId">link_id</a></code> | <code>str</code> | The id of the linked dataset. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.bigqueryDataset">bigquery_dataset</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDataset">LoggingLinkedDatasetBigqueryDataset</a>]]</code> | bigquery_dataset block. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.description">description</a></code> | <code>str</code> | Describes this link. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/logging_linked_dataset#id LoggingLinkedDataset#id}. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the linked dataset. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The parent of the linked dataset. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts">LoggingLinkedDatasetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.bucket"></a>

- *Type:* str

The bucket to which the linked dataset is attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/logging_linked_dataset#bucket LoggingLinkedDataset#bucket}

---

##### `link_id`<sup>Required</sup> <a name="link_id" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.linkId"></a>

- *Type:* str

The id of the linked dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/logging_linked_dataset#link_id LoggingLinkedDataset#link_id}

---

##### `bigquery_dataset`<sup>Optional</sup> <a name="bigquery_dataset" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.bigqueryDataset"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDataset">LoggingLinkedDatasetBigqueryDataset</a>]]

bigquery_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/logging_linked_dataset#bigquery_dataset LoggingLinkedDataset#bigquery_dataset}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.description"></a>

- *Type:* str

Describes this link. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/logging_linked_dataset#description LoggingLinkedDataset#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/logging_linked_dataset#id LoggingLinkedDataset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.location"></a>

- *Type:* str

The location of the linked dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/logging_linked_dataset#location LoggingLinkedDataset#location}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.parent"></a>

- *Type:* str

The parent of the linked dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/logging_linked_dataset#parent LoggingLinkedDataset#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts">LoggingLinkedDatasetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/logging_linked_dataset#timeouts LoggingLinkedDataset#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.putBigqueryDataset">put_bigquery_dataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetBigqueryDataset">reset_bigquery_dataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetParent">reset_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_bigquery_dataset` <a name="put_bigquery_dataset" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.putBigqueryDataset"></a>

```python
def put_bigquery_dataset(
  value: typing.Union[IResolvable, typing.List[LoggingLinkedDatasetBigqueryDataset]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.putBigqueryDataset.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDataset">LoggingLinkedDatasetBigqueryDataset</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/logging_linked_dataset#create LoggingLinkedDataset#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/logging_linked_dataset#delete LoggingLinkedDataset#delete}.

---

##### `reset_bigquery_dataset` <a name="reset_bigquery_dataset" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetBigqueryDataset"></a>

```python
def reset_bigquery_dataset() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetParent"></a>

```python
def reset_parent() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import logging_linked_dataset

loggingLinkedDataset.LoggingLinkedDataset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import logging_linked_dataset

loggingLinkedDataset.LoggingLinkedDataset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import logging_linked_dataset

loggingLinkedDataset.LoggingLinkedDataset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.bigqueryDataset">bigquery_dataset</a></code> | <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList">LoggingLinkedDatasetBigqueryDatasetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference">LoggingLinkedDatasetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.bigqueryDatasetInput">bigquery_dataset_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDataset">LoggingLinkedDatasetBigqueryDataset</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.linkIdInput">link_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts">LoggingLinkedDatasetTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.linkId">link_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bigquery_dataset`<sup>Required</sup> <a name="bigquery_dataset" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.bigqueryDataset"></a>

```python
bigquery_dataset: LoggingLinkedDatasetBigqueryDatasetList
```

- *Type:* <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList">LoggingLinkedDatasetBigqueryDatasetList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.timeouts"></a>

```python
timeouts: LoggingLinkedDatasetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference">LoggingLinkedDatasetTimeoutsOutputReference</a>

---

##### `bigquery_dataset_input`<sup>Optional</sup> <a name="bigquery_dataset_input" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.bigqueryDatasetInput"></a>

```python
bigquery_dataset_input: typing.Union[IResolvable, typing.List[LoggingLinkedDatasetBigqueryDataset]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDataset">LoggingLinkedDatasetBigqueryDataset</a>]]

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `link_id_input`<sup>Optional</sup> <a name="link_id_input" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.linkIdInput"></a>

```python
link_id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LoggingLinkedDatasetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts">LoggingLinkedDatasetTimeouts</a>]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `link_id`<sup>Required</sup> <a name="link_id" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.linkId"></a>

```python
link_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDataset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingLinkedDatasetBigqueryDataset <a name="LoggingLinkedDatasetBigqueryDataset" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDataset.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_linked_dataset

loggingLinkedDataset.LoggingLinkedDatasetBigqueryDataset()
```


### LoggingLinkedDatasetConfig <a name="LoggingLinkedDatasetConfig" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_linked_dataset

loggingLinkedDataset.LoggingLinkedDatasetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  link_id: str,
  bigquery_dataset: typing.Union[IResolvable, typing.List[LoggingLinkedDatasetBigqueryDataset]] = None,
  description: str = None,
  id: str = None,
  location: str = None,
  parent: str = None,
  timeouts: LoggingLinkedDatasetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.bucket">bucket</a></code> | <code>str</code> | The bucket to which the linked dataset is attached. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.linkId">link_id</a></code> | <code>str</code> | The id of the linked dataset. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.bigqueryDataset">bigquery_dataset</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDataset">LoggingLinkedDatasetBigqueryDataset</a>]]</code> | bigquery_dataset block. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.description">description</a></code> | <code>str</code> | Describes this link. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/logging_linked_dataset#id LoggingLinkedDataset#id}. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.location">location</a></code> | <code>str</code> | The location of the linked dataset. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.parent">parent</a></code> | <code>str</code> | The parent of the linked dataset. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts">LoggingLinkedDatasetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The bucket to which the linked dataset is attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/logging_linked_dataset#bucket LoggingLinkedDataset#bucket}

---

##### `link_id`<sup>Required</sup> <a name="link_id" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.linkId"></a>

```python
link_id: str
```

- *Type:* str

The id of the linked dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/logging_linked_dataset#link_id LoggingLinkedDataset#link_id}

---

##### `bigquery_dataset`<sup>Optional</sup> <a name="bigquery_dataset" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.bigqueryDataset"></a>

```python
bigquery_dataset: typing.Union[IResolvable, typing.List[LoggingLinkedDatasetBigqueryDataset]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDataset">LoggingLinkedDatasetBigqueryDataset</a>]]

bigquery_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/logging_linked_dataset#bigquery_dataset LoggingLinkedDataset#bigquery_dataset}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Describes this link. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/logging_linked_dataset#description LoggingLinkedDataset#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/logging_linked_dataset#id LoggingLinkedDataset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the linked dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/logging_linked_dataset#location LoggingLinkedDataset#location}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The parent of the linked dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/logging_linked_dataset#parent LoggingLinkedDataset#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetConfig.property.timeouts"></a>

```python
timeouts: LoggingLinkedDatasetTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts">LoggingLinkedDatasetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/logging_linked_dataset#timeouts LoggingLinkedDataset#timeouts}

---

### LoggingLinkedDatasetTimeouts <a name="LoggingLinkedDatasetTimeouts" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_linked_dataset

loggingLinkedDataset.LoggingLinkedDatasetTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/logging_linked_dataset#create LoggingLinkedDataset#create}. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/logging_linked_dataset#delete LoggingLinkedDataset#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/logging_linked_dataset#create LoggingLinkedDataset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/logging_linked_dataset#delete LoggingLinkedDataset#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingLinkedDatasetBigqueryDatasetList <a name="LoggingLinkedDatasetBigqueryDatasetList" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_linked_dataset

loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LoggingLinkedDatasetBigqueryDatasetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDataset">LoggingLinkedDatasetBigqueryDataset</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LoggingLinkedDatasetBigqueryDataset]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDataset">LoggingLinkedDatasetBigqueryDataset</a>]]

---


### LoggingLinkedDatasetBigqueryDatasetOutputReference <a name="LoggingLinkedDatasetBigqueryDatasetOutputReference" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_linked_dataset

loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDataset">LoggingLinkedDatasetBigqueryDataset</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDatasetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LoggingLinkedDatasetBigqueryDataset]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetBigqueryDataset">LoggingLinkedDatasetBigqueryDataset</a>]

---


### LoggingLinkedDatasetTimeoutsOutputReference <a name="LoggingLinkedDatasetTimeoutsOutputReference" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_linked_dataset

loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts">LoggingLinkedDatasetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LoggingLinkedDatasetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.loggingLinkedDataset.LoggingLinkedDatasetTimeouts">LoggingLinkedDatasetTimeouts</a>]

---



