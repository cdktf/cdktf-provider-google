# `dataGoogleBigqueryDataset` Submodule <a name="`dataGoogleBigqueryDataset` Submodule" id="@cdktf/provider-google.dataGoogleBigqueryDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBigqueryDataset <a name="DataGoogleBigqueryDataset" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/data-sources/bigquery_dataset google_bigquery_dataset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDataset(
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
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.datasetId">dataset_id</a></code> | <code>str</code> | A unique ID for this dataset, without the project name. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/data-sources/bigquery_dataset#id DataGoogleBigqueryDataset#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/data-sources/bigquery_dataset#project DataGoogleBigqueryDataset#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.datasetId"></a>

- *Type:* str

A unique ID for this dataset, without the project name.

The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/data-sources/bigquery_dataset#dataset_id DataGoogleBigqueryDataset#dataset_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/data-sources/bigquery_dataset#id DataGoogleBigqueryDataset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/data-sources/bigquery_dataset#project DataGoogleBigqueryDataset#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleBigqueryDataset resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleBigqueryDataset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleBigqueryDataset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleBigqueryDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/data-sources/bigquery_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleBigqueryDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.access">access</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList">DataGoogleBigqueryDatasetAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.defaultCollation">default_collation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.defaultEncryptionConfiguration">default_encryption_configuration</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList">DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.defaultPartitionExpirationMs">default_partition_expiration_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.defaultTableExpirationMs">default_table_expiration_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.deleteContentsOnDestroy">delete_contents_on_destroy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.externalDatasetReference">external_dataset_reference</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList">DataGoogleBigqueryDatasetExternalDatasetReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.friendlyName">friendly_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.isCaseInsensitive">is_case_insensitive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.lastModifiedTime">last_modified_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.maxTimeTravelHours">max_time_travel_hours</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.resourceTags">resource_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.storageBillingModel">storage_billing_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.access"></a>

```python
access: DataGoogleBigqueryDatasetAccessList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList">DataGoogleBigqueryDatasetAccessList</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_collation`<sup>Required</sup> <a name="default_collation" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.defaultCollation"></a>

```python
default_collation: str
```

- *Type:* str

---

##### `default_encryption_configuration`<sup>Required</sup> <a name="default_encryption_configuration" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.defaultEncryptionConfiguration"></a>

```python
default_encryption_configuration: DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList">DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList</a>

---

##### `default_partition_expiration_ms`<sup>Required</sup> <a name="default_partition_expiration_ms" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.defaultPartitionExpirationMs"></a>

```python
default_partition_expiration_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_table_expiration_ms`<sup>Required</sup> <a name="default_table_expiration_ms" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.defaultTableExpirationMs"></a>

```python
default_table_expiration_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delete_contents_on_destroy`<sup>Required</sup> <a name="delete_contents_on_destroy" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.deleteContentsOnDestroy"></a>

```python
delete_contents_on_destroy: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `external_dataset_reference`<sup>Required</sup> <a name="external_dataset_reference" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.externalDatasetReference"></a>

```python
external_dataset_reference: DataGoogleBigqueryDatasetExternalDatasetReferenceList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList">DataGoogleBigqueryDatasetExternalDatasetReferenceList</a>

---

##### `friendly_name`<sup>Required</sup> <a name="friendly_name" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.friendlyName"></a>

```python
friendly_name: str
```

- *Type:* str

---

##### `is_case_insensitive`<sup>Required</sup> <a name="is_case_insensitive" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.isCaseInsensitive"></a>

```python
is_case_insensitive: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.lastModifiedTime"></a>

```python
last_modified_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `max_time_travel_hours`<sup>Required</sup> <a name="max_time_travel_hours" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.maxTimeTravelHours"></a>

```python
max_time_travel_hours: str
```

- *Type:* str

---

##### `resource_tags`<sup>Required</sup> <a name="resource_tags" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.resourceTags"></a>

```python
resource_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `storage_billing_model`<sup>Required</sup> <a name="storage_billing_model" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.storageBillingModel"></a>

```python
storage_billing_model: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDataset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBigqueryDatasetAccess <a name="DataGoogleBigqueryDatasetAccess" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccess()
```


### DataGoogleBigqueryDatasetAccessDataset <a name="DataGoogleBigqueryDatasetAccessDataset" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDataset.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDataset()
```


### DataGoogleBigqueryDatasetAccessDatasetDataset <a name="DataGoogleBigqueryDatasetAccessDatasetDataset" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDataset.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDataset()
```


### DataGoogleBigqueryDatasetAccessRoutine <a name="DataGoogleBigqueryDatasetAccessRoutine" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutine.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutine()
```


### DataGoogleBigqueryDatasetAccessView <a name="DataGoogleBigqueryDatasetAccessView" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessView.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessView()
```


### DataGoogleBigqueryDatasetConfig <a name="DataGoogleBigqueryDatasetConfig" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset_id: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.datasetId">dataset_id</a></code> | <code>str</code> | A unique ID for this dataset, without the project name. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/data-sources/bigquery_dataset#id DataGoogleBigqueryDataset#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/data-sources/bigquery_dataset#project DataGoogleBigqueryDataset#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

A unique ID for this dataset, without the project name.

The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/data-sources/bigquery_dataset#dataset_id DataGoogleBigqueryDataset#dataset_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/data-sources/bigquery_dataset#id DataGoogleBigqueryDataset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/data-sources/bigquery_dataset#project DataGoogleBigqueryDataset#project}.

---

### DataGoogleBigqueryDatasetDefaultEncryptionConfiguration <a name="DataGoogleBigqueryDatasetDefaultEncryptionConfiguration" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfiguration()
```


### DataGoogleBigqueryDatasetExternalDatasetReference <a name="DataGoogleBigqueryDatasetExternalDatasetReference" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReference()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBigqueryDatasetAccessDatasetDatasetList <a name="DataGoogleBigqueryDatasetAccessDatasetDatasetList" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference <a name="DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDataset">DataGoogleBigqueryDatasetAccessDatasetDataset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryDatasetAccessDatasetDataset
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDataset">DataGoogleBigqueryDatasetAccessDatasetDataset</a>

---


### DataGoogleBigqueryDatasetAccessDatasetList <a name="DataGoogleBigqueryDatasetAccessDatasetList" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryDatasetAccessDatasetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryDatasetAccessDatasetOutputReference <a name="DataGoogleBigqueryDatasetAccessDatasetOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.property.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList">DataGoogleBigqueryDatasetAccessDatasetDatasetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.property.targetTypes">target_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDataset">DataGoogleBigqueryDatasetAccessDataset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.property.dataset"></a>

```python
dataset: DataGoogleBigqueryDatasetAccessDatasetDatasetList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetDatasetList">DataGoogleBigqueryDatasetAccessDatasetDatasetList</a>

---

##### `target_types`<sup>Required</sup> <a name="target_types" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.property.targetTypes"></a>

```python
target_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryDatasetAccessDataset
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDataset">DataGoogleBigqueryDatasetAccessDataset</a>

---


### DataGoogleBigqueryDatasetAccessList <a name="DataGoogleBigqueryDatasetAccessList" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryDatasetAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryDatasetAccessOutputReference <a name="DataGoogleBigqueryDatasetAccessOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList">DataGoogleBigqueryDatasetAccessDatasetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.groupByEmail">group_by_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.iamMember">iam_member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.routine">routine</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList">DataGoogleBigqueryDatasetAccessRoutineList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.specialGroup">special_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.userByEmail">user_by_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.view">view</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList">DataGoogleBigqueryDatasetAccessViewList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccess">DataGoogleBigqueryDatasetAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.dataset"></a>

```python
dataset: DataGoogleBigqueryDatasetAccessDatasetList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessDatasetList">DataGoogleBigqueryDatasetAccessDatasetList</a>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `group_by_email`<sup>Required</sup> <a name="group_by_email" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.groupByEmail"></a>

```python
group_by_email: str
```

- *Type:* str

---

##### `iam_member`<sup>Required</sup> <a name="iam_member" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.iamMember"></a>

```python
iam_member: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `routine`<sup>Required</sup> <a name="routine" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.routine"></a>

```python
routine: DataGoogleBigqueryDatasetAccessRoutineList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList">DataGoogleBigqueryDatasetAccessRoutineList</a>

---

##### `special_group`<sup>Required</sup> <a name="special_group" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.specialGroup"></a>

```python
special_group: str
```

- *Type:* str

---

##### `user_by_email`<sup>Required</sup> <a name="user_by_email" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.userByEmail"></a>

```python
user_by_email: str
```

- *Type:* str

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.view"></a>

```python
view: DataGoogleBigqueryDatasetAccessViewList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList">DataGoogleBigqueryDatasetAccessViewList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryDatasetAccess
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccess">DataGoogleBigqueryDatasetAccess</a>

---


### DataGoogleBigqueryDatasetAccessRoutineList <a name="DataGoogleBigqueryDatasetAccessRoutineList" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryDatasetAccessRoutineOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryDatasetAccessRoutineOutputReference <a name="DataGoogleBigqueryDatasetAccessRoutineOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.property.routineId">routine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutine">DataGoogleBigqueryDatasetAccessRoutine</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `routine_id`<sup>Required</sup> <a name="routine_id" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.property.routineId"></a>

```python
routine_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutineOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryDatasetAccessRoutine
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessRoutine">DataGoogleBigqueryDatasetAccessRoutine</a>

---


### DataGoogleBigqueryDatasetAccessViewList <a name="DataGoogleBigqueryDatasetAccessViewList" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryDatasetAccessViewOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryDatasetAccessViewOutputReference <a name="DataGoogleBigqueryDatasetAccessViewOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessView">DataGoogleBigqueryDatasetAccessView</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessViewOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryDatasetAccessView
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetAccessView">DataGoogleBigqueryDatasetAccessView</a>

---


### DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList <a name="DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference <a name="DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfiguration">DataGoogleBigqueryDatasetDefaultEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryDatasetDefaultEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetDefaultEncryptionConfiguration">DataGoogleBigqueryDatasetDefaultEncryptionConfiguration</a>

---


### DataGoogleBigqueryDatasetExternalDatasetReferenceList <a name="DataGoogleBigqueryDatasetExternalDatasetReferenceList" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference <a name="DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_bigquery_dataset

dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.property.connection">connection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.property.externalSource">external_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReference">DataGoogleBigqueryDatasetExternalDatasetReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection`<sup>Required</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.property.connection"></a>

```python
connection: str
```

- *Type:* str

---

##### `external_source`<sup>Required</sup> <a name="external_source" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.property.externalSource"></a>

```python
external_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReferenceOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBigqueryDatasetExternalDatasetReference
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryDataset.DataGoogleBigqueryDatasetExternalDatasetReference">DataGoogleBigqueryDatasetExternalDatasetReference</a>

---



