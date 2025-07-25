# `dataGoogleComputeStoragePoolTypes` Submodule <a name="`dataGoogleComputeStoragePoolTypes` Submodule" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeStoragePoolTypes <a name="DataGoogleComputeStoragePoolTypes" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_storage_pool_types google_compute_storage_pool_types}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_storage_pool_types

dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  storage_pool_type: str,
  zone: str,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.storagePoolType">storage_pool_type</a></code> | <code>str</code> | Name of the storage pool type. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.zone">zone</a></code> | <code>str</code> | The name of the zone. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_storage_pool_types#project DataGoogleComputeStoragePoolTypes#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `storage_pool_type`<sup>Required</sup> <a name="storage_pool_type" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.storagePoolType"></a>

- *Type:* str

Name of the storage pool type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_storage_pool_types#storage_pool_type DataGoogleComputeStoragePoolTypes#storage_pool_type}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.zone"></a>

- *Type:* str

The name of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_storage_pool_types#zone DataGoogleComputeStoragePoolTypes#zone}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_storage_pool_types#project DataGoogleComputeStoragePoolTypes#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleComputeStoragePoolTypes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_storage_pool_types

dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_storage_pool_types

dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_storage_pool_types

dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_storage_pool_types

dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleComputeStoragePoolTypes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleComputeStoragePoolTypes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleComputeStoragePoolTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_storage_pool_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeStoragePoolTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.deprecated">deprecated</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList">DataGoogleComputeStoragePoolTypesDeprecatedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.maxPoolProvisionedCapacityGb">max_pool_provisioned_capacity_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.maxPoolProvisionedIops">max_pool_provisioned_iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.maxPoolProvisionedThroughput">max_pool_provisioned_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.minPoolProvisionedCapacityGb">min_pool_provisioned_capacity_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.minPoolProvisionedIops">min_pool_provisioned_iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.minPoolProvisionedThroughput">min_pool_provisioned_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.selfLinkWithId">self_link_with_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.supportedDiskTypes">supported_disk_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.storagePoolTypeInput">storage_pool_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.storagePoolType">storage_pool_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `deprecated`<sup>Required</sup> <a name="deprecated" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.deprecated"></a>

```python
deprecated: DataGoogleComputeStoragePoolTypesDeprecatedList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList">DataGoogleComputeStoragePoolTypesDeprecatedList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `max_pool_provisioned_capacity_gb`<sup>Required</sup> <a name="max_pool_provisioned_capacity_gb" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.maxPoolProvisionedCapacityGb"></a>

```python
max_pool_provisioned_capacity_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pool_provisioned_iops`<sup>Required</sup> <a name="max_pool_provisioned_iops" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.maxPoolProvisionedIops"></a>

```python
max_pool_provisioned_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pool_provisioned_throughput`<sup>Required</sup> <a name="max_pool_provisioned_throughput" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.maxPoolProvisionedThroughput"></a>

```python
max_pool_provisioned_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_pool_provisioned_capacity_gb`<sup>Required</sup> <a name="min_pool_provisioned_capacity_gb" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.minPoolProvisionedCapacityGb"></a>

```python
min_pool_provisioned_capacity_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_pool_provisioned_iops`<sup>Required</sup> <a name="min_pool_provisioned_iops" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.minPoolProvisionedIops"></a>

```python
min_pool_provisioned_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_pool_provisioned_throughput`<sup>Required</sup> <a name="min_pool_provisioned_throughput" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.minPoolProvisionedThroughput"></a>

```python
min_pool_provisioned_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `self_link_with_id`<sup>Required</sup> <a name="self_link_with_id" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.selfLinkWithId"></a>

```python
self_link_with_id: str
```

- *Type:* str

---

##### `supported_disk_types`<sup>Required</sup> <a name="supported_disk_types" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.supportedDiskTypes"></a>

```python
supported_disk_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `storage_pool_type_input`<sup>Optional</sup> <a name="storage_pool_type_input" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.storagePoolTypeInput"></a>

```python
storage_pool_type_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `storage_pool_type`<sup>Required</sup> <a name="storage_pool_type" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.storagePoolType"></a>

```python
storage_pool_type: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeStoragePoolTypesConfig <a name="DataGoogleComputeStoragePoolTypesConfig" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_storage_pool_types

dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  storage_pool_type: str,
  zone: str,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.storagePoolType">storage_pool_type</a></code> | <code>str</code> | Name of the storage pool type. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.zone">zone</a></code> | <code>str</code> | The name of the zone. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_storage_pool_types#project DataGoogleComputeStoragePoolTypes#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `storage_pool_type`<sup>Required</sup> <a name="storage_pool_type" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.storagePoolType"></a>

```python
storage_pool_type: str
```

- *Type:* str

Name of the storage pool type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_storage_pool_types#storage_pool_type DataGoogleComputeStoragePoolTypes#storage_pool_type}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

The name of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_storage_pool_types#zone DataGoogleComputeStoragePoolTypes#zone}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/compute_storage_pool_types#project DataGoogleComputeStoragePoolTypes#project}.

---

### DataGoogleComputeStoragePoolTypesDeprecated <a name="DataGoogleComputeStoragePoolTypesDeprecated" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecated"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecated.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_storage_pool_types

dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecated()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeStoragePoolTypesDeprecatedList <a name="DataGoogleComputeStoragePoolTypesDeprecatedList" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_storage_pool_types

dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeStoragePoolTypesDeprecatedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeStoragePoolTypesDeprecatedOutputReference <a name="DataGoogleComputeStoragePoolTypesDeprecatedOutputReference" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_storage_pool_types

dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.deleted">deleted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.deprecated">deprecated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.obsolete">obsolete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.replacement">replacement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecated">DataGoogleComputeStoragePoolTypesDeprecated</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.deleted"></a>

```python
deleted: str
```

- *Type:* str

---

##### `deprecated`<sup>Required</sup> <a name="deprecated" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.deprecated"></a>

```python
deprecated: str
```

- *Type:* str

---

##### `obsolete`<sup>Required</sup> <a name="obsolete" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.obsolete"></a>

```python
obsolete: str
```

- *Type:* str

---

##### `replacement`<sup>Required</sup> <a name="replacement" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.replacement"></a>

```python
replacement: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecatedOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeStoragePoolTypesDeprecated
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeStoragePoolTypes.DataGoogleComputeStoragePoolTypesDeprecated">DataGoogleComputeStoragePoolTypesDeprecated</a>

---



