# `dataGoogleParameterManagerRegionalParameterVersion` Submodule <a name="`dataGoogleParameterManagerRegionalParameterVersion` Submodule" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleParameterManagerRegionalParameterVersion <a name="DataGoogleParameterManagerRegionalParameterVersion" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version google_parameter_manager_regional_parameter_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_parameter_manager_regional_parameter_version

dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion(
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
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.parameter">parameter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version#parameter DataGoogleParameterManagerRegionalParameterVersion#parameter}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.parameterVersionId">parameter_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version#parameter_version_id DataGoogleParameterManagerRegionalParameterVersion#parameter_version_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version#id DataGoogleParameterManagerRegionalParameterVersion#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version#location DataGoogleParameterManagerRegionalParameterVersion#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version#project DataGoogleParameterManagerRegionalParameterVersion#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.parameter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version#parameter DataGoogleParameterManagerRegionalParameterVersion#parameter}.

---

##### `parameter_version_id`<sup>Required</sup> <a name="parameter_version_id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.parameterVersionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version#parameter_version_id DataGoogleParameterManagerRegionalParameterVersion#parameter_version_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version#id DataGoogleParameterManagerRegionalParameterVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version#location DataGoogleParameterManagerRegionalParameterVersion#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version#project DataGoogleParameterManagerRegionalParameterVersion#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleParameterManagerRegionalParameterVersion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_parameter_manager_regional_parameter_version

dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_parameter_manager_regional_parameter_version

dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_parameter_manager_regional_parameter_version

dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_parameter_manager_regional_parameter_version

dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleParameterManagerRegionalParameterVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleParameterManagerRegionalParameterVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleParameterManagerRegionalParameterVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleParameterManagerRegionalParameterVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.disabled">disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.kmsKeyVersion">kms_key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.parameterData">parameter_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.parameterInput">parameter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.parameterVersionIdInput">parameter_version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.parameter">parameter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.parameterVersionId">parameter_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.disabled"></a>

```python
disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `kms_key_version`<sup>Required</sup> <a name="kms_key_version" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.kmsKeyVersion"></a>

```python
kms_key_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameter_data`<sup>Required</sup> <a name="parameter_data" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.parameterData"></a>

```python
parameter_data: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `parameter_input`<sup>Optional</sup> <a name="parameter_input" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.parameterInput"></a>

```python
parameter_input: str
```

- *Type:* str

---

##### `parameter_version_id_input`<sup>Optional</sup> <a name="parameter_version_id_input" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.parameterVersionIdInput"></a>

```python
parameter_version_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.parameter"></a>

```python
parameter: str
```

- *Type:* str

---

##### `parameter_version_id`<sup>Required</sup> <a name="parameter_version_id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.parameterVersionId"></a>

```python
parameter_version_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleParameterManagerRegionalParameterVersionConfig <a name="DataGoogleParameterManagerRegionalParameterVersionConfig" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_parameter_manager_regional_parameter_version

dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig(
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
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig.property.parameter">parameter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version#parameter DataGoogleParameterManagerRegionalParameterVersion#parameter}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig.property.parameterVersionId">parameter_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version#parameter_version_id DataGoogleParameterManagerRegionalParameterVersion#parameter_version_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version#id DataGoogleParameterManagerRegionalParameterVersion#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version#location DataGoogleParameterManagerRegionalParameterVersion#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version#project DataGoogleParameterManagerRegionalParameterVersion#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig.property.parameter"></a>

```python
parameter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version#parameter DataGoogleParameterManagerRegionalParameterVersion#parameter}.

---

##### `parameter_version_id`<sup>Required</sup> <a name="parameter_version_id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig.property.parameterVersionId"></a>

```python
parameter_version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version#parameter_version_id DataGoogleParameterManagerRegionalParameterVersion#parameter_version_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version#id DataGoogleParameterManagerRegionalParameterVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version#location DataGoogleParameterManagerRegionalParameterVersion#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersion.DataGoogleParameterManagerRegionalParameterVersionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/parameter_manager_regional_parameter_version#project DataGoogleParameterManagerRegionalParameterVersion#project}.

---



