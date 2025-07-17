# `dataGoogleBackupDrBackupPlanAssociation` Submodule <a name="`dataGoogleBackupDrBackupPlanAssociation` Submodule" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBackupDrBackupPlanAssociation <a name="DataGoogleBackupDrBackupPlanAssociation" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/backup_dr_backup_plan_association google_backup_dr_backup_plan_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_backup_plan_association

dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_plan_association_id: str,
  location: str,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.backupPlanAssociationId">backup_plan_association_id</a></code> | <code>str</code> | The id of backupplan association. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the backupplan association. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/backup_dr_backup_plan_association#id DataGoogleBackupDrBackupPlanAssociation#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/backup_dr_backup_plan_association#project DataGoogleBackupDrBackupPlanAssociation#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_plan_association_id`<sup>Required</sup> <a name="backup_plan_association_id" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.backupPlanAssociationId"></a>

- *Type:* str

The id of backupplan association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/backup_dr_backup_plan_association#backup_plan_association_id DataGoogleBackupDrBackupPlanAssociation#backup_plan_association_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.location"></a>

- *Type:* str

The location for the backupplan association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/backup_dr_backup_plan_association#location DataGoogleBackupDrBackupPlanAssociation#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/backup_dr_backup_plan_association#id DataGoogleBackupDrBackupPlanAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/backup_dr_backup_plan_association#project DataGoogleBackupDrBackupPlanAssociation#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleBackupDrBackupPlanAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_backup_plan_association

dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_backup_plan_association

dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_backup_plan_association

dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_backup_plan_association

dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleBackupDrBackupPlanAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleBackupDrBackupPlanAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleBackupDrBackupPlanAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/backup_dr_backup_plan_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleBackupDrBackupPlanAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.backupPlan">backup_plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.dataSource">data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.lastSuccessfulBackupConsistencyTime">last_successful_backup_consistency_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.rulesConfigInfo">rules_config_info</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList">DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.backupPlanAssociationIdInput">backup_plan_association_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.backupPlanAssociationId">backup_plan_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `backup_plan`<sup>Required</sup> <a name="backup_plan" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.backupPlan"></a>

```python
backup_plan: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

---

##### `last_successful_backup_consistency_time`<sup>Required</sup> <a name="last_successful_backup_consistency_time" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.lastSuccessfulBackupConsistencyTime"></a>

```python
last_successful_backup_consistency_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `rules_config_info`<sup>Required</sup> <a name="rules_config_info" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.rulesConfigInfo"></a>

```python
rules_config_info: DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList">DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `backup_plan_association_id_input`<sup>Optional</sup> <a name="backup_plan_association_id_input" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.backupPlanAssociationIdInput"></a>

```python
backup_plan_association_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `backup_plan_association_id`<sup>Required</sup> <a name="backup_plan_association_id" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.backupPlanAssociationId"></a>

```python
backup_plan_association_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBackupDrBackupPlanAssociationConfig <a name="DataGoogleBackupDrBackupPlanAssociationConfig" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_backup_plan_association

dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_plan_association_id: str,
  location: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.backupPlanAssociationId">backup_plan_association_id</a></code> | <code>str</code> | The id of backupplan association. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.location">location</a></code> | <code>str</code> | The location for the backupplan association. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/backup_dr_backup_plan_association#id DataGoogleBackupDrBackupPlanAssociation#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/backup_dr_backup_plan_association#project DataGoogleBackupDrBackupPlanAssociation#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_plan_association_id`<sup>Required</sup> <a name="backup_plan_association_id" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.backupPlanAssociationId"></a>

```python
backup_plan_association_id: str
```

- *Type:* str

The id of backupplan association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/backup_dr_backup_plan_association#backup_plan_association_id DataGoogleBackupDrBackupPlanAssociation#backup_plan_association_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the backupplan association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/backup_dr_backup_plan_association#location DataGoogleBackupDrBackupPlanAssociation#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/backup_dr_backup_plan_association#id DataGoogleBackupDrBackupPlanAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/backup_dr_backup_plan_association#project DataGoogleBackupDrBackupPlanAssociation#project}.

---

### DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo <a name="DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_backup_plan_association

dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo()
```


### DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError <a name="DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_backup_plan_association

dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList <a name="DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_backup_plan_association

dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference <a name="DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_backup_plan_association

dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError">DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError">DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError</a>

---


### DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList <a name="DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_backup_plan_association

dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference <a name="DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_backup_dr_backup_plan_association

dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupError">last_backup_error</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList">DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupState">last_backup_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo">DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_backup_error`<sup>Required</sup> <a name="last_backup_error" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupError"></a>

```python
last_backup_error: DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList">DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList</a>

---

##### `last_backup_state`<sup>Required</sup> <a name="last_backup_state" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupState"></a>

```python
last_backup_state: str
```

- *Type:* str

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo">DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo</a>

---



