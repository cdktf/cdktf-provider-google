# `dataGoogleVertexAiIndex` Submodule <a name="`dataGoogleVertexAiIndex` Submodule" id="@cdktf/provider-google.dataGoogleVertexAiIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVertexAiIndex <a name="DataGoogleVertexAiIndex" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/vertex_ai_index google_vertex_ai_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndex(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  region: str,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of the Index. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the index. eg us-central1. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/vertex_ai_index#id DataGoogleVertexAiIndex#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/vertex_ai_index#project DataGoogleVertexAiIndex#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.name"></a>

- *Type:* str

The resource name of the Index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/vertex_ai_index#name DataGoogleVertexAiIndex#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.region"></a>

- *Type:* str

The region of the index. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/vertex_ai_index#region DataGoogleVertexAiIndex#region}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/vertex_ai_index#id DataGoogleVertexAiIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/vertex_ai_index#project DataGoogleVertexAiIndex#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleVertexAiIndex resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleVertexAiIndex resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleVertexAiIndex to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleVertexAiIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/vertex_ai_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleVertexAiIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.deployedIndexes">deployed_indexes</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList">DataGoogleVertexAiIndexDeployedIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.indexStats">index_stats</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList">DataGoogleVertexAiIndexIndexStatsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.indexUpdateMethod">index_update_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList">DataGoogleVertexAiIndexMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.metadataSchemaUri">metadata_schema_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `deployed_indexes`<sup>Required</sup> <a name="deployed_indexes" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.deployedIndexes"></a>

```python
deployed_indexes: DataGoogleVertexAiIndexDeployedIndexesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList">DataGoogleVertexAiIndexDeployedIndexesList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `index_stats`<sup>Required</sup> <a name="index_stats" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.indexStats"></a>

```python
index_stats: DataGoogleVertexAiIndexIndexStatsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList">DataGoogleVertexAiIndexIndexStatsList</a>

---

##### `index_update_method`<sup>Required</sup> <a name="index_update_method" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.indexUpdateMethod"></a>

```python
index_update_method: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.metadata"></a>

```python
metadata: DataGoogleVertexAiIndexMetadataList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList">DataGoogleVertexAiIndexMetadataList</a>

---

##### `metadata_schema_uri`<sup>Required</sup> <a name="metadata_schema_uri" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.metadataSchemaUri"></a>

```python
metadata_schema_uri: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVertexAiIndexConfig <a name="DataGoogleVertexAiIndexConfig" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  region: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.name">name</a></code> | <code>str</code> | The resource name of the Index. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.region">region</a></code> | <code>str</code> | The region of the index. eg us-central1. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/vertex_ai_index#id DataGoogleVertexAiIndex#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/vertex_ai_index#project DataGoogleVertexAiIndex#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the Index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/vertex_ai_index#name DataGoogleVertexAiIndex#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the index. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/vertex_ai_index#region DataGoogleVertexAiIndex#region}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/vertex_ai_index#id DataGoogleVertexAiIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/vertex_ai_index#project DataGoogleVertexAiIndex#project}.

---

### DataGoogleVertexAiIndexDeployedIndexes <a name="DataGoogleVertexAiIndexDeployedIndexes" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexes.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexes()
```


### DataGoogleVertexAiIndexIndexStats <a name="DataGoogleVertexAiIndexIndexStats" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStats.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStats()
```


### DataGoogleVertexAiIndexMetadata <a name="DataGoogleVertexAiIndexMetadata" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadata()
```


### DataGoogleVertexAiIndexMetadataConfig <a name="DataGoogleVertexAiIndexMetadataConfig" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfig()
```


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig()
```


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig()
```


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleVertexAiIndexDeployedIndexesList <a name="DataGoogleVertexAiIndexDeployedIndexesList" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleVertexAiIndexDeployedIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleVertexAiIndexDeployedIndexesOutputReference <a name="DataGoogleVertexAiIndexDeployedIndexesOutputReference" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.deployedIndexId">deployed_index_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.indexEndpoint">index_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexes">DataGoogleVertexAiIndexDeployedIndexes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deployed_index_id`<sup>Required</sup> <a name="deployed_index_id" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.deployedIndexId"></a>

```python
deployed_index_id: str
```

- *Type:* str

---

##### `index_endpoint`<sup>Required</sup> <a name="index_endpoint" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.indexEndpoint"></a>

```python
index_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleVertexAiIndexDeployedIndexes
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexes">DataGoogleVertexAiIndexDeployedIndexes</a>

---


### DataGoogleVertexAiIndexIndexStatsList <a name="DataGoogleVertexAiIndexIndexStatsList" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleVertexAiIndexIndexStatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleVertexAiIndexIndexStatsOutputReference <a name="DataGoogleVertexAiIndexIndexStatsOutputReference" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.shardsCount">shards_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.vectorsCount">vectors_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStats">DataGoogleVertexAiIndexIndexStats</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `shards_count`<sup>Required</sup> <a name="shards_count" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.shardsCount"></a>

```python
shards_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vectors_count`<sup>Required</sup> <a name="vectors_count" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.vectorsCount"></a>

```python
vectors_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleVertexAiIndexIndexStats
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStats">DataGoogleVertexAiIndexIndexStats</a>

---


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a>

---


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.bruteForceConfig">brute_force_config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.treeAhConfig">tree_ah_config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `brute_force_config`<sup>Required</sup> <a name="brute_force_config" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.bruteForceConfig"></a>

```python
brute_force_config: DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList</a>

---

##### `tree_ah_config`<sup>Required</sup> <a name="tree_ah_config" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.treeAhConfig"></a>

```python
tree_ah_config: DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig</a>

---


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCount">leaf_node_embedding_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodesToSearchPercent">leaf_nodes_to_search_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `leaf_node_embedding_count`<sup>Required</sup> <a name="leaf_node_embedding_count" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCount"></a>

```python
leaf_node_embedding_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `leaf_nodes_to_search_percent`<sup>Required</sup> <a name="leaf_nodes_to_search_percent" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodesToSearchPercent"></a>

```python
leaf_nodes_to_search_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a>

---


### DataGoogleVertexAiIndexMetadataConfigList <a name="DataGoogleVertexAiIndexMetadataConfigList" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleVertexAiIndexMetadataConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleVertexAiIndexMetadataConfigOutputReference <a name="DataGoogleVertexAiIndexMetadataConfigOutputReference" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.algorithmConfig">algorithm_config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.approximateNeighborsCount">approximate_neighbors_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.dimensions">dimensions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.distanceMeasureType">distance_measure_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.featureNormType">feature_norm_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.shardSize">shard_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfig">DataGoogleVertexAiIndexMetadataConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_config`<sup>Required</sup> <a name="algorithm_config" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.algorithmConfig"></a>

```python
algorithm_config: DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList</a>

---

##### `approximate_neighbors_count`<sup>Required</sup> <a name="approximate_neighbors_count" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.approximateNeighborsCount"></a>

```python
approximate_neighbors_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.dimensions"></a>

```python
dimensions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `distance_measure_type`<sup>Required</sup> <a name="distance_measure_type" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.distanceMeasureType"></a>

```python
distance_measure_type: str
```

- *Type:* str

---

##### `feature_norm_type`<sup>Required</sup> <a name="feature_norm_type" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.featureNormType"></a>

```python
feature_norm_type: str
```

- *Type:* str

---

##### `shard_size`<sup>Required</sup> <a name="shard_size" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.shardSize"></a>

```python
shard_size: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleVertexAiIndexMetadataConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfig">DataGoogleVertexAiIndexMetadataConfig</a>

---


### DataGoogleVertexAiIndexMetadataList <a name="DataGoogleVertexAiIndexMetadataList" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleVertexAiIndexMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleVertexAiIndexMetadataOutputReference <a name="DataGoogleVertexAiIndexMetadataOutputReference" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vertex_ai_index

dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList">DataGoogleVertexAiIndexMetadataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.contentsDeltaUri">contents_delta_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.isCompleteOverwrite">is_complete_overwrite</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadata">DataGoogleVertexAiIndexMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.config"></a>

```python
config: DataGoogleVertexAiIndexMetadataConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList">DataGoogleVertexAiIndexMetadataConfigList</a>

---

##### `contents_delta_uri`<sup>Required</sup> <a name="contents_delta_uri" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.contentsDeltaUri"></a>

```python
contents_delta_uri: str
```

- *Type:* str

---

##### `is_complete_overwrite`<sup>Required</sup> <a name="is_complete_overwrite" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.isCompleteOverwrite"></a>

```python
is_complete_overwrite: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleVertexAiIndexMetadata
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadata">DataGoogleVertexAiIndexMetadata</a>

---



