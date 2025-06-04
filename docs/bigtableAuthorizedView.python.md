# `bigtableAuthorizedView` Submodule <a name="`bigtableAuthorizedView` Submodule" id="@cdktf/provider-google.bigtableAuthorizedView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigtableAuthorizedView <a name="BigtableAuthorizedView" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view google_bigtable_authorized_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_authorized_view

bigtableAuthorizedView.BigtableAuthorizedView(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_name: str,
  name: str,
  table_name: str,
  deletion_protection: str = None,
  id: str = None,
  project: str = None,
  subset_view: BigtableAuthorizedViewSubsetView = None,
  timeouts: BigtableAuthorizedViewTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.instanceName">instance_name</a></code> | <code>str</code> | The name of the Bigtable instance in which the authorized view belongs. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the authorized view. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.tableName">table_name</a></code> | <code>str</code> | The name of the Bigtable table in which the authorized view belongs. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>str</code> | A field to make the authorized view protected against data loss i.e. when set to PROTECTED, deleting the authorized view, the table containing the authorized view, and the instance containing the authorized view would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value. Note this field configs the deletion protection provided by the API in the backend, and should not be confused with Terraform-side deletion protection. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#id BigtableAuthorizedView#id}. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.subsetView">subset_view</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a></code> | subset_view block. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.instanceName"></a>

- *Type:* str

The name of the Bigtable instance in which the authorized view belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#instance_name BigtableAuthorizedView#instance_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.name"></a>

- *Type:* str

The name of the authorized view.

Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#name BigtableAuthorizedView#name}

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.tableName"></a>

- *Type:* str

The name of the Bigtable table in which the authorized view belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#table_name BigtableAuthorizedView#table_name}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.deletionProtection"></a>

- *Type:* str

A field to make the authorized view protected against data loss i.e. when set to PROTECTED, deleting the authorized view, the table containing the authorized view, and the instance containing the authorized view would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value. Note this field configs the deletion protection provided by the API in the backend, and should not be confused with Terraform-side deletion protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#deletion_protection BigtableAuthorizedView#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#id BigtableAuthorizedView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#project BigtableAuthorizedView#project}

---

##### `subset_view`<sup>Optional</sup> <a name="subset_view" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.subsetView"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a>

subset_view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#subset_view BigtableAuthorizedView#subset_view}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#timeouts BigtableAuthorizedView#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.putSubsetView">put_subset_view</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetSubsetView">reset_subset_view</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_subset_view` <a name="put_subset_view" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.putSubsetView"></a>

```python
def put_subset_view(
  family_subsets: typing.Union[IResolvable, typing.List[BigtableAuthorizedViewSubsetViewFamilySubsets]] = None,
  row_prefixes: typing.List[str] = None
) -> None
```

###### `family_subsets`<sup>Optional</sup> <a name="family_subsets" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.putSubsetView.parameter.familySubsets"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a>]]

family_subsets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#family_subsets BigtableAuthorizedView#family_subsets}

---

###### `row_prefixes`<sup>Optional</sup> <a name="row_prefixes" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.putSubsetView.parameter.rowPrefixes"></a>

- *Type:* typing.List[str]

Base64-encoded row prefixes to be included in the authorized view.

To provide access to all rows, include the empty string as a prefix ("").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#row_prefixes BigtableAuthorizedView#row_prefixes}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#create BigtableAuthorizedView#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#update BigtableAuthorizedView#update}.

---

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_subset_view` <a name="reset_subset_view" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetSubsetView"></a>

```python
def reset_subset_view() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BigtableAuthorizedView resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import bigtable_authorized_view

bigtableAuthorizedView.BigtableAuthorizedView.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import bigtable_authorized_view

bigtableAuthorizedView.BigtableAuthorizedView.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import bigtable_authorized_view

bigtableAuthorizedView.BigtableAuthorizedView.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import bigtable_authorized_view

bigtableAuthorizedView.BigtableAuthorizedView.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BigtableAuthorizedView resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BigtableAuthorizedView to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BigtableAuthorizedView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BigtableAuthorizedView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.subsetView">subset_view</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference">BigtableAuthorizedViewSubsetViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference">BigtableAuthorizedViewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.instanceNameInput">instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.subsetViewInput">subset_view_input</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.deletionProtection">deletion_protection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `subset_view`<sup>Required</sup> <a name="subset_view" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.subsetView"></a>

```python
subset_view: BigtableAuthorizedViewSubsetViewOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference">BigtableAuthorizedViewSubsetViewOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.timeouts"></a>

```python
timeouts: BigtableAuthorizedViewTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference">BigtableAuthorizedViewTimeoutsOutputReference</a>

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.deletionProtectionInput"></a>

```python
deletion_protection_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_name_input`<sup>Optional</sup> <a name="instance_name_input" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.instanceNameInput"></a>

```python
instance_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `subset_view_input`<sup>Optional</sup> <a name="subset_view_input" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.subsetViewInput"></a>

```python
subset_view_input: BigtableAuthorizedViewSubsetView
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a>

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BigtableAuthorizedViewTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a>]

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.deletionProtection"></a>

```python
deletion_protection: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BigtableAuthorizedViewConfig <a name="BigtableAuthorizedViewConfig" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_authorized_view

bigtableAuthorizedView.BigtableAuthorizedViewConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_name: str,
  name: str,
  table_name: str,
  deletion_protection: str = None,
  id: str = None,
  project: str = None,
  subset_view: BigtableAuthorizedViewSubsetView = None,
  timeouts: BigtableAuthorizedViewTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.instanceName">instance_name</a></code> | <code>str</code> | The name of the Bigtable instance in which the authorized view belongs. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.name">name</a></code> | <code>str</code> | The name of the authorized view. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.tableName">table_name</a></code> | <code>str</code> | The name of the Bigtable table in which the authorized view belongs. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.deletionProtection">deletion_protection</a></code> | <code>str</code> | A field to make the authorized view protected against data loss i.e. when set to PROTECTED, deleting the authorized view, the table containing the authorized view, and the instance containing the authorized view would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value. Note this field configs the deletion protection provided by the API in the backend, and should not be confused with Terraform-side deletion protection. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#id BigtableAuthorizedView#id}. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.subsetView">subset_view</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a></code> | subset_view block. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

The name of the Bigtable instance in which the authorized view belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#instance_name BigtableAuthorizedView#instance_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the authorized view.

Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#name BigtableAuthorizedView#name}

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

The name of the Bigtable table in which the authorized view belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#table_name BigtableAuthorizedView#table_name}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.deletionProtection"></a>

```python
deletion_protection: str
```

- *Type:* str

A field to make the authorized view protected against data loss i.e. when set to PROTECTED, deleting the authorized view, the table containing the authorized view, and the instance containing the authorized view would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value. Note this field configs the deletion protection provided by the API in the backend, and should not be confused with Terraform-side deletion protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#deletion_protection BigtableAuthorizedView#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#id BigtableAuthorizedView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#project BigtableAuthorizedView#project}

---

##### `subset_view`<sup>Optional</sup> <a name="subset_view" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.subsetView"></a>

```python
subset_view: BigtableAuthorizedViewSubsetView
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a>

subset_view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#subset_view BigtableAuthorizedView#subset_view}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.timeouts"></a>

```python
timeouts: BigtableAuthorizedViewTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#timeouts BigtableAuthorizedView#timeouts}

---

### BigtableAuthorizedViewSubsetView <a name="BigtableAuthorizedViewSubsetView" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_authorized_view

bigtableAuthorizedView.BigtableAuthorizedViewSubsetView(
  family_subsets: typing.Union[IResolvable, typing.List[BigtableAuthorizedViewSubsetViewFamilySubsets]] = None,
  row_prefixes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView.property.familySubsets">family_subsets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a>]]</code> | family_subsets block. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView.property.rowPrefixes">row_prefixes</a></code> | <code>typing.List[str]</code> | Base64-encoded row prefixes to be included in the authorized view. |

---

##### `family_subsets`<sup>Optional</sup> <a name="family_subsets" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView.property.familySubsets"></a>

```python
family_subsets: typing.Union[IResolvable, typing.List[BigtableAuthorizedViewSubsetViewFamilySubsets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a>]]

family_subsets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#family_subsets BigtableAuthorizedView#family_subsets}

---

##### `row_prefixes`<sup>Optional</sup> <a name="row_prefixes" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView.property.rowPrefixes"></a>

```python
row_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Base64-encoded row prefixes to be included in the authorized view.

To provide access to all rows, include the empty string as a prefix ("").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#row_prefixes BigtableAuthorizedView#row_prefixes}

---

### BigtableAuthorizedViewSubsetViewFamilySubsets <a name="BigtableAuthorizedViewSubsetViewFamilySubsets" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_authorized_view

bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets(
  family_name: str,
  qualifier_prefixes: typing.List[str] = None,
  qualifiers: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.property.familyName">family_name</a></code> | <code>str</code> | Name of the column family to be included in the authorized view. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.property.qualifierPrefixes">qualifier_prefixes</a></code> | <code>typing.List[str]</code> | Base64-encoded prefixes for qualifiers of the column family to be included in the authorized view. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.property.qualifiers">qualifiers</a></code> | <code>typing.List[str]</code> | Base64-encoded individual exact column qualifiers of the column family to be included in the authorized view. |

---

##### `family_name`<sup>Required</sup> <a name="family_name" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.property.familyName"></a>

```python
family_name: str
```

- *Type:* str

Name of the column family to be included in the authorized view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#family_name BigtableAuthorizedView#family_name}

---

##### `qualifier_prefixes`<sup>Optional</sup> <a name="qualifier_prefixes" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.property.qualifierPrefixes"></a>

```python
qualifier_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Base64-encoded prefixes for qualifiers of the column family to be included in the authorized view.

Every qualifier starting with one of these prefixes is included in the authorized view. To provide access to all qualifiers, include the empty string as a prefix ("").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#qualifier_prefixes BigtableAuthorizedView#qualifier_prefixes}

---

##### `qualifiers`<sup>Optional</sup> <a name="qualifiers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.property.qualifiers"></a>

```python
qualifiers: typing.List[str]
```

- *Type:* typing.List[str]

Base64-encoded individual exact column qualifiers of the column family to be included in the authorized view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#qualifiers BigtableAuthorizedView#qualifiers}

---

### BigtableAuthorizedViewTimeouts <a name="BigtableAuthorizedViewTimeouts" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_authorized_view

bigtableAuthorizedView.BigtableAuthorizedViewTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#create BigtableAuthorizedView#create}. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#update BigtableAuthorizedView#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#create BigtableAuthorizedView#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigtable_authorized_view#update BigtableAuthorizedView#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigtableAuthorizedViewSubsetViewFamilySubsetsList <a name="BigtableAuthorizedViewSubsetViewFamilySubsetsList" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_authorized_view

bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BigtableAuthorizedViewSubsetViewFamilySubsets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a>]]

---


### BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference <a name="BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_authorized_view

bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resetQualifierPrefixes">reset_qualifier_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resetQualifiers">reset_qualifiers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_qualifier_prefixes` <a name="reset_qualifier_prefixes" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resetQualifierPrefixes"></a>

```python
def reset_qualifier_prefixes() -> None
```

##### `reset_qualifiers` <a name="reset_qualifiers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resetQualifiers"></a>

```python
def reset_qualifiers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.familyNameInput">family_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifierPrefixesInput">qualifier_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifiersInput">qualifiers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.familyName">family_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifierPrefixes">qualifier_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifiers">qualifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `family_name_input`<sup>Optional</sup> <a name="family_name_input" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.familyNameInput"></a>

```python
family_name_input: str
```

- *Type:* str

---

##### `qualifier_prefixes_input`<sup>Optional</sup> <a name="qualifier_prefixes_input" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifierPrefixesInput"></a>

```python
qualifier_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `qualifiers_input`<sup>Optional</sup> <a name="qualifiers_input" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifiersInput"></a>

```python
qualifiers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `family_name`<sup>Required</sup> <a name="family_name" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.familyName"></a>

```python
family_name: str
```

- *Type:* str

---

##### `qualifier_prefixes`<sup>Required</sup> <a name="qualifier_prefixes" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifierPrefixes"></a>

```python
qualifier_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `qualifiers`<sup>Required</sup> <a name="qualifiers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifiers"></a>

```python
qualifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BigtableAuthorizedViewSubsetViewFamilySubsets]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a>]

---


### BigtableAuthorizedViewSubsetViewOutputReference <a name="BigtableAuthorizedViewSubsetViewOutputReference" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_authorized_view

bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.putFamilySubsets">put_family_subsets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resetFamilySubsets">reset_family_subsets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resetRowPrefixes">reset_row_prefixes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_family_subsets` <a name="put_family_subsets" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.putFamilySubsets"></a>

```python
def put_family_subsets(
  value: typing.Union[IResolvable, typing.List[BigtableAuthorizedViewSubsetViewFamilySubsets]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.putFamilySubsets.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a>]]

---

##### `reset_family_subsets` <a name="reset_family_subsets" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resetFamilySubsets"></a>

```python
def reset_family_subsets() -> None
```

##### `reset_row_prefixes` <a name="reset_row_prefixes" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resetRowPrefixes"></a>

```python
def reset_row_prefixes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.familySubsets">family_subsets</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList">BigtableAuthorizedViewSubsetViewFamilySubsetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.familySubsetsInput">family_subsets_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.rowPrefixesInput">row_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.rowPrefixes">row_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `family_subsets`<sup>Required</sup> <a name="family_subsets" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.familySubsets"></a>

```python
family_subsets: BigtableAuthorizedViewSubsetViewFamilySubsetsList
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList">BigtableAuthorizedViewSubsetViewFamilySubsetsList</a>

---

##### `family_subsets_input`<sup>Optional</sup> <a name="family_subsets_input" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.familySubsetsInput"></a>

```python
family_subsets_input: typing.Union[IResolvable, typing.List[BigtableAuthorizedViewSubsetViewFamilySubsets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a>]]

---

##### `row_prefixes_input`<sup>Optional</sup> <a name="row_prefixes_input" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.rowPrefixesInput"></a>

```python
row_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `row_prefixes`<sup>Required</sup> <a name="row_prefixes" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.rowPrefixes"></a>

```python
row_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.internalValue"></a>

```python
internal_value: BigtableAuthorizedViewSubsetView
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a>

---


### BigtableAuthorizedViewTimeoutsOutputReference <a name="BigtableAuthorizedViewTimeoutsOutputReference" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_authorized_view

bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BigtableAuthorizedViewTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a>]

---



