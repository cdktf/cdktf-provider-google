# `dataGoogleMemcacheInstance` Submodule <a name="`dataGoogleMemcacheInstance` Submodule" id="@cdktf/provider-google.dataGoogleMemcacheInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleMemcacheInstance <a name="DataGoogleMemcacheInstance" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/memcache_instance google_memcache_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstance(
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
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of the instance. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/memcache_instance#id DataGoogleMemcacheInstance#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/memcache_instance#project DataGoogleMemcacheInstance#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the Memcache instance. If it is not provided, the provider region is used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.name"></a>

- *Type:* str

The resource name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/memcache_instance#name DataGoogleMemcacheInstance#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/memcache_instance#id DataGoogleMemcacheInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/memcache_instance#project DataGoogleMemcacheInstance#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.region"></a>

- *Type:* str

The region of the Memcache instance. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/memcache_instance#region DataGoogleMemcacheInstance#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleMemcacheInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleMemcacheInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleMemcacheInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleMemcacheInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/memcache_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleMemcacheInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.authorizedNetwork">authorized_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.discoveryEndpoint">discovery_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.maintenancePolicy">maintenance_policy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList">DataGoogleMemcacheInstanceMaintenancePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.maintenanceSchedule">maintenance_schedule</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList">DataGoogleMemcacheInstanceMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.memcacheFullVersion">memcache_full_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.memcacheNodes">memcache_nodes</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList">DataGoogleMemcacheInstanceMemcacheNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.memcacheParameters">memcache_parameters</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList">DataGoogleMemcacheInstanceMemcacheParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.memcacheVersion">memcache_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.nodeConfig">node_config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList">DataGoogleMemcacheInstanceNodeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.reservedIpRangeId">reserved_ip_range_id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.zones">zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `authorized_network`<sup>Required</sup> <a name="authorized_network" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.authorizedNetwork"></a>

```python
authorized_network: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `discovery_endpoint`<sup>Required</sup> <a name="discovery_endpoint" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.discoveryEndpoint"></a>

```python
discovery_endpoint: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `maintenance_policy`<sup>Required</sup> <a name="maintenance_policy" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.maintenancePolicy"></a>

```python
maintenance_policy: DataGoogleMemcacheInstanceMaintenancePolicyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList">DataGoogleMemcacheInstanceMaintenancePolicyList</a>

---

##### `maintenance_schedule`<sup>Required</sup> <a name="maintenance_schedule" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.maintenanceSchedule"></a>

```python
maintenance_schedule: DataGoogleMemcacheInstanceMaintenanceScheduleList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList">DataGoogleMemcacheInstanceMaintenanceScheduleList</a>

---

##### `memcache_full_version`<sup>Required</sup> <a name="memcache_full_version" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.memcacheFullVersion"></a>

```python
memcache_full_version: str
```

- *Type:* str

---

##### `memcache_nodes`<sup>Required</sup> <a name="memcache_nodes" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.memcacheNodes"></a>

```python
memcache_nodes: DataGoogleMemcacheInstanceMemcacheNodesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList">DataGoogleMemcacheInstanceMemcacheNodesList</a>

---

##### `memcache_parameters`<sup>Required</sup> <a name="memcache_parameters" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.memcacheParameters"></a>

```python
memcache_parameters: DataGoogleMemcacheInstanceMemcacheParametersList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList">DataGoogleMemcacheInstanceMemcacheParametersList</a>

---

##### `memcache_version`<sup>Required</sup> <a name="memcache_version" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.memcacheVersion"></a>

```python
memcache_version: str
```

- *Type:* str

---

##### `node_config`<sup>Required</sup> <a name="node_config" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.nodeConfig"></a>

```python
node_config: DataGoogleMemcacheInstanceNodeConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList">DataGoogleMemcacheInstanceNodeConfigList</a>

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reserved_ip_range_id`<sup>Required</sup> <a name="reserved_ip_range_id" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.reservedIpRangeId"></a>

```python
reserved_ip_range_id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleMemcacheInstanceConfig <a name="DataGoogleMemcacheInstanceConfig" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig(
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
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.name">name</a></code> | <code>str</code> | The resource name of the instance. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/memcache_instance#id DataGoogleMemcacheInstance#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/memcache_instance#project DataGoogleMemcacheInstance#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.region">region</a></code> | <code>str</code> | The region of the Memcache instance. If it is not provided, the provider region is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/memcache_instance#name DataGoogleMemcacheInstance#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/memcache_instance#id DataGoogleMemcacheInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/memcache_instance#project DataGoogleMemcacheInstance#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the Memcache instance. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/memcache_instance#region DataGoogleMemcacheInstance#region}

---

### DataGoogleMemcacheInstanceMaintenancePolicy <a name="DataGoogleMemcacheInstanceMaintenancePolicy" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicy()
```


### DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow <a name="DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow()
```


### DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime <a name="DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime()
```


### DataGoogleMemcacheInstanceMaintenanceSchedule <a name="DataGoogleMemcacheInstanceMaintenanceSchedule" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceSchedule()
```


### DataGoogleMemcacheInstanceMemcacheNodes <a name="DataGoogleMemcacheInstanceMemcacheNodes" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodes.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodes()
```


### DataGoogleMemcacheInstanceMemcacheParameters <a name="DataGoogleMemcacheInstanceMemcacheParameters" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParameters()
```


### DataGoogleMemcacheInstanceNodeConfig <a name="DataGoogleMemcacheInstanceNodeConfig" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleMemcacheInstanceMaintenancePolicyList <a name="DataGoogleMemcacheInstanceMaintenancePolicyList" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleMemcacheInstanceMaintenancePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleMemcacheInstanceMaintenancePolicyOutputReference <a name="DataGoogleMemcacheInstanceMaintenancePolicyOutputReference" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow">weekly_maintenance_window</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList">DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicy">DataGoogleMemcacheInstanceMaintenancePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `weekly_maintenance_window`<sup>Required</sup> <a name="weekly_maintenance_window" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow"></a>

```python
weekly_maintenance_window: DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList">DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleMemcacheInstanceMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicy">DataGoogleMemcacheInstanceMaintenancePolicy</a>

---


### DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList <a name="DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference <a name="DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day">day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime">start_time</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList">DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day"></a>

```python
day: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime"></a>

```python
start_time: DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList">DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>

---


### DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList <a name="DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference <a name="DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


### DataGoogleMemcacheInstanceMaintenanceScheduleList <a name="DataGoogleMemcacheInstanceMaintenanceScheduleList" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference <a name="DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime">schedule_deadline_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceSchedule">DataGoogleMemcacheInstanceMaintenanceSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `schedule_deadline_time`<sup>Required</sup> <a name="schedule_deadline_time" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime"></a>

```python
schedule_deadline_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleMemcacheInstanceMaintenanceSchedule
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceSchedule">DataGoogleMemcacheInstanceMaintenanceSchedule</a>

---


### DataGoogleMemcacheInstanceMemcacheNodesList <a name="DataGoogleMemcacheInstanceMemcacheNodesList" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleMemcacheInstanceMemcacheNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleMemcacheInstanceMemcacheNodesOutputReference <a name="DataGoogleMemcacheInstanceMemcacheNodesOutputReference" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.nodeId">node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodes">DataGoogleMemcacheInstanceMemcacheNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `node_id`<sup>Required</sup> <a name="node_id" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleMemcacheInstanceMemcacheNodes
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodes">DataGoogleMemcacheInstanceMemcacheNodes</a>

---


### DataGoogleMemcacheInstanceMemcacheParametersList <a name="DataGoogleMemcacheInstanceMemcacheParametersList" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleMemcacheInstanceMemcacheParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleMemcacheInstanceMemcacheParametersOutputReference <a name="DataGoogleMemcacheInstanceMemcacheParametersOutputReference" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.property.params">params</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParameters">DataGoogleMemcacheInstanceMemcacheParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.property.params"></a>

```python
params: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleMemcacheInstanceMemcacheParameters
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParameters">DataGoogleMemcacheInstanceMemcacheParameters</a>

---


### DataGoogleMemcacheInstanceNodeConfigList <a name="DataGoogleMemcacheInstanceNodeConfigList" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleMemcacheInstanceNodeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleMemcacheInstanceNodeConfigOutputReference <a name="DataGoogleMemcacheInstanceNodeConfigOutputReference" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_memcache_instance

dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.property.cpuCount">cpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.property.memorySizeMb">memory_size_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfig">DataGoogleMemcacheInstanceNodeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_count`<sup>Required</sup> <a name="cpu_count" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.property.cpuCount"></a>

```python
cpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_size_mb`<sup>Required</sup> <a name="memory_size_mb" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.property.memorySizeMb"></a>

```python
memory_size_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleMemcacheInstanceNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfig">DataGoogleMemcacheInstanceNodeConfig</a>

---



