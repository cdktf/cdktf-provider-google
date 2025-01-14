# `dataGoogleAlloydbSupportedDatabaseFlags` Submodule <a name="`dataGoogleAlloydbSupportedDatabaseFlags` Submodule" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleAlloydbSupportedDatabaseFlags <a name="DataGoogleAlloydbSupportedDatabaseFlags" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/alloydb_supported_database_flags google_alloydb_supported_database_flags}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_supported_database_flags

dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.Initializer.parameter.location">location</a></code> | <code>str</code> | The canonical id for the location. For example: "us-east1". |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/alloydb_supported_database_flags#id DataGoogleAlloydbSupportedDatabaseFlags#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.Initializer.parameter.project">project</a></code> | <code>str</code> | Project ID of the project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.Initializer.parameter.location"></a>

- *Type:* str

The canonical id for the location. For example: "us-east1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/alloydb_supported_database_flags#location DataGoogleAlloydbSupportedDatabaseFlags#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/alloydb_supported_database_flags#id DataGoogleAlloydbSupportedDatabaseFlags#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.Initializer.parameter.project"></a>

- *Type:* str

Project ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/alloydb_supported_database_flags#project DataGoogleAlloydbSupportedDatabaseFlags#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleAlloydbSupportedDatabaseFlags resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_supported_database_flags

dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_supported_database_flags

dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_supported_database_flags

dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_supported_database_flags

dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleAlloydbSupportedDatabaseFlags resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleAlloydbSupportedDatabaseFlags to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleAlloydbSupportedDatabaseFlags that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/alloydb_supported_database_flags#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleAlloydbSupportedDatabaseFlags to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.supportedDatabaseFlags">supported_database_flags</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList">DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `supported_database_flags`<sup>Required</sup> <a name="supported_database_flags" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.supportedDatabaseFlags"></a>

```python
supported_database_flags: DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList">DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlags.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleAlloydbSupportedDatabaseFlagsConfig <a name="DataGoogleAlloydbSupportedDatabaseFlagsConfig" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_supported_database_flags

dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsConfig.property.location">location</a></code> | <code>str</code> | The canonical id for the location. For example: "us-east1". |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/alloydb_supported_database_flags#id DataGoogleAlloydbSupportedDatabaseFlags#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsConfig.property.project">project</a></code> | <code>str</code> | Project ID of the project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The canonical id for the location. For example: "us-east1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/alloydb_supported_database_flags#location DataGoogleAlloydbSupportedDatabaseFlags#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/alloydb_supported_database_flags#id DataGoogleAlloydbSupportedDatabaseFlags#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Project ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/alloydb_supported_database_flags#project DataGoogleAlloydbSupportedDatabaseFlags#project}

---

### DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlags <a name="DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlags" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlags.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_supported_database_flags

dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlags()
```


### DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictions <a name="DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictions" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_supported_database_flags

dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictions()
```


### DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictions <a name="DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictions" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_supported_database_flags

dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList <a name="DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_supported_database_flags

dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference <a name="DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_supported_database_flags

dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.property.maxValue">max_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.property.minValue">min_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictions">DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_value`<sup>Required</sup> <a name="max_value" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.property.maxValue"></a>

```python
max_value: str
```

- *Type:* str

---

##### `min_value`<sup>Required</sup> <a name="min_value" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.property.minValue"></a>

```python
min_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictions">DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictions</a>

---


### DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList <a name="DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_supported_database_flags

dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference <a name="DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_supported_database_flags

dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.property.acceptsMultipleValues">accepts_multiple_values</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.property.flagName">flag_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.property.integerRestrictions">integer_restrictions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList">DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.property.requiresDbRestart">requires_db_restart</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.property.stringRestrictions">string_restrictions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList">DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.property.supportedDbVersions">supported_db_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlags">DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accepts_multiple_values`<sup>Required</sup> <a name="accepts_multiple_values" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.property.acceptsMultipleValues"></a>

```python
accepts_multiple_values: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `flag_name`<sup>Required</sup> <a name="flag_name" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.property.flagName"></a>

```python
flag_name: str
```

- *Type:* str

---

##### `integer_restrictions`<sup>Required</sup> <a name="integer_restrictions" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.property.integerRestrictions"></a>

```python
integer_restrictions: DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList">DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `requires_db_restart`<sup>Required</sup> <a name="requires_db_restart" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.property.requiresDbRestart"></a>

```python
requires_db_restart: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `string_restrictions`<sup>Required</sup> <a name="string_restrictions" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.property.stringRestrictions"></a>

```python
string_restrictions: DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList">DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList</a>

---

##### `supported_db_versions`<sup>Required</sup> <a name="supported_db_versions" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.property.supportedDbVersions"></a>

```python
supported_db_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlags
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlags">DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlags</a>

---


### DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList <a name="DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_supported_database_flags

dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference <a name="DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_supported_database_flags

dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.property.allowedValues">allowed_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictions">DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.property.allowedValues"></a>

```python
allowed_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictions
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbSupportedDatabaseFlags.DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictions">DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictions</a>

---



