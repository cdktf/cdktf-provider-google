# `dataGoogleBackupDrManagementServer` Submodule <a name="`dataGoogleBackupDrManagementServer` Submodule" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBackupDrManagementServer <a name="DataGoogleBackupDrManagementServer" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/backup_dr_management_server google_backup_dr_management_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_management_server

dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer(
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
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the management server (management console). |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/backup_dr_management_server#id DataGoogleBackupDrManagementServer#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.location"></a>

- *Type:* str

The location for the management server (management console).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/backup_dr_management_server#location DataGoogleBackupDrManagementServer#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/backup_dr_management_server#id DataGoogleBackupDrManagementServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleBackupDrManagementServer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_management_server

dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_management_server

dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_management_server

dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_management_server

dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleBackupDrManagementServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleBackupDrManagementServer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleBackupDrManagementServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/backup_dr_management_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleBackupDrManagementServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.managementUri">management_uri</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList">DataGoogleBackupDrManagementServerManagementUriList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList">DataGoogleBackupDrManagementServerNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.oauth2ClientId">oauth2_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.location">location</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `management_uri`<sup>Required</sup> <a name="management_uri" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.managementUri"></a>

```python
management_uri: DataGoogleBackupDrManagementServerManagementUriList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList">DataGoogleBackupDrManagementServerManagementUriList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.networks"></a>

```python
networks: DataGoogleBackupDrManagementServerNetworksList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList">DataGoogleBackupDrManagementServerNetworksList</a>

---

##### `oauth2_client_id`<sup>Required</sup> <a name="oauth2_client_id" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.oauth2ClientId"></a>

```python
oauth2_client_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.location"></a>

```python
location: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBackupDrManagementServerConfig <a name="DataGoogleBackupDrManagementServerConfig" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_management_server

dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.location">location</a></code> | <code>str</code> | The location for the management server (management console). |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/backup_dr_management_server#id DataGoogleBackupDrManagementServer#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the management server (management console).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/backup_dr_management_server#location DataGoogleBackupDrManagementServer#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/backup_dr_management_server#id DataGoogleBackupDrManagementServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleBackupDrManagementServerManagementUri <a name="DataGoogleBackupDrManagementServerManagementUri" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUri.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_management_server

dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUri()
```


### DataGoogleBackupDrManagementServerNetworks <a name="DataGoogleBackupDrManagementServerNetworks" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworks.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_management_server

dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworks()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBackupDrManagementServerManagementUriList <a name="DataGoogleBackupDrManagementServerManagementUriList" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_management_server

dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBackupDrManagementServerManagementUriOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBackupDrManagementServerManagementUriOutputReference <a name="DataGoogleBackupDrManagementServerManagementUriOutputReference" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_management_server

dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.api">api</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.webUi">web_ui</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUri">DataGoogleBackupDrManagementServerManagementUri</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.api"></a>

```python
api: str
```

- *Type:* str

---

##### `web_ui`<sup>Required</sup> <a name="web_ui" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.webUi"></a>

```python
web_ui: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBackupDrManagementServerManagementUri
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUri">DataGoogleBackupDrManagementServerManagementUri</a>

---


### DataGoogleBackupDrManagementServerNetworksList <a name="DataGoogleBackupDrManagementServerNetworksList" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_management_server

dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBackupDrManagementServerNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBackupDrManagementServerNetworksOutputReference <a name="DataGoogleBackupDrManagementServerNetworksOutputReference" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_management_server

dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.peeringMode">peering_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworks">DataGoogleBackupDrManagementServerNetworks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `peering_mode`<sup>Required</sup> <a name="peering_mode" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.peeringMode"></a>

```python
peering_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBackupDrManagementServerNetworks
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworks">DataGoogleBackupDrManagementServerNetworks</a>

---



