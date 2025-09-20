# `dataGoogleBackupDrDataSource` Submodule <a name="`dataGoogleBackupDrDataSource` Submodule" id="@cdktf/provider-google.dataGoogleBackupDrDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBackupDrDataSource <a name="DataGoogleBackupDrDataSource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_data_source google_backup_dr_data_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_data_source

dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_vault_id: str,
  data_source_id: str,
  location: str,
  project: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.backupVaultId">backup_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_data_source#backup_vault_id DataGoogleBackupDrDataSource#backup_vault_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.dataSourceId">data_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_data_source#data_source_id DataGoogleBackupDrDataSource#data_source_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_data_source#location DataGoogleBackupDrDataSource#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_data_source#project DataGoogleBackupDrDataSource#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_data_source#id DataGoogleBackupDrDataSource#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_vault_id`<sup>Required</sup> <a name="backup_vault_id" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.backupVaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_data_source#backup_vault_id DataGoogleBackupDrDataSource#backup_vault_id}.

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.dataSourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_data_source#data_source_id DataGoogleBackupDrDataSource#data_source_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_data_source#location DataGoogleBackupDrDataSource#location}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_data_source#project DataGoogleBackupDrDataSource#project}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_data_source#id DataGoogleBackupDrDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleBackupDrDataSource resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_data_source

dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_data_source

dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_data_source

dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_data_source

dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleBackupDrDataSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleBackupDrDataSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleBackupDrDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleBackupDrDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.backupConfigInfo">backup_config_info</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList">DataGoogleBackupDrDataSourceBackupConfigInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.backupCount">backup_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.configState">config_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dataSourceBackupApplianceApplication">data_source_backup_appliance_application</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList">DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dataSourceGcpResource">data_source_gcp_resource</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList">DataGoogleBackupDrDataSourceDataSourceGcpResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.totalStoredBytes">total_stored_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.backupVaultIdInput">backup_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dataSourceIdInput">data_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.backupVaultId">backup_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dataSourceId">data_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `backup_config_info`<sup>Required</sup> <a name="backup_config_info" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.backupConfigInfo"></a>

```python
backup_config_info: DataGoogleBackupDrDataSourceBackupConfigInfoList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList">DataGoogleBackupDrDataSourceBackupConfigInfoList</a>

---

##### `backup_count`<sup>Required</sup> <a name="backup_count" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.backupCount"></a>

```python
backup_count: str
```

- *Type:* str

---

##### `config_state`<sup>Required</sup> <a name="config_state" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.configState"></a>

```python
config_state: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `data_source_backup_appliance_application`<sup>Required</sup> <a name="data_source_backup_appliance_application" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dataSourceBackupApplianceApplication"></a>

```python
data_source_backup_appliance_application: DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList">DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList</a>

---

##### `data_source_gcp_resource`<sup>Required</sup> <a name="data_source_gcp_resource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dataSourceGcpResource"></a>

```python
data_source_gcp_resource: DataGoogleBackupDrDataSourceDataSourceGcpResourceList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList">DataGoogleBackupDrDataSourceDataSourceGcpResourceList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `total_stored_bytes`<sup>Required</sup> <a name="total_stored_bytes" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.totalStoredBytes"></a>

```python
total_stored_bytes: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `backup_vault_id_input`<sup>Optional</sup> <a name="backup_vault_id_input" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.backupVaultIdInput"></a>

```python
backup_vault_id_input: str
```

- *Type:* str

---

##### `data_source_id_input`<sup>Optional</sup> <a name="data_source_id_input" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dataSourceIdInput"></a>

```python
data_source_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `backup_vault_id`<sup>Required</sup> <a name="backup_vault_id" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.backupVaultId"></a>

```python
backup_vault_id: str
```

- *Type:* str

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBackupDrDataSourceBackupConfigInfo <a name="DataGoogleBackupDrDataSourceBackupConfigInfo" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_data_source

dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfo()
```


### DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig <a name="DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_data_source

dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig()
```


### DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig <a name="DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_data_source

dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig()
```


### DataGoogleBackupDrDataSourceConfig <a name="DataGoogleBackupDrDataSourceConfig" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_data_source

dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_vault_id: str,
  data_source_id: str,
  location: str,
  project: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.backupVaultId">backup_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_data_source#backup_vault_id DataGoogleBackupDrDataSource#backup_vault_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.dataSourceId">data_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_data_source#data_source_id DataGoogleBackupDrDataSource#data_source_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_data_source#location DataGoogleBackupDrDataSource#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_data_source#project DataGoogleBackupDrDataSource#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_data_source#id DataGoogleBackupDrDataSource#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_vault_id`<sup>Required</sup> <a name="backup_vault_id" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.backupVaultId"></a>

```python
backup_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_data_source#backup_vault_id DataGoogleBackupDrDataSource#backup_vault_id}.

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_data_source#data_source_id DataGoogleBackupDrDataSource#data_source_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_data_source#location DataGoogleBackupDrDataSource#location}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_data_source#project DataGoogleBackupDrDataSource#project}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/backup_dr_data_source#id DataGoogleBackupDrDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication <a name="DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_data_source

dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication()
```


### DataGoogleBackupDrDataSourceDataSourceGcpResource <a name="DataGoogleBackupDrDataSourceDataSourceGcpResource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_data_source

dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResource()
```


### DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties <a name="DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_data_source

dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList <a name="DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_data_source

dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference <a name="DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_data_source

dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.applicationName">application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceId">backup_appliance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceName">backup_appliance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slaId">sla_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slpName">slp_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.sltName">slt_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig">DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

---

##### `backup_appliance_id`<sup>Required</sup> <a name="backup_appliance_id" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceId"></a>

```python
backup_appliance_id: str
```

- *Type:* str

---

##### `backup_appliance_name`<sup>Required</sup> <a name="backup_appliance_name" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.backupApplianceName"></a>

```python
backup_appliance_name: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `sla_id`<sup>Required</sup> <a name="sla_id" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slaId"></a>

```python
sla_id: str
```

- *Type:* str

---

##### `slp_name`<sup>Required</sup> <a name="slp_name" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.slpName"></a>

```python
slp_name: str
```

- *Type:* str

---

##### `slt_name`<sup>Required</sup> <a name="slt_name" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.sltName"></a>

```python
slt_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig">DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfig</a>

---


### DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList <a name="DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_data_source

dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference <a name="DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_data_source

dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlan">backup_plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanAssociation">backup_plan_association</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanDescription">backup_plan_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanRules">backup_plan_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig">DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_plan`<sup>Required</sup> <a name="backup_plan" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlan"></a>

```python
backup_plan: str
```

- *Type:* str

---

##### `backup_plan_association`<sup>Required</sup> <a name="backup_plan_association" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanAssociation"></a>

```python
backup_plan_association: str
```

- *Type:* str

---

##### `backup_plan_description`<sup>Required</sup> <a name="backup_plan_description" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanDescription"></a>

```python
backup_plan_description: str
```

- *Type:* str

---

##### `backup_plan_rules`<sup>Required</sup> <a name="backup_plan_rules" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.backupPlanRules"></a>

```python
backup_plan_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig">DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfig</a>

---


### DataGoogleBackupDrDataSourceBackupConfigInfoList <a name="DataGoogleBackupDrDataSourceBackupConfigInfoList" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_data_source

dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference <a name="DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_data_source

dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.backupApplianceBackupConfig">backup_appliance_backup_config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList">DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.gcpBackupConfig">gcp_backup_config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList">DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.lastBackupError">last_backup_error</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.lastBackupState">last_backup_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.lastSuccessfulBackupConsistencyTime">last_successful_backup_consistency_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfo">DataGoogleBackupDrDataSourceBackupConfigInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_appliance_backup_config`<sup>Required</sup> <a name="backup_appliance_backup_config" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.backupApplianceBackupConfig"></a>

```python
backup_appliance_backup_config: DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList">DataGoogleBackupDrDataSourceBackupConfigInfoBackupApplianceBackupConfigList</a>

---

##### `gcp_backup_config`<sup>Required</sup> <a name="gcp_backup_config" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.gcpBackupConfig"></a>

```python
gcp_backup_config: DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList">DataGoogleBackupDrDataSourceBackupConfigInfoGcpBackupConfigList</a>

---

##### `last_backup_error`<sup>Required</sup> <a name="last_backup_error" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.lastBackupError"></a>

```python
last_backup_error: StringMap
```

- *Type:* cdktf.StringMap

---

##### `last_backup_state`<sup>Required</sup> <a name="last_backup_state" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.lastBackupState"></a>

```python
last_backup_state: str
```

- *Type:* str

---

##### `last_successful_backup_consistency_time`<sup>Required</sup> <a name="last_successful_backup_consistency_time" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.lastSuccessfulBackupConsistencyTime"></a>

```python
last_successful_backup_consistency_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBackupDrDataSourceBackupConfigInfo
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceBackupConfigInfo">DataGoogleBackupDrDataSourceBackupConfigInfo</a>

---


### DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList <a name="DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_data_source

dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference <a name="DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_data_source

dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.applianceId">appliance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.applicationName">application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.backupAppliance">backup_appliance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.hostId">host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication">DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `appliance_id`<sup>Required</sup> <a name="appliance_id" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.applianceId"></a>

```python
appliance_id: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

---

##### `backup_appliance`<sup>Required</sup> <a name="backup_appliance" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.backupAppliance"></a>

```python
backup_appliance: str
```

- *Type:* str

---

##### `host_id`<sup>Required</sup> <a name="host_id" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplicationOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication">DataGoogleBackupDrDataSourceDataSourceBackupApplianceApplication</a>

---


### DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList <a name="DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_data_source

dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference <a name="DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_data_source

dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskCount">total_disk_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskSizeGb">total_disk_size_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties">DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `total_disk_count`<sup>Required</sup> <a name="total_disk_count" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskCount"></a>

```python
total_disk_count: str
```

- *Type:* str

---

##### `total_disk_size_gb`<sup>Required</sup> <a name="total_disk_size_gb" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.totalDiskSizeGb"></a>

```python
total_disk_size_gb: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties">DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourceProperties</a>

---


### DataGoogleBackupDrDataSourceDataSourceGcpResourceList <a name="DataGoogleBackupDrDataSourceDataSourceGcpResourceList" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_data_source

dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference <a name="DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_data_source

dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.computeInstanceDataSourceProperties">compute_instance_data_source_properties</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList">DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.gcpResourcename">gcp_resourcename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResource">DataGoogleBackupDrDataSourceDataSourceGcpResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_instance_data_source_properties`<sup>Required</sup> <a name="compute_instance_data_source_properties" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.computeInstanceDataSourceProperties"></a>

```python
compute_instance_data_source_properties: DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList">DataGoogleBackupDrDataSourceDataSourceGcpResourceComputeInstanceDataSourcePropertiesList</a>

---

##### `gcp_resourcename`<sup>Required</sup> <a name="gcp_resourcename" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.gcpResourcename"></a>

```python
gcp_resourcename: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResourceOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBackupDrDataSourceDataSourceGcpResource
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrDataSource.DataGoogleBackupDrDataSourceDataSourceGcpResource">DataGoogleBackupDrDataSourceDataSourceGcpResource</a>

---



