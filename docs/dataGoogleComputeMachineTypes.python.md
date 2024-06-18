# `dataGoogleComputeMachineTypes` Submodule <a name="`dataGoogleComputeMachineTypes` Submodule" id="@cdktf/provider-google.dataGoogleComputeMachineTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeMachineTypes <a name="DataGoogleComputeMachineTypes" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/data-sources/compute_machine_types google_compute_machine_types}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_machine_types

dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: str = None,
  id: str = None,
  project: str = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/data-sources/compute_machine_types#filter DataGoogleComputeMachineTypes#filter}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/data-sources/compute_machine_types#id DataGoogleComputeMachineTypes#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.project">project</a></code> | <code>str</code> | Project ID for this request. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.zone">zone</a></code> | <code>str</code> | The name of the zone for this request. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.filter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/data-sources/compute_machine_types#filter DataGoogleComputeMachineTypes#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/data-sources/compute_machine_types#id DataGoogleComputeMachineTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.project"></a>

- *Type:* str

Project ID for this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/data-sources/compute_machine_types#project DataGoogleComputeMachineTypes#project}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.zone"></a>

- *Type:* str

The name of the zone for this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/data-sources/compute_machine_types#zone DataGoogleComputeMachineTypes#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleComputeMachineTypes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_machine_types

dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_machine_types

dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_machine_types

dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_machine_types

dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleComputeMachineTypes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleComputeMachineTypes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleComputeMachineTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/data-sources/compute_machine_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeMachineTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.machineTypes">machine_types</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList">DataGoogleComputeMachineTypesMachineTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `machine_types`<sup>Required</sup> <a name="machine_types" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.machineTypes"></a>

```python
machine_types: DataGoogleComputeMachineTypesMachineTypesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList">DataGoogleComputeMachineTypesMachineTypesList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeMachineTypesConfig <a name="DataGoogleComputeMachineTypesConfig" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_machine_types

dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: str = None,
  id: str = None,
  project: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/data-sources/compute_machine_types#filter DataGoogleComputeMachineTypes#filter}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/data-sources/compute_machine_types#id DataGoogleComputeMachineTypes#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.project">project</a></code> | <code>str</code> | Project ID for this request. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.zone">zone</a></code> | <code>str</code> | The name of the zone for this request. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/data-sources/compute_machine_types#filter DataGoogleComputeMachineTypes#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/data-sources/compute_machine_types#id DataGoogleComputeMachineTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Project ID for this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/data-sources/compute_machine_types#project DataGoogleComputeMachineTypes#project}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

The name of the zone for this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/data-sources/compute_machine_types#zone DataGoogleComputeMachineTypes#zone}

---

### DataGoogleComputeMachineTypesMachineTypes <a name="DataGoogleComputeMachineTypesMachineTypes" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypes.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_machine_types

dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypes()
```


### DataGoogleComputeMachineTypesMachineTypesAccelerators <a name="DataGoogleComputeMachineTypesMachineTypesAccelerators" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAccelerators.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_machine_types

dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAccelerators()
```


### DataGoogleComputeMachineTypesMachineTypesDeprecated <a name="DataGoogleComputeMachineTypesMachineTypesDeprecated" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecated"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecated.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_machine_types

dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecated()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeMachineTypesMachineTypesAcceleratorsList <a name="DataGoogleComputeMachineTypesMachineTypesAcceleratorsList" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_machine_types

dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference <a name="DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_machine_types

dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.guestAcceleratorCount">guest_accelerator_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.guestAcceleratorType">guest_accelerator_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAccelerators">DataGoogleComputeMachineTypesMachineTypesAccelerators</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `guest_accelerator_count`<sup>Required</sup> <a name="guest_accelerator_count" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.guestAcceleratorCount"></a>

```python
guest_accelerator_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `guest_accelerator_type`<sup>Required</sup> <a name="guest_accelerator_type" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.guestAcceleratorType"></a>

```python
guest_accelerator_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeMachineTypesMachineTypesAccelerators
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAccelerators">DataGoogleComputeMachineTypesMachineTypesAccelerators</a>

---


### DataGoogleComputeMachineTypesMachineTypesDeprecatedList <a name="DataGoogleComputeMachineTypesMachineTypesDeprecatedList" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_machine_types

dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference <a name="DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_machine_types

dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.replacement">replacement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecated">DataGoogleComputeMachineTypesMachineTypesDeprecated</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `replacement`<sup>Required</sup> <a name="replacement" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.replacement"></a>

```python
replacement: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeMachineTypesMachineTypesDeprecated
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecated">DataGoogleComputeMachineTypesMachineTypesDeprecated</a>

---


### DataGoogleComputeMachineTypesMachineTypesList <a name="DataGoogleComputeMachineTypesMachineTypesList" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_machine_types

dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeMachineTypesMachineTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeMachineTypesMachineTypesOutputReference <a name="DataGoogleComputeMachineTypesMachineTypesOutputReference" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_machine_types

dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.accelerators">accelerators</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList">DataGoogleComputeMachineTypesMachineTypesAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.deprecated">deprecated</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList">DataGoogleComputeMachineTypesMachineTypesDeprecatedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.guestCpus">guest_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.isSharedCpus">is_shared_cpus</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.maximumPersistentDisks">maximum_persistent_disks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.maximumPersistentDisksSizeGb">maximum_persistent_disks_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.memoryMb">memory_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypes">DataGoogleComputeMachineTypesMachineTypes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.accelerators"></a>

```python
accelerators: DataGoogleComputeMachineTypesMachineTypesAcceleratorsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList">DataGoogleComputeMachineTypesMachineTypesAcceleratorsList</a>

---

##### `deprecated`<sup>Required</sup> <a name="deprecated" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.deprecated"></a>

```python
deprecated: DataGoogleComputeMachineTypesMachineTypesDeprecatedList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList">DataGoogleComputeMachineTypesMachineTypesDeprecatedList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `guest_cpus`<sup>Required</sup> <a name="guest_cpus" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.guestCpus"></a>

```python
guest_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_shared_cpus`<sup>Required</sup> <a name="is_shared_cpus" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.isSharedCpus"></a>

```python
is_shared_cpus: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `maximum_persistent_disks`<sup>Required</sup> <a name="maximum_persistent_disks" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.maximumPersistentDisks"></a>

```python
maximum_persistent_disks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_persistent_disks_size_gb`<sup>Required</sup> <a name="maximum_persistent_disks_size_gb" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.maximumPersistentDisksSizeGb"></a>

```python
maximum_persistent_disks_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_mb`<sup>Required</sup> <a name="memory_mb" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.memoryMb"></a>

```python
memory_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeMachineTypesMachineTypes
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypes">DataGoogleComputeMachineTypesMachineTypes</a>

---



