# `dataGoogleParameterManagerParameterVersion` Submodule <a name="`dataGoogleParameterManagerParameterVersion` Submodule" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleParameterManagerParameterVersion <a name="DataGoogleParameterManagerParameterVersion" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version google_parameter_manager_parameter_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_parameter_manager_parameter_version

dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  parameter: str,
  parameter_version_id: str,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.parameter">parameter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version#parameter DataGoogleParameterManagerParameterVersion#parameter}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.parameterVersionId">parameter_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version#parameter_version_id DataGoogleParameterManagerParameterVersion#parameter_version_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version#id DataGoogleParameterManagerParameterVersion#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version#project DataGoogleParameterManagerParameterVersion#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.parameter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version#parameter DataGoogleParameterManagerParameterVersion#parameter}.

---

##### `parameter_version_id`<sup>Required</sup> <a name="parameter_version_id" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.parameterVersionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version#parameter_version_id DataGoogleParameterManagerParameterVersion#parameter_version_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version#id DataGoogleParameterManagerParameterVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version#project DataGoogleParameterManagerParameterVersion#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleParameterManagerParameterVersion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_parameter_manager_parameter_version

dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_parameter_manager_parameter_version

dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_parameter_manager_parameter_version

dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_parameter_manager_parameter_version

dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleParameterManagerParameterVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleParameterManagerParameterVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleParameterManagerParameterVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleParameterManagerParameterVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.disabled">disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.kmsKeyVersion">kms_key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.parameterData">parameter_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.parameterInput">parameter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.parameterVersionIdInput">parameter_version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.parameter">parameter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.parameterVersionId">parameter_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.disabled"></a>

```python
disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `kms_key_version`<sup>Required</sup> <a name="kms_key_version" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.kmsKeyVersion"></a>

```python
kms_key_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameter_data`<sup>Required</sup> <a name="parameter_data" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.parameterData"></a>

```python
parameter_data: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parameter_input`<sup>Optional</sup> <a name="parameter_input" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.parameterInput"></a>

```python
parameter_input: str
```

- *Type:* str

---

##### `parameter_version_id_input`<sup>Optional</sup> <a name="parameter_version_id_input" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.parameterVersionIdInput"></a>

```python
parameter_version_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.parameter"></a>

```python
parameter: str
```

- *Type:* str

---

##### `parameter_version_id`<sup>Required</sup> <a name="parameter_version_id" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.parameterVersionId"></a>

```python
parameter_version_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleParameterManagerParameterVersionConfig <a name="DataGoogleParameterManagerParameterVersionConfig" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_parameter_manager_parameter_version

dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  parameter: str,
  parameter_version_id: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.parameter">parameter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version#parameter DataGoogleParameterManagerParameterVersion#parameter}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.parameterVersionId">parameter_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version#parameter_version_id DataGoogleParameterManagerParameterVersion#parameter_version_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version#id DataGoogleParameterManagerParameterVersion#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version#project DataGoogleParameterManagerParameterVersion#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.parameter"></a>

```python
parameter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version#parameter DataGoogleParameterManagerParameterVersion#parameter}.

---

##### `parameter_version_id`<sup>Required</sup> <a name="parameter_version_id" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.parameterVersionId"></a>

```python
parameter_version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version#parameter_version_id DataGoogleParameterManagerParameterVersion#parameter_version_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version#id DataGoogleParameterManagerParameterVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersion.DataGoogleParameterManagerParameterVersionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_parameter_version#project DataGoogleParameterManagerParameterVersion#project}.

---



