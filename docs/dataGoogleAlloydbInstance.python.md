# `dataGoogleAlloydbInstance` Submodule <a name="`dataGoogleAlloydbInstance` Submodule" id="@cdktf/provider-google.dataGoogleAlloydbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleAlloydbInstance <a name="DataGoogleAlloydbInstance" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance google_alloydb_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  instance_id: str,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | The ID of the alloydb cluster that the instance belongs to.'alloydb_cluster_id'. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | The ID of the alloydb instance. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance#id DataGoogleAlloydbInstance#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.location">location</a></code> | <code>str</code> | The canonical ID for the location. For example: "us-east1". |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.project">project</a></code> | <code>str</code> | Project ID of the project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.clusterId"></a>

- *Type:* str

The ID of the alloydb cluster that the instance belongs to.'alloydb_cluster_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance#cluster_id DataGoogleAlloydbInstance#cluster_id}

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.instanceId"></a>

- *Type:* str

The ID of the alloydb instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance#instance_id DataGoogleAlloydbInstance#instance_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance#id DataGoogleAlloydbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.location"></a>

- *Type:* str

The canonical ID for the location. For example: "us-east1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance#location DataGoogleAlloydbInstance#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.project"></a>

- *Type:* str

Project ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance#project DataGoogleAlloydbInstance#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleAlloydbInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleAlloydbInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleAlloydbInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleAlloydbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleAlloydbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.activationPolicy">activation_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.annotations">annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.availabilityType">availability_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.clientConnectionConfig">client_connection_config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList">DataGoogleAlloydbInstanceClientConnectionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.databaseFlags">database_flags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.gceZone">gce_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.machineConfig">machine_config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList">DataGoogleAlloydbInstanceMachineConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList">DataGoogleAlloydbInstanceNetworkConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.outboundPublicIpAddresses">outbound_public_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.pscInstanceConfig">psc_instance_config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList">DataGoogleAlloydbInstancePscInstanceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.publicIpAddress">public_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.queryInsightsConfig">query_insights_config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList">DataGoogleAlloydbInstanceQueryInsightsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.readPoolConfig">read_pool_config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList">DataGoogleAlloydbInstanceReadPoolConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `activation_policy`<sup>Required</sup> <a name="activation_policy" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.activationPolicy"></a>

```python
activation_policy: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.annotations"></a>

```python
annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `availability_type`<sup>Required</sup> <a name="availability_type" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.availabilityType"></a>

```python
availability_type: str
```

- *Type:* str

---

##### `client_connection_config`<sup>Required</sup> <a name="client_connection_config" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.clientConnectionConfig"></a>

```python
client_connection_config: DataGoogleAlloydbInstanceClientConnectionConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList">DataGoogleAlloydbInstanceClientConnectionConfigList</a>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `database_flags`<sup>Required</sup> <a name="database_flags" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.databaseFlags"></a>

```python
database_flags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `gce_zone`<sup>Required</sup> <a name="gce_zone" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.gceZone"></a>

```python
gce_zone: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `machine_config`<sup>Required</sup> <a name="machine_config" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.machineConfig"></a>

```python
machine_config: DataGoogleAlloydbInstanceMachineConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList">DataGoogleAlloydbInstanceMachineConfigList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.networkConfig"></a>

```python
network_config: DataGoogleAlloydbInstanceNetworkConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList">DataGoogleAlloydbInstanceNetworkConfigList</a>

---

##### `outbound_public_ip_addresses`<sup>Required</sup> <a name="outbound_public_ip_addresses" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.outboundPublicIpAddresses"></a>

```python
outbound_public_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `psc_instance_config`<sup>Required</sup> <a name="psc_instance_config" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.pscInstanceConfig"></a>

```python
psc_instance_config: DataGoogleAlloydbInstancePscInstanceConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList">DataGoogleAlloydbInstancePscInstanceConfigList</a>

---

##### `public_ip_address`<sup>Required</sup> <a name="public_ip_address" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.publicIpAddress"></a>

```python
public_ip_address: str
```

- *Type:* str

---

##### `query_insights_config`<sup>Required</sup> <a name="query_insights_config" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.queryInsightsConfig"></a>

```python
query_insights_config: DataGoogleAlloydbInstanceQueryInsightsConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList">DataGoogleAlloydbInstanceQueryInsightsConfigList</a>

---

##### `read_pool_config`<sup>Required</sup> <a name="read_pool_config" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.readPoolConfig"></a>

```python
read_pool_config: DataGoogleAlloydbInstanceReadPoolConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList">DataGoogleAlloydbInstanceReadPoolConfigList</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleAlloydbInstanceClientConnectionConfig <a name="DataGoogleAlloydbInstanceClientConnectionConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfig()
```


### DataGoogleAlloydbInstanceClientConnectionConfigSslConfig <a name="DataGoogleAlloydbInstanceClientConnectionConfigSslConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfig()
```


### DataGoogleAlloydbInstanceConfig <a name="DataGoogleAlloydbInstanceConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  instance_id: str,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | The ID of the alloydb cluster that the instance belongs to.'alloydb_cluster_id'. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.instanceId">instance_id</a></code> | <code>str</code> | The ID of the alloydb instance. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance#id DataGoogleAlloydbInstance#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.location">location</a></code> | <code>str</code> | The canonical ID for the location. For example: "us-east1". |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.project">project</a></code> | <code>str</code> | Project ID of the project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

The ID of the alloydb cluster that the instance belongs to.'alloydb_cluster_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance#cluster_id DataGoogleAlloydbInstance#cluster_id}

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

The ID of the alloydb instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance#instance_id DataGoogleAlloydbInstance#instance_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance#id DataGoogleAlloydbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The canonical ID for the location. For example: "us-east1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance#location DataGoogleAlloydbInstance#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Project ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/alloydb_instance#project DataGoogleAlloydbInstance#project}

---

### DataGoogleAlloydbInstanceMachineConfig <a name="DataGoogleAlloydbInstanceMachineConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfig()
```


### DataGoogleAlloydbInstanceNetworkConfig <a name="DataGoogleAlloydbInstanceNetworkConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfig()
```


### DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks <a name="DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks()
```


### DataGoogleAlloydbInstancePscInstanceConfig <a name="DataGoogleAlloydbInstancePscInstanceConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfig()
```


### DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections <a name="DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections()
```


### DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs <a name="DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs()
```


### DataGoogleAlloydbInstanceQueryInsightsConfig <a name="DataGoogleAlloydbInstanceQueryInsightsConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfig()
```


### DataGoogleAlloydbInstanceReadPoolConfig <a name="DataGoogleAlloydbInstanceReadPoolConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleAlloydbInstanceClientConnectionConfigList <a name="DataGoogleAlloydbInstanceClientConnectionConfigList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbInstanceClientConnectionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbInstanceClientConnectionConfigOutputReference <a name="DataGoogleAlloydbInstanceClientConnectionConfigOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.requireConnectors">require_connectors</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.sslConfig">ssl_config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList">DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfig">DataGoogleAlloydbInstanceClientConnectionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `require_connectors`<sup>Required</sup> <a name="require_connectors" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.requireConnectors"></a>

```python
require_connectors: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ssl_config`<sup>Required</sup> <a name="ssl_config" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.sslConfig"></a>

```python
ssl_config: DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList">DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbInstanceClientConnectionConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfig">DataGoogleAlloydbInstanceClientConnectionConfig</a>

---


### DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList <a name="DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference <a name="DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfig">DataGoogleAlloydbInstanceClientConnectionConfigSslConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbInstanceClientConnectionConfigSslConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfig">DataGoogleAlloydbInstanceClientConnectionConfigSslConfig</a>

---


### DataGoogleAlloydbInstanceMachineConfigList <a name="DataGoogleAlloydbInstanceMachineConfigList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbInstanceMachineConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbInstanceMachineConfigOutputReference <a name="DataGoogleAlloydbInstanceMachineConfigOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.cpuCount">cpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfig">DataGoogleAlloydbInstanceMachineConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_count`<sup>Required</sup> <a name="cpu_count" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.cpuCount"></a>

```python
cpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbInstanceMachineConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfig">DataGoogleAlloydbInstanceMachineConfig</a>

---


### DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList <a name="DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference <a name="DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.cidrRange">cidr_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks">DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_range`<sup>Required</sup> <a name="cidr_range" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.cidrRange"></a>

```python
cidr_range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks">DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>

---


### DataGoogleAlloydbInstanceNetworkConfigList <a name="DataGoogleAlloydbInstanceNetworkConfigList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbInstanceNetworkConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbInstanceNetworkConfigOutputReference <a name="DataGoogleAlloydbInstanceNetworkConfigOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.allocatedIpRangeOverride">allocated_ip_range_override</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.authorizedExternalNetworks">authorized_external_networks</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList">DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.enableOutboundPublicIp">enable_outbound_public_ip</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.enablePublicIp">enable_public_ip</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfig">DataGoogleAlloydbInstanceNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocated_ip_range_override`<sup>Required</sup> <a name="allocated_ip_range_override" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.allocatedIpRangeOverride"></a>

```python
allocated_ip_range_override: str
```

- *Type:* str

---

##### `authorized_external_networks`<sup>Required</sup> <a name="authorized_external_networks" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.authorizedExternalNetworks"></a>

```python
authorized_external_networks: DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList">DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList</a>

---

##### `enable_outbound_public_ip`<sup>Required</sup> <a name="enable_outbound_public_ip" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.enableOutboundPublicIp"></a>

```python
enable_outbound_public_ip: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enable_public_ip`<sup>Required</sup> <a name="enable_public_ip" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.enablePublicIp"></a>

```python
enable_public_ip: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbInstanceNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfig">DataGoogleAlloydbInstanceNetworkConfig</a>

---


### DataGoogleAlloydbInstancePscInstanceConfigList <a name="DataGoogleAlloydbInstancePscInstanceConfigList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbInstancePscInstanceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbInstancePscInstanceConfigOutputReference <a name="DataGoogleAlloydbInstancePscInstanceConfigOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.allowedConsumerProjects">allowed_consumer_projects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.pscAutoConnections">psc_auto_connections</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList">DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.pscDnsName">psc_dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.pscInterfaceConfigs">psc_interface_configs</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList">DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.serviceAttachmentLink">service_attachment_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfig">DataGoogleAlloydbInstancePscInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_consumer_projects`<sup>Required</sup> <a name="allowed_consumer_projects" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.allowedConsumerProjects"></a>

```python
allowed_consumer_projects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `psc_auto_connections`<sup>Required</sup> <a name="psc_auto_connections" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.pscAutoConnections"></a>

```python
psc_auto_connections: DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList">DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList</a>

---

##### `psc_dns_name`<sup>Required</sup> <a name="psc_dns_name" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.pscDnsName"></a>

```python
psc_dns_name: str
```

- *Type:* str

---

##### `psc_interface_configs`<sup>Required</sup> <a name="psc_interface_configs" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.pscInterfaceConfigs"></a>

```python
psc_interface_configs: DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList">DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList</a>

---

##### `service_attachment_link`<sup>Required</sup> <a name="service_attachment_link" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.serviceAttachmentLink"></a>

```python
service_attachment_link: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbInstancePscInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfig">DataGoogleAlloydbInstancePscInstanceConfig</a>

---


### DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList <a name="DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference <a name="DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerNetwork">consumer_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerNetworkStatus">consumer_network_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerProject">consumer_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections">DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumer_network`<sup>Required</sup> <a name="consumer_network" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerNetwork"></a>

```python
consumer_network: str
```

- *Type:* str

---

##### `consumer_network_status`<sup>Required</sup> <a name="consumer_network_status" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerNetworkStatus"></a>

```python
consumer_network_status: str
```

- *Type:* str

---

##### `consumer_project`<sup>Required</sup> <a name="consumer_project" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerProject"></a>

```python
consumer_project: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections">DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections</a>

---


### DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList <a name="DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference <a name="DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.networkAttachmentResource">network_attachment_resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs">DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_attachment_resource`<sup>Required</sup> <a name="network_attachment_resource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.networkAttachmentResource"></a>

```python
network_attachment_resource: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs">DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs</a>

---


### DataGoogleAlloydbInstanceQueryInsightsConfigList <a name="DataGoogleAlloydbInstanceQueryInsightsConfigList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference <a name="DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryPlansPerMinute">query_plans_per_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryStringLength">query_string_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordApplicationTags">record_application_tags</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordClientAddress">record_client_address</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfig">DataGoogleAlloydbInstanceQueryInsightsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_plans_per_minute`<sup>Required</sup> <a name="query_plans_per_minute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryPlansPerMinute"></a>

```python
query_plans_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query_string_length`<sup>Required</sup> <a name="query_string_length" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryStringLength"></a>

```python
query_string_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `record_application_tags`<sup>Required</sup> <a name="record_application_tags" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordApplicationTags"></a>

```python
record_application_tags: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `record_client_address`<sup>Required</sup> <a name="record_client_address" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordClientAddress"></a>

```python
record_client_address: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbInstanceQueryInsightsConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfig">DataGoogleAlloydbInstanceQueryInsightsConfig</a>

---


### DataGoogleAlloydbInstanceReadPoolConfigList <a name="DataGoogleAlloydbInstanceReadPoolConfigList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAlloydbInstanceReadPoolConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAlloydbInstanceReadPoolConfigOutputReference <a name="DataGoogleAlloydbInstanceReadPoolConfigOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_alloydb_instance

dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfig">DataGoogleAlloydbInstanceReadPoolConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAlloydbInstanceReadPoolConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfig">DataGoogleAlloydbInstanceReadPoolConfig</a>

---



