# `dataGoogleOracleDatabaseDbServers` Submodule <a name="`dataGoogleOracleDatabaseDbServers` Submodule" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseDbServers <a name="DataGoogleOracleDatabaseDbServers" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/oracle_database_db_servers google_oracle_database_db_servers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_db_servers

dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_exadata_infrastructure: str,
  location: str,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.cloudExadataInfrastructure">cloud_exadata_infrastructure</a></code> | <code>str</code> | exadata. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.location">location</a></code> | <code>str</code> | location. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/oracle_database_db_servers#id DataGoogleOracleDatabaseDbServers#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the dataset is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_exadata_infrastructure`<sup>Required</sup> <a name="cloud_exadata_infrastructure" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.cloudExadataInfrastructure"></a>

- *Type:* str

exadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/oracle_database_db_servers#cloud_exadata_infrastructure DataGoogleOracleDatabaseDbServers#cloud_exadata_infrastructure}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.location"></a>

- *Type:* str

location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/oracle_database_db_servers#location DataGoogleOracleDatabaseDbServers#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/oracle_database_db_servers#id DataGoogleOracleDatabaseDbServers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the dataset is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/oracle_database_db_servers#project DataGoogleOracleDatabaseDbServers#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleOracleDatabaseDbServers resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_db_servers

dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_db_servers

dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_db_servers

dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_db_servers

dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleOracleDatabaseDbServers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleOracleDatabaseDbServers to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleOracleDatabaseDbServers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/oracle_database_db_servers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseDbServers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.dbServers">db_servers</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList">DataGoogleOracleDatabaseDbServersDbServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.cloudExadataInfrastructureInput">cloud_exadata_infrastructure_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.cloudExadataInfrastructure">cloud_exadata_infrastructure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `db_servers`<sup>Required</sup> <a name="db_servers" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.dbServers"></a>

```python
db_servers: DataGoogleOracleDatabaseDbServersDbServersList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList">DataGoogleOracleDatabaseDbServersDbServersList</a>

---

##### `cloud_exadata_infrastructure_input`<sup>Optional</sup> <a name="cloud_exadata_infrastructure_input" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.cloudExadataInfrastructureInput"></a>

```python
cloud_exadata_infrastructure_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `cloud_exadata_infrastructure`<sup>Required</sup> <a name="cloud_exadata_infrastructure" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.cloudExadataInfrastructure"></a>

```python
cloud_exadata_infrastructure: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseDbServersConfig <a name="DataGoogleOracleDatabaseDbServersConfig" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_db_servers

dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_exadata_infrastructure: str,
  location: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.cloudExadataInfrastructure">cloud_exadata_infrastructure</a></code> | <code>str</code> | exadata. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.location">location</a></code> | <code>str</code> | location. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/oracle_database_db_servers#id DataGoogleOracleDatabaseDbServers#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the dataset is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_exadata_infrastructure`<sup>Required</sup> <a name="cloud_exadata_infrastructure" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.cloudExadataInfrastructure"></a>

```python
cloud_exadata_infrastructure: str
```

- *Type:* str

exadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/oracle_database_db_servers#cloud_exadata_infrastructure DataGoogleOracleDatabaseDbServers#cloud_exadata_infrastructure}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.location"></a>

```python
location: str
```

- *Type:* str

location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/oracle_database_db_servers#location DataGoogleOracleDatabaseDbServers#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/oracle_database_db_servers#id DataGoogleOracleDatabaseDbServers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the dataset is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/oracle_database_db_servers#project DataGoogleOracleDatabaseDbServers#project}

---

### DataGoogleOracleDatabaseDbServersDbServers <a name="DataGoogleOracleDatabaseDbServersDbServers" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServers.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_db_servers

dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServers()
```


### DataGoogleOracleDatabaseDbServersDbServersProperties <a name="DataGoogleOracleDatabaseDbServersDbServersProperties" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_db_servers

dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersProperties()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseDbServersDbServersList <a name="DataGoogleOracleDatabaseDbServersDbServersList" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_db_servers

dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleOracleDatabaseDbServersDbServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleOracleDatabaseDbServersDbServersOutputReference <a name="DataGoogleOracleDatabaseDbServersDbServersOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_db_servers

dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList">DataGoogleOracleDatabaseDbServersDbServersPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServers">DataGoogleOracleDatabaseDbServersDbServers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.property.properties"></a>

```python
properties: DataGoogleOracleDatabaseDbServersDbServersPropertiesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList">DataGoogleOracleDatabaseDbServersDbServersPropertiesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleOracleDatabaseDbServersDbServers
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServers">DataGoogleOracleDatabaseDbServersDbServers</a>

---


### DataGoogleOracleDatabaseDbServersDbServersPropertiesList <a name="DataGoogleOracleDatabaseDbServersDbServersPropertiesList" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_db_servers

dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference <a name="DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_oracle_database_db_servers

dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.dbNodeIds">db_node_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.dbNodeStorageSizeGb">db_node_storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.maxDbNodeStorageSizeGb">max_db_node_storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.maxMemorySizeGb">max_memory_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.maxOcpuCount">max_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.memorySizeGb">memory_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.ocpuCount">ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.vmCount">vm_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersProperties">DataGoogleOracleDatabaseDbServersDbServersProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_node_ids`<sup>Required</sup> <a name="db_node_ids" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.dbNodeIds"></a>

```python
db_node_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `db_node_storage_size_gb`<sup>Required</sup> <a name="db_node_storage_size_gb" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.dbNodeStorageSizeGb"></a>

```python
db_node_storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_db_node_storage_size_gb`<sup>Required</sup> <a name="max_db_node_storage_size_gb" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.maxDbNodeStorageSizeGb"></a>

```python
max_db_node_storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_memory_size_gb`<sup>Required</sup> <a name="max_memory_size_gb" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.maxMemorySizeGb"></a>

```python
max_memory_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_ocpu_count`<sup>Required</sup> <a name="max_ocpu_count" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.maxOcpuCount"></a>

```python
max_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_size_gb`<sup>Required</sup> <a name="memory_size_gb" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.memorySizeGb"></a>

```python
memory_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ocpu_count`<sup>Required</sup> <a name="ocpu_count" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.ocpuCount"></a>

```python
ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `vm_count`<sup>Required</sup> <a name="vm_count" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.vmCount"></a>

```python
vm_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleOracleDatabaseDbServersDbServersProperties
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseDbServers.DataGoogleOracleDatabaseDbServersDbServersProperties">DataGoogleOracleDatabaseDbServersDbServersProperties</a>

---



