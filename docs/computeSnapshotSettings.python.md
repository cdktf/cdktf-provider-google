# `computeSnapshotSettings` Submodule <a name="`computeSnapshotSettings` Submodule" id="@cdktf/provider-google.computeSnapshotSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSnapshotSettings <a name="ComputeSnapshotSettings" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings google_compute_snapshot_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_snapshot_settings

computeSnapshotSettings.ComputeSnapshotSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  storage_location: ComputeSnapshotSettingsStorageLocation,
  id: str = None,
  project: str = None,
  timeouts: ComputeSnapshotSettingsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer.parameter.storageLocation">storage_location</a></code> | <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocation">ComputeSnapshotSettingsStorageLocation</a></code> | storage_location block. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#id ComputeSnapshotSettings#id}. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#project ComputeSnapshotSettings#project}. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeouts">ComputeSnapshotSettingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer.parameter.storageLocation"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocation">ComputeSnapshotSettingsStorageLocation</a>

storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#storage_location ComputeSnapshotSettings#storage_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#id ComputeSnapshotSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#project ComputeSnapshotSettings#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeouts">ComputeSnapshotSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#timeouts ComputeSnapshotSettings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.putStorageLocation">put_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_storage_location` <a name="put_storage_location" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.putStorageLocation"></a>

```python
def put_storage_location(
  policy: str,
  locations: typing.Union[IResolvable, typing.List[ComputeSnapshotSettingsStorageLocationLocations]] = None
) -> None
```

###### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.putStorageLocation.parameter.policy"></a>

- *Type:* str

The chosen location policy Possible values: ["NEAREST_MULTI_REGION", "LOCAL_REGION", "SPECIFIC_LOCATIONS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#policy ComputeSnapshotSettings#policy}

---

###### `locations`<sup>Optional</sup> <a name="locations" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.putStorageLocation.parameter.locations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocations">ComputeSnapshotSettingsStorageLocationLocations</a>]]

locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#locations ComputeSnapshotSettings#locations}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#create ComputeSnapshotSettings#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#delete ComputeSnapshotSettings#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#update ComputeSnapshotSettings#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeSnapshotSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_snapshot_settings

computeSnapshotSettings.ComputeSnapshotSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_snapshot_settings

computeSnapshotSettings.ComputeSnapshotSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_snapshot_settings

computeSnapshotSettings.ComputeSnapshotSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_snapshot_settings

computeSnapshotSettings.ComputeSnapshotSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeSnapshotSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeSnapshotSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeSnapshotSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeSnapshotSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.storageLocation">storage_location</a></code> | <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference">ComputeSnapshotSettingsStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference">ComputeSnapshotSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.storageLocationInput">storage_location_input</a></code> | <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocation">ComputeSnapshotSettingsStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeouts">ComputeSnapshotSettingsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.storageLocation"></a>

```python
storage_location: ComputeSnapshotSettingsStorageLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference">ComputeSnapshotSettingsStorageLocationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.timeouts"></a>

```python
timeouts: ComputeSnapshotSettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference">ComputeSnapshotSettingsTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `storage_location_input`<sup>Optional</sup> <a name="storage_location_input" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.storageLocationInput"></a>

```python
storage_location_input: ComputeSnapshotSettingsStorageLocation
```

- *Type:* <a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocation">ComputeSnapshotSettingsStorageLocation</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeSnapshotSettingsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeouts">ComputeSnapshotSettingsTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSnapshotSettingsConfig <a name="ComputeSnapshotSettingsConfig" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_snapshot_settings

computeSnapshotSettings.ComputeSnapshotSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  storage_location: ComputeSnapshotSettingsStorageLocation,
  id: str = None,
  project: str = None,
  timeouts: ComputeSnapshotSettingsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsConfig.property.storageLocation">storage_location</a></code> | <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocation">ComputeSnapshotSettingsStorageLocation</a></code> | storage_location block. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#id ComputeSnapshotSettings#id}. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#project ComputeSnapshotSettings#project}. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeouts">ComputeSnapshotSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsConfig.property.storageLocation"></a>

```python
storage_location: ComputeSnapshotSettingsStorageLocation
```

- *Type:* <a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocation">ComputeSnapshotSettingsStorageLocation</a>

storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#storage_location ComputeSnapshotSettings#storage_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#id ComputeSnapshotSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#project ComputeSnapshotSettings#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsConfig.property.timeouts"></a>

```python
timeouts: ComputeSnapshotSettingsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeouts">ComputeSnapshotSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#timeouts ComputeSnapshotSettings#timeouts}

---

### ComputeSnapshotSettingsStorageLocation <a name="ComputeSnapshotSettingsStorageLocation" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_snapshot_settings

computeSnapshotSettings.ComputeSnapshotSettingsStorageLocation(
  policy: str,
  locations: typing.Union[IResolvable, typing.List[ComputeSnapshotSettingsStorageLocationLocations]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocation.property.policy">policy</a></code> | <code>str</code> | The chosen location policy Possible values: ["NEAREST_MULTI_REGION", "LOCAL_REGION", "SPECIFIC_LOCATIONS"]. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocation.property.locations">locations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocations">ComputeSnapshotSettingsStorageLocationLocations</a>]]</code> | locations block. |

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocation.property.policy"></a>

```python
policy: str
```

- *Type:* str

The chosen location policy Possible values: ["NEAREST_MULTI_REGION", "LOCAL_REGION", "SPECIFIC_LOCATIONS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#policy ComputeSnapshotSettings#policy}

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocation.property.locations"></a>

```python
locations: typing.Union[IResolvable, typing.List[ComputeSnapshotSettingsStorageLocationLocations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocations">ComputeSnapshotSettingsStorageLocationLocations</a>]]

locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#locations ComputeSnapshotSettings#locations}

---

### ComputeSnapshotSettingsStorageLocationLocations <a name="ComputeSnapshotSettingsStorageLocationLocations" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocations.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_snapshot_settings

computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocations(
  location: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocations.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#location ComputeSnapshotSettings#location}. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocations.property.name">name</a></code> | <code>str</code> | Name of the location. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocations.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#location ComputeSnapshotSettings#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocations.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the location.

It should be one of the Cloud Storage buckets.
Only one location can be specified. (should match location)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#name ComputeSnapshotSettings#name}

---

### ComputeSnapshotSettingsTimeouts <a name="ComputeSnapshotSettingsTimeouts" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_snapshot_settings

computeSnapshotSettings.ComputeSnapshotSettingsTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#create ComputeSnapshotSettings#create}. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#delete ComputeSnapshotSettings#delete}. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#update ComputeSnapshotSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#create ComputeSnapshotSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#delete ComputeSnapshotSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#update ComputeSnapshotSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeSnapshotSettingsStorageLocationLocationsList <a name="ComputeSnapshotSettingsStorageLocationLocationsList" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_snapshot_settings

computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeSnapshotSettingsStorageLocationLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocations">ComputeSnapshotSettingsStorageLocationLocations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeSnapshotSettingsStorageLocationLocations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocations">ComputeSnapshotSettingsStorageLocationLocations</a>]]

---


### ComputeSnapshotSettingsStorageLocationLocationsOutputReference <a name="ComputeSnapshotSettingsStorageLocationLocationsOutputReference" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_snapshot_settings

computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocations">ComputeSnapshotSettingsStorageLocationLocations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeSnapshotSettingsStorageLocationLocations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocations">ComputeSnapshotSettingsStorageLocationLocations</a>]

---


### ComputeSnapshotSettingsStorageLocationOutputReference <a name="ComputeSnapshotSettingsStorageLocationOutputReference" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_snapshot_settings

computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.putLocations">put_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.resetLocations">reset_locations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_locations` <a name="put_locations" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.putLocations"></a>

```python
def put_locations(
  value: typing.Union[IResolvable, typing.List[ComputeSnapshotSettingsStorageLocationLocations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.putLocations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocations">ComputeSnapshotSettingsStorageLocationLocations</a>]]

---

##### `reset_locations` <a name="reset_locations" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.resetLocations"></a>

```python
def reset_locations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.property.locations">locations</a></code> | <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList">ComputeSnapshotSettingsStorageLocationLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.property.locationsInput">locations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocations">ComputeSnapshotSettingsStorageLocationLocations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocation">ComputeSnapshotSettingsStorageLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.property.locations"></a>

```python
locations: ComputeSnapshotSettingsStorageLocationLocationsList
```

- *Type:* <a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocationsList">ComputeSnapshotSettingsStorageLocationLocationsList</a>

---

##### `locations_input`<sup>Optional</sup> <a name="locations_input" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.property.locationsInput"></a>

```python
locations_input: typing.Union[IResolvable, typing.List[ComputeSnapshotSettingsStorageLocationLocations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationLocations">ComputeSnapshotSettingsStorageLocationLocations</a>]]

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocationOutputReference.property.internalValue"></a>

```python
internal_value: ComputeSnapshotSettingsStorageLocation
```

- *Type:* <a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsStorageLocation">ComputeSnapshotSettingsStorageLocation</a>

---


### ComputeSnapshotSettingsTimeoutsOutputReference <a name="ComputeSnapshotSettingsTimeoutsOutputReference" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_snapshot_settings

computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeouts">ComputeSnapshotSettingsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeSnapshotSettingsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSnapshotSettings.ComputeSnapshotSettingsTimeouts">ComputeSnapshotSettingsTimeouts</a>]

---



