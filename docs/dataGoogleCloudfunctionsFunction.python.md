# `dataGoogleCloudfunctionsFunction` Submodule <a name="`dataGoogleCloudfunctionsFunction` Submodule" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudfunctionsFunction <a name="DataGoogleCloudfunctionsFunction" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/cloudfunctions_function google_cloudfunctions_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloudfunctions_function

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction(
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
  id: str = None,
  project: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.name">name</a></code> | <code>str</code> | A user-defined name of the function. Function names must be unique globally. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/cloudfunctions_function#id DataGoogleCloudfunctionsFunction#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.project">project</a></code> | <code>str</code> | Project of the function. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.region">region</a></code> | <code>str</code> | Region of function. If it is not provided, the provider region is used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.name"></a>

- *Type:* str

A user-defined name of the function. Function names must be unique globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/cloudfunctions_function#name DataGoogleCloudfunctionsFunction#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/cloudfunctions_function#id DataGoogleCloudfunctionsFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.project"></a>

- *Type:* str

Project of the function. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/cloudfunctions_function#project DataGoogleCloudfunctionsFunction#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.Initializer.parameter.region"></a>

- *Type:* str

Region of function. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/cloudfunctions_function#region DataGoogleCloudfunctionsFunction#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleCloudfunctionsFunction resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloudfunctions_function

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloudfunctions_function

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloudfunctions_function

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloudfunctions_function

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleCloudfunctionsFunction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleCloudfunctionsFunction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleCloudfunctionsFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/cloudfunctions_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudfunctionsFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.availableMemoryMb">available_memory_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.buildEnvironmentVariables">build_environment_variables</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.buildServiceAccount">build_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.buildWorkerPool">build_worker_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.dockerRegistry">docker_registry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.dockerRepository">docker_repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.entryPoint">entry_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.environmentVariables">environment_variables</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.eventTrigger">event_trigger</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList">DataGoogleCloudfunctionsFunctionEventTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.httpsTriggerSecurityLevel">https_trigger_security_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.httpsTriggerUrl">https_trigger_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.ingressSettings">ingress_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.secretEnvironmentVariables">secret_environment_variables</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList">DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.secretVolumes">secret_volumes</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList">DataGoogleCloudfunctionsFunctionSecretVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.sourceArchiveBucket">source_archive_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.sourceArchiveObject">source_archive_object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.sourceRepository">source_repository</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList">DataGoogleCloudfunctionsFunctionSourceRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.triggerHttp">trigger_http</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.vpcConnector">vpc_connector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.vpcConnectorEgressSettings">vpc_connector_egress_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `available_memory_mb`<sup>Required</sup> <a name="available_memory_mb" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.availableMemoryMb"></a>

```python
available_memory_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `build_environment_variables`<sup>Required</sup> <a name="build_environment_variables" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.buildEnvironmentVariables"></a>

```python
build_environment_variables: StringMap
```

- *Type:* cdktf.StringMap

---

##### `build_service_account`<sup>Required</sup> <a name="build_service_account" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.buildServiceAccount"></a>

```python
build_service_account: str
```

- *Type:* str

---

##### `build_worker_pool`<sup>Required</sup> <a name="build_worker_pool" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.buildWorkerPool"></a>

```python
build_worker_pool: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `docker_registry`<sup>Required</sup> <a name="docker_registry" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.dockerRegistry"></a>

```python
docker_registry: str
```

- *Type:* str

---

##### `docker_repository`<sup>Required</sup> <a name="docker_repository" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.dockerRepository"></a>

```python
docker_repository: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `entry_point`<sup>Required</sup> <a name="entry_point" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.entryPoint"></a>

```python
entry_point: str
```

- *Type:* str

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.environmentVariables"></a>

```python
environment_variables: StringMap
```

- *Type:* cdktf.StringMap

---

##### `event_trigger`<sup>Required</sup> <a name="event_trigger" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.eventTrigger"></a>

```python
event_trigger: DataGoogleCloudfunctionsFunctionEventTriggerList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList">DataGoogleCloudfunctionsFunctionEventTriggerList</a>

---

##### `https_trigger_security_level`<sup>Required</sup> <a name="https_trigger_security_level" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.httpsTriggerSecurityLevel"></a>

```python
https_trigger_security_level: str
```

- *Type:* str

---

##### `https_trigger_url`<sup>Required</sup> <a name="https_trigger_url" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.httpsTriggerUrl"></a>

```python
https_trigger_url: str
```

- *Type:* str

---

##### `ingress_settings`<sup>Required</sup> <a name="ingress_settings" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.ingressSettings"></a>

```python
ingress_settings: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances`<sup>Required</sup> <a name="min_instances" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `secret_environment_variables`<sup>Required</sup> <a name="secret_environment_variables" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.secretEnvironmentVariables"></a>

```python
secret_environment_variables: DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList">DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList</a>

---

##### `secret_volumes`<sup>Required</sup> <a name="secret_volumes" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.secretVolumes"></a>

```python
secret_volumes: DataGoogleCloudfunctionsFunctionSecretVolumesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList">DataGoogleCloudfunctionsFunctionSecretVolumesList</a>

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `source_archive_bucket`<sup>Required</sup> <a name="source_archive_bucket" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.sourceArchiveBucket"></a>

```python
source_archive_bucket: str
```

- *Type:* str

---

##### `source_archive_object`<sup>Required</sup> <a name="source_archive_object" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.sourceArchiveObject"></a>

```python
source_archive_object: str
```

- *Type:* str

---

##### `source_repository`<sup>Required</sup> <a name="source_repository" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.sourceRepository"></a>

```python
source_repository: DataGoogleCloudfunctionsFunctionSourceRepositoryList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList">DataGoogleCloudfunctionsFunctionSourceRepositoryList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trigger_http`<sup>Required</sup> <a name="trigger_http" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.triggerHttp"></a>

```python
trigger_http: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `vpc_connector`<sup>Required</sup> <a name="vpc_connector" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.vpcConnector"></a>

```python
vpc_connector: str
```

- *Type:* str

---

##### `vpc_connector_egress_settings`<sup>Required</sup> <a name="vpc_connector_egress_settings" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.vpcConnectorEgressSettings"></a>

```python
vpc_connector_egress_settings: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudfunctionsFunctionConfig <a name="DataGoogleCloudfunctionsFunctionConfig" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloudfunctions_function

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  project: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.name">name</a></code> | <code>str</code> | A user-defined name of the function. Function names must be unique globally. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/cloudfunctions_function#id DataGoogleCloudfunctionsFunction#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.project">project</a></code> | <code>str</code> | Project of the function. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.region">region</a></code> | <code>str</code> | Region of function. If it is not provided, the provider region is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A user-defined name of the function. Function names must be unique globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/cloudfunctions_function#name DataGoogleCloudfunctionsFunction#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/cloudfunctions_function#id DataGoogleCloudfunctionsFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Project of the function. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/cloudfunctions_function#project DataGoogleCloudfunctionsFunction#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region of function. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/cloudfunctions_function#region DataGoogleCloudfunctionsFunction#region}

---

### DataGoogleCloudfunctionsFunctionEventTrigger <a name="DataGoogleCloudfunctionsFunctionEventTrigger" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTrigger.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloudfunctions_function

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTrigger()
```


### DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy <a name="DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloudfunctions_function

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy()
```


### DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables <a name="DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloudfunctions_function

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables()
```


### DataGoogleCloudfunctionsFunctionSecretVolumes <a name="DataGoogleCloudfunctionsFunctionSecretVolumes" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumes.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloudfunctions_function

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumes()
```


### DataGoogleCloudfunctionsFunctionSecretVolumesVersions <a name="DataGoogleCloudfunctionsFunctionSecretVolumesVersions" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloudfunctions_function

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersions()
```


### DataGoogleCloudfunctionsFunctionSourceRepository <a name="DataGoogleCloudfunctionsFunctionSourceRepository" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloudfunctions_function

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepository()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList <a name="DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloudfunctions_function

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference <a name="DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloudfunctions_function

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retry">retry</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy">DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retry"></a>

```python
retry: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy">DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a>

---


### DataGoogleCloudfunctionsFunctionEventTriggerList <a name="DataGoogleCloudfunctionsFunctionEventTriggerList" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloudfunctions_function

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCloudfunctionsFunctionEventTriggerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCloudfunctionsFunctionEventTriggerOutputReference <a name="DataGoogleCloudfunctionsFunctionEventTriggerOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloudfunctions_function

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicy">failure_policy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList">DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTrigger">DataGoogleCloudfunctionsFunctionEventTrigger</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `failure_policy`<sup>Required</sup> <a name="failure_policy" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicy"></a>

```python
failure_policy: DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList">DataGoogleCloudfunctionsFunctionEventTriggerFailurePolicyList</a>

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTriggerOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudfunctionsFunctionEventTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionEventTrigger">DataGoogleCloudfunctionsFunctionEventTrigger</a>

---


### DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList <a name="DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloudfunctions_function

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference <a name="DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloudfunctions_function

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables">DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables">DataGoogleCloudfunctionsFunctionSecretEnvironmentVariables</a>

---


### DataGoogleCloudfunctionsFunctionSecretVolumesList <a name="DataGoogleCloudfunctionsFunctionSecretVolumesList" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloudfunctions_function

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference <a name="DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloudfunctions_function

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.versions">versions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList">DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumes">DataGoogleCloudfunctionsFunctionSecretVolumes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.versions"></a>

```python
versions: DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList">DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudfunctionsFunctionSecretVolumes
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumes">DataGoogleCloudfunctionsFunctionSecretVolumes</a>

---


### DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList <a name="DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloudfunctions_function

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference <a name="DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloudfunctions_function

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersions">DataGoogleCloudfunctionsFunctionSecretVolumesVersions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudfunctionsFunctionSecretVolumesVersions
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSecretVolumesVersions">DataGoogleCloudfunctionsFunctionSecretVolumesVersions</a>

---


### DataGoogleCloudfunctionsFunctionSourceRepositoryList <a name="DataGoogleCloudfunctionsFunctionSourceRepositoryList" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloudfunctions_function

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference <a name="DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloudfunctions_function

dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.deployedUrl">deployed_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepository">DataGoogleCloudfunctionsFunctionSourceRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deployed_url`<sup>Required</sup> <a name="deployed_url" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.deployedUrl"></a>

```python
deployed_url: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudfunctionsFunctionSourceRepository
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctionsFunction.DataGoogleCloudfunctionsFunctionSourceRepository">DataGoogleCloudfunctionsFunctionSourceRepository</a>

---



