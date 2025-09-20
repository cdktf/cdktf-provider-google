# `dataGoogleOracleDatabaseCloudVmClusters` Submodule <a name="`dataGoogleOracleDatabaseCloudVmClusters` Submodule" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseCloudVmClusters <a name="DataGoogleOracleDatabaseCloudVmClusters" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/oracle_database_cloud_vm_clusters google_oracle_database_cloud_vm_clusters}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_cloud_vm_clusters

dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters(
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
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.location">location</a></code> | <code>str</code> | location. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/oracle_database_cloud_vm_clusters#id DataGoogleOracleDatabaseCloudVmClusters#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the dataset is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.location"></a>

- *Type:* str

location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/oracle_database_cloud_vm_clusters#location DataGoogleOracleDatabaseCloudVmClusters#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/oracle_database_cloud_vm_clusters#id DataGoogleOracleDatabaseCloudVmClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the dataset is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/oracle_database_cloud_vm_clusters#project DataGoogleOracleDatabaseCloudVmClusters#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleOracleDatabaseCloudVmClusters resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_cloud_vm_clusters

dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_cloud_vm_clusters

dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_cloud_vm_clusters

dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_cloud_vm_clusters

dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleOracleDatabaseCloudVmClusters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleOracleDatabaseCloudVmClusters to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleOracleDatabaseCloudVmClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/oracle_database_cloud_vm_clusters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseCloudVmClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.cloudVmClusters">cloud_vm_clusters</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cloud_vm_clusters`<sup>Required</sup> <a name="cloud_vm_clusters" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.cloudVmClusters"></a>

```python
cloud_vm_clusters: DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClusters.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_cloud_vm_clusters

dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters()
```


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_cloud_vm_clusters

dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties()
```


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_cloud_vm_clusters

dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions()
```


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_cloud_vm_clusters

dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone()
```


### DataGoogleOracleDatabaseCloudVmClustersConfig <a name="DataGoogleOracleDatabaseCloudVmClustersConfig" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_cloud_vm_clusters

dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig(
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
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.location">location</a></code> | <code>str</code> | location. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/oracle_database_cloud_vm_clusters#id DataGoogleOracleDatabaseCloudVmClusters#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the dataset is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.location"></a>

```python
location: str
```

- *Type:* str

location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/oracle_database_cloud_vm_clusters#location DataGoogleOracleDatabaseCloudVmClusters#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/oracle_database_cloud_vm_clusters#id DataGoogleOracleDatabaseCloudVmClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the dataset is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/oracle_database_cloud_vm_clusters#project DataGoogleOracleDatabaseCloudVmClusters#project}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_cloud_vm_clusters

dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_cloud_vm_clusters

dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.backupOdbSubnet">backup_odb_subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.backupSubnetCidr">backup_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.cloudVmClusterId">cloud_vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.deletionProtection">deletion_protection</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.exadataInfrastructure">exadata_infrastructure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.gcpOracleZone">gcp_oracle_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.odbNetwork">odb_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.odbSubnet">odb_subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters">DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_odb_subnet`<sup>Required</sup> <a name="backup_odb_subnet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.backupOdbSubnet"></a>

```python
backup_odb_subnet: str
```

- *Type:* str

---

##### `backup_subnet_cidr`<sup>Required</sup> <a name="backup_subnet_cidr" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.backupSubnetCidr"></a>

```python
backup_subnet_cidr: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `cloud_vm_cluster_id`<sup>Required</sup> <a name="cloud_vm_cluster_id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.cloudVmClusterId"></a>

```python
cloud_vm_cluster_id: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.deletionProtection"></a>

```python
deletion_protection: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `exadata_infrastructure`<sup>Required</sup> <a name="exadata_infrastructure" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.exadataInfrastructure"></a>

```python
exadata_infrastructure: str
```

- *Type:* str

---

##### `gcp_oracle_zone`<sup>Required</sup> <a name="gcp_oracle_zone" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.gcpOracleZone"></a>

```python
gcp_oracle_zone: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `odb_network`<sup>Required</sup> <a name="odb_network" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.odbNetwork"></a>

```python
odb_network: str
```

- *Type:* str

---

##### `odb_subnet`<sup>Required</sup> <a name="odb_subnet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.odbSubnet"></a>

```python
odb_subnet: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.properties"></a>

```python
properties: DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters">DataGoogleOracleDatabaseCloudVmClustersCloudVmClusters</a>

---


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_cloud_vm_clusters

dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_cloud_vm_clusters

dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabled">diagnostics_events_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabled">health_monitoring_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabled">incident_logs_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `diagnostics_events_enabled`<sup>Required</sup> <a name="diagnostics_events_enabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabled"></a>

```python
diagnostics_events_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `health_monitoring_enabled`<sup>Required</sup> <a name="health_monitoring_enabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabled"></a>

```python
health_monitoring_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `incident_logs_enabled`<sup>Required</sup> <a name="incident_logs_enabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabled"></a>

```python
incident_logs_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptions</a>

---


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_cloud_vm_clusters

dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_cloud_vm_clusters

dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.dataStorageSizeTb">data_storage_size_tb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.dbNodeStorageSizeGb">db_node_storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.dbServerOcids">db_server_ocids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.diagnosticsDataCollectionOptions">diagnostics_data_collection_options</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.diskRedundancy">disk_redundancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.dnsListenerIp">dns_listener_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.giVersion">gi_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.hostnamePrefix">hostname_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.licenseType">license_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.localBackupEnabled">local_backup_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.memorySizeGb">memory_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.ociUrl">oci_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.ocpuCount">ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanDns">scan_dns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanDnsRecordId">scan_dns_record_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanIpIds">scan_ip_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanListenerPortTcpSsl">scan_listener_port_tcp_ssl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.sparseDiskgroupEnabled">sparse_diskgroup_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.storageSizeGb">storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.systemVersion">system_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.timeZone">time_zone</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_tb`<sup>Required</sup> <a name="data_storage_size_tb" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.dataStorageSizeTb"></a>

```python
data_storage_size_tb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_storage_size_gb`<sup>Required</sup> <a name="db_node_storage_size_gb" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.dbNodeStorageSizeGb"></a>

```python
db_node_storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_server_ocids`<sup>Required</sup> <a name="db_server_ocids" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.dbServerOcids"></a>

```python
db_server_ocids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `diagnostics_data_collection_options`<sup>Required</sup> <a name="diagnostics_data_collection_options" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.diagnosticsDataCollectionOptions"></a>

```python
diagnostics_data_collection_options: DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesDiagnosticsDataCollectionOptionsList</a>

---

##### `disk_redundancy`<sup>Required</sup> <a name="disk_redundancy" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.diskRedundancy"></a>

```python
disk_redundancy: str
```

- *Type:* str

---

##### `dns_listener_ip`<sup>Required</sup> <a name="dns_listener_ip" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.dnsListenerIp"></a>

```python
dns_listener_ip: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `gi_version`<sup>Required</sup> <a name="gi_version" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.giVersion"></a>

```python
gi_version: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `hostname_prefix`<sup>Required</sup> <a name="hostname_prefix" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.hostnamePrefix"></a>

```python
hostname_prefix: str
```

- *Type:* str

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

---

##### `local_backup_enabled`<sup>Required</sup> <a name="local_backup_enabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.localBackupEnabled"></a>

```python
local_backup_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `memory_size_gb`<sup>Required</sup> <a name="memory_size_gb" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.memorySizeGb"></a>

```python
memory_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `oci_url`<sup>Required</sup> <a name="oci_url" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.ociUrl"></a>

```python
oci_url: str
```

- *Type:* str

---

##### `ocpu_count`<sup>Required</sup> <a name="ocpu_count" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.ocpuCount"></a>

```python
ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_dns`<sup>Required</sup> <a name="scan_dns" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanDns"></a>

```python
scan_dns: str
```

- *Type:* str

---

##### `scan_dns_record_id`<sup>Required</sup> <a name="scan_dns_record_id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanDnsRecordId"></a>

```python
scan_dns_record_id: str
```

- *Type:* str

---

##### `scan_ip_ids`<sup>Required</sup> <a name="scan_ip_ids" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanIpIds"></a>

```python
scan_ip_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scan_listener_port_tcp`<sup>Required</sup> <a name="scan_listener_port_tcp" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanListenerPortTcp"></a>

```python
scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tcp_ssl`<sup>Required</sup> <a name="scan_listener_port_tcp_ssl" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.scanListenerPortTcpSsl"></a>

```python
scan_listener_port_tcp_ssl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `sparse_diskgroup_enabled`<sup>Required</sup> <a name="sparse_diskgroup_enabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.sparseDiskgroupEnabled"></a>

```python
sparse_diskgroup_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_size_gb`<sup>Required</sup> <a name="storage_size_gb" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.storageSizeGb"></a>

```python
storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `system_version`<sup>Required</sup> <a name="system_version" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.systemVersion"></a>

```python
system_version: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.timeZone"></a>

```python
time_zone: DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersProperties</a>

---


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_cloud_vm_clusters

dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference <a name="DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_cloud_vm_clusters

dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZoneOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudVmClusters.DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone">DataGoogleOracleDatabaseCloudVmClustersCloudVmClustersPropertiesTimeZone</a>

---



