# `storageControlProjectIntelligenceConfig` Submodule <a name="`storageControlProjectIntelligenceConfig` Submodule" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageControlProjectIntelligenceConfig <a name="StorageControlProjectIntelligenceConfig" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config google_storage_control_project_intelligence_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_control_project_intelligence_config

storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig(
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
  edition_config: str = None,
  filter: StorageControlProjectIntelligenceConfigFilter = None,
  id: str = None,
  timeouts: StorageControlProjectIntelligenceConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | Identifier of the GCP project. For GCP project, this field can be project name or project number. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.editionConfig">edition_config</a></code> | <code>str</code> | Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, TRIAL, DISABLED and STANDARD. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilter">StorageControlProjectIntelligenceConfigFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#id StorageControlProjectIntelligenceConfig#id}. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeouts">StorageControlProjectIntelligenceConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.name"></a>

- *Type:* str

Identifier of the GCP project. For GCP project, this field can be project name or project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#name StorageControlProjectIntelligenceConfig#name}

---

##### `edition_config`<sup>Optional</sup> <a name="edition_config" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.editionConfig"></a>

- *Type:* str

Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, TRIAL, DISABLED and STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#edition_config StorageControlProjectIntelligenceConfig#edition_config}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilter">StorageControlProjectIntelligenceConfigFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#filter StorageControlProjectIntelligenceConfig#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#id StorageControlProjectIntelligenceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeouts">StorageControlProjectIntelligenceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#timeouts StorageControlProjectIntelligenceConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.resetEditionConfig">reset_edition_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.putFilter"></a>

```python
def put_filter(
  excluded_cloud_storage_buckets: StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets = None,
  excluded_cloud_storage_locations: StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations = None,
  included_cloud_storage_buckets: StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets = None,
  included_cloud_storage_locations: StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations = None
) -> None
```

###### `excluded_cloud_storage_buckets`<sup>Optional</sup> <a name="excluded_cloud_storage_buckets" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.putFilter.parameter.excludedCloudStorageBuckets"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

excluded_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#excluded_cloud_storage_buckets StorageControlProjectIntelligenceConfig#excluded_cloud_storage_buckets}

---

###### `excluded_cloud_storage_locations`<sup>Optional</sup> <a name="excluded_cloud_storage_locations" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.putFilter.parameter.excludedCloudStorageLocations"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations</a>

excluded_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#excluded_cloud_storage_locations StorageControlProjectIntelligenceConfig#excluded_cloud_storage_locations}

---

###### `included_cloud_storage_buckets`<sup>Optional</sup> <a name="included_cloud_storage_buckets" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.putFilter.parameter.includedCloudStorageBuckets"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

included_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#included_cloud_storage_buckets StorageControlProjectIntelligenceConfig#included_cloud_storage_buckets}

---

###### `included_cloud_storage_locations`<sup>Optional</sup> <a name="included_cloud_storage_locations" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.putFilter.parameter.includedCloudStorageLocations"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations</a>

included_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#included_cloud_storage_locations StorageControlProjectIntelligenceConfig#included_cloud_storage_locations}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#create StorageControlProjectIntelligenceConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#delete StorageControlProjectIntelligenceConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#update StorageControlProjectIntelligenceConfig#update}.

---

##### `reset_edition_config` <a name="reset_edition_config" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.resetEditionConfig"></a>

```python
def reset_edition_config() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StorageControlProjectIntelligenceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import storage_control_project_intelligence_config

storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import storage_control_project_intelligence_config

storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import storage_control_project_intelligence_config

storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import storage_control_project_intelligence_config

storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StorageControlProjectIntelligenceConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StorageControlProjectIntelligenceConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StorageControlProjectIntelligenceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageControlProjectIntelligenceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.effectiveIntelligenceConfig">effective_intelligence_config</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList">StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference">StorageControlProjectIntelligenceConfigFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference">StorageControlProjectIntelligenceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.trialConfig">trial_config</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList">StorageControlProjectIntelligenceConfigTrialConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.editionConfigInput">edition_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.filterInput">filter_input</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilter">StorageControlProjectIntelligenceConfigFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeouts">StorageControlProjectIntelligenceConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.editionConfig">edition_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `effective_intelligence_config`<sup>Required</sup> <a name="effective_intelligence_config" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.effectiveIntelligenceConfig"></a>

```python
effective_intelligence_config: StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList
```

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList">StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.filter"></a>

```python
filter: StorageControlProjectIntelligenceConfigFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference">StorageControlProjectIntelligenceConfigFilterOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.timeouts"></a>

```python
timeouts: StorageControlProjectIntelligenceConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference">StorageControlProjectIntelligenceConfigTimeoutsOutputReference</a>

---

##### `trial_config`<sup>Required</sup> <a name="trial_config" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.trialConfig"></a>

```python
trial_config: StorageControlProjectIntelligenceConfigTrialConfigList
```

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList">StorageControlProjectIntelligenceConfigTrialConfigList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `edition_config_input`<sup>Optional</sup> <a name="edition_config_input" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.editionConfigInput"></a>

```python
edition_config_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.filterInput"></a>

```python
filter_input: StorageControlProjectIntelligenceConfigFilter
```

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilter">StorageControlProjectIntelligenceConfigFilter</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StorageControlProjectIntelligenceConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeouts">StorageControlProjectIntelligenceConfigTimeouts</a>]

---

##### `edition_config`<sup>Required</sup> <a name="edition_config" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.editionConfig"></a>

```python
edition_config: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageControlProjectIntelligenceConfigConfig <a name="StorageControlProjectIntelligenceConfigConfig" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_control_project_intelligence_config

storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  edition_config: str = None,
  filter: StorageControlProjectIntelligenceConfigFilter = None,
  id: str = None,
  timeouts: StorageControlProjectIntelligenceConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig.property.name">name</a></code> | <code>str</code> | Identifier of the GCP project. For GCP project, this field can be project name or project number. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig.property.editionConfig">edition_config</a></code> | <code>str</code> | Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, TRIAL, DISABLED and STANDARD. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilter">StorageControlProjectIntelligenceConfigFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#id StorageControlProjectIntelligenceConfig#id}. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeouts">StorageControlProjectIntelligenceConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Identifier of the GCP project. For GCP project, this field can be project name or project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#name StorageControlProjectIntelligenceConfig#name}

---

##### `edition_config`<sup>Optional</sup> <a name="edition_config" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig.property.editionConfig"></a>

```python
edition_config: str
```

- *Type:* str

Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, TRIAL, DISABLED and STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#edition_config StorageControlProjectIntelligenceConfig#edition_config}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig.property.filter"></a>

```python
filter: StorageControlProjectIntelligenceConfigFilter
```

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilter">StorageControlProjectIntelligenceConfigFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#filter StorageControlProjectIntelligenceConfig#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#id StorageControlProjectIntelligenceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigConfig.property.timeouts"></a>

```python
timeouts: StorageControlProjectIntelligenceConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeouts">StorageControlProjectIntelligenceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#timeouts StorageControlProjectIntelligenceConfig#timeouts}

---

### StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig <a name="StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_control_project_intelligence_config

storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig()
```


### StorageControlProjectIntelligenceConfigFilter <a name="StorageControlProjectIntelligenceConfigFilter" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_control_project_intelligence_config

storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilter(
  excluded_cloud_storage_buckets: StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets = None,
  excluded_cloud_storage_locations: StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations = None,
  included_cloud_storage_buckets: StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets = None,
  included_cloud_storage_locations: StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilter.property.excludedCloudStorageBuckets">excluded_cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | excluded_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilter.property.excludedCloudStorageLocations">excluded_cloud_storage_locations</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | excluded_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilter.property.includedCloudStorageBuckets">included_cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | included_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilter.property.includedCloudStorageLocations">included_cloud_storage_locations</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | included_cloud_storage_locations block. |

---

##### `excluded_cloud_storage_buckets`<sup>Optional</sup> <a name="excluded_cloud_storage_buckets" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilter.property.excludedCloudStorageBuckets"></a>

```python
excluded_cloud_storage_buckets: StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

excluded_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#excluded_cloud_storage_buckets StorageControlProjectIntelligenceConfig#excluded_cloud_storage_buckets}

---

##### `excluded_cloud_storage_locations`<sup>Optional</sup> <a name="excluded_cloud_storage_locations" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilter.property.excludedCloudStorageLocations"></a>

```python
excluded_cloud_storage_locations: StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations</a>

excluded_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#excluded_cloud_storage_locations StorageControlProjectIntelligenceConfig#excluded_cloud_storage_locations}

---

##### `included_cloud_storage_buckets`<sup>Optional</sup> <a name="included_cloud_storage_buckets" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilter.property.includedCloudStorageBuckets"></a>

```python
included_cloud_storage_buckets: StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

included_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#included_cloud_storage_buckets StorageControlProjectIntelligenceConfig#included_cloud_storage_buckets}

---

##### `included_cloud_storage_locations`<sup>Optional</sup> <a name="included_cloud_storage_locations" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilter.property.includedCloudStorageLocations"></a>

```python
included_cloud_storage_locations: StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations</a>

included_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#included_cloud_storage_locations StorageControlProjectIntelligenceConfig#included_cloud_storage_locations}

---

### StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets <a name="StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_control_project_intelligence_config

storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets(
  bucket_id_regexes: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets.property.bucketIdRegexes">bucket_id_regexes</a></code> | <code>typing.List[str]</code> | List of bucket id regexes to exclude in the storage intelligence plan. |

---

##### `bucket_id_regexes`<sup>Required</sup> <a name="bucket_id_regexes" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets.property.bucketIdRegexes"></a>

```python
bucket_id_regexes: typing.List[str]
```

- *Type:* typing.List[str]

List of bucket id regexes to exclude in the storage intelligence plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#bucket_id_regexes StorageControlProjectIntelligenceConfig#bucket_id_regexes}

---

### StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations <a name="StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_control_project_intelligence_config

storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations(
  locations: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations.property.locations">locations</a></code> | <code>typing.List[str]</code> | List of locations. |

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

List of locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#locations StorageControlProjectIntelligenceConfig#locations}

---

### StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets <a name="StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_control_project_intelligence_config

storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets(
  bucket_id_regexes: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes">bucket_id_regexes</a></code> | <code>typing.List[str]</code> | List of bucket id regexes to exclude in the storage intelligence plan. |

---

##### `bucket_id_regexes`<sup>Required</sup> <a name="bucket_id_regexes" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes"></a>

```python
bucket_id_regexes: typing.List[str]
```

- *Type:* typing.List[str]

List of bucket id regexes to exclude in the storage intelligence plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#bucket_id_regexes StorageControlProjectIntelligenceConfig#bucket_id_regexes}

---

### StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations <a name="StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_control_project_intelligence_config

storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations(
  locations: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations.property.locations">locations</a></code> | <code>typing.List[str]</code> | List of locations. |

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

List of locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#locations StorageControlProjectIntelligenceConfig#locations}

---

### StorageControlProjectIntelligenceConfigTimeouts <a name="StorageControlProjectIntelligenceConfigTimeouts" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_control_project_intelligence_config

storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#create StorageControlProjectIntelligenceConfig#create}. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#delete StorageControlProjectIntelligenceConfig#delete}. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#update StorageControlProjectIntelligenceConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#create StorageControlProjectIntelligenceConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#delete StorageControlProjectIntelligenceConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#update StorageControlProjectIntelligenceConfig#update}.

---

### StorageControlProjectIntelligenceConfigTrialConfig <a name="StorageControlProjectIntelligenceConfigTrialConfig" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_control_project_intelligence_config

storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList <a name="StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_control_project_intelligence_config

storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference <a name="StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_control_project_intelligence_config

storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition">effective_edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig">intelligence_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig">StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_edition`<sup>Required</sup> <a name="effective_edition" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition"></a>

```python
effective_edition: str
```

- *Type:* str

---

##### `intelligence_config`<sup>Required</sup> <a name="intelligence_config" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig"></a>

```python
intelligence_config: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue"></a>

```python
internal_value: StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig
```

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig">StorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig</a>

---


### StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference <a name="StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_control_project_intelligence_config

storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput">bucket_id_regexes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">bucket_id_regexes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_id_regexes_input`<sup>Optional</sup> <a name="bucket_id_regexes_input" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput"></a>

```python
bucket_id_regexes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bucket_id_regexes`<sup>Required</sup> <a name="bucket_id_regexes" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```python
bucket_id_regexes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```python
internal_value: StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---


### StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference <a name="StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_control_project_intelligence_config

storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locationsInput">locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `locations_input`<sup>Optional</sup> <a name="locations_input" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locationsInput"></a>

```python
locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```python
internal_value: StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---


### StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference <a name="StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_control_project_intelligence_config

storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput">bucket_id_regexes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">bucket_id_regexes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_id_regexes_input`<sup>Optional</sup> <a name="bucket_id_regexes_input" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput"></a>

```python
bucket_id_regexes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bucket_id_regexes`<sup>Required</sup> <a name="bucket_id_regexes" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```python
bucket_id_regexes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```python
internal_value: StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---


### StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference <a name="StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_control_project_intelligence_config

storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locationsInput">locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `locations_input`<sup>Optional</sup> <a name="locations_input" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locationsInput"></a>

```python
locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```python
internal_value: StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---


### StorageControlProjectIntelligenceConfigFilterOutputReference <a name="StorageControlProjectIntelligenceConfigFilterOutputReference" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_control_project_intelligence_config

storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets">put_excluded_cloud_storage_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations">put_excluded_cloud_storage_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets">put_included_cloud_storage_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations">put_included_cloud_storage_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageBuckets">reset_excluded_cloud_storage_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageLocations">reset_excluded_cloud_storage_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageBuckets">reset_included_cloud_storage_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageLocations">reset_included_cloud_storage_locations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_excluded_cloud_storage_buckets` <a name="put_excluded_cloud_storage_buckets" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets"></a>

```python
def put_excluded_cloud_storage_buckets(
  bucket_id_regexes: typing.List[str]
) -> None
```

###### `bucket_id_regexes`<sup>Required</sup> <a name="bucket_id_regexes" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets.parameter.bucketIdRegexes"></a>

- *Type:* typing.List[str]

List of bucket id regexes to exclude in the storage intelligence plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#bucket_id_regexes StorageControlProjectIntelligenceConfig#bucket_id_regexes}

---

##### `put_excluded_cloud_storage_locations` <a name="put_excluded_cloud_storage_locations" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations"></a>

```python
def put_excluded_cloud_storage_locations(
  locations: typing.List[str]
) -> None
```

###### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations.parameter.locations"></a>

- *Type:* typing.List[str]

List of locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#locations StorageControlProjectIntelligenceConfig#locations}

---

##### `put_included_cloud_storage_buckets` <a name="put_included_cloud_storage_buckets" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets"></a>

```python
def put_included_cloud_storage_buckets(
  bucket_id_regexes: typing.List[str]
) -> None
```

###### `bucket_id_regexes`<sup>Required</sup> <a name="bucket_id_regexes" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets.parameter.bucketIdRegexes"></a>

- *Type:* typing.List[str]

List of bucket id regexes to exclude in the storage intelligence plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#bucket_id_regexes StorageControlProjectIntelligenceConfig#bucket_id_regexes}

---

##### `put_included_cloud_storage_locations` <a name="put_included_cloud_storage_locations" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations"></a>

```python
def put_included_cloud_storage_locations(
  locations: typing.List[str]
) -> None
```

###### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations.parameter.locations"></a>

- *Type:* typing.List[str]

List of locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/storage_control_project_intelligence_config#locations StorageControlProjectIntelligenceConfig#locations}

---

##### `reset_excluded_cloud_storage_buckets` <a name="reset_excluded_cloud_storage_buckets" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageBuckets"></a>

```python
def reset_excluded_cloud_storage_buckets() -> None
```

##### `reset_excluded_cloud_storage_locations` <a name="reset_excluded_cloud_storage_locations" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageLocations"></a>

```python
def reset_excluded_cloud_storage_locations() -> None
```

##### `reset_included_cloud_storage_buckets` <a name="reset_included_cloud_storage_buckets" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageBuckets"></a>

```python
def reset_included_cloud_storage_buckets() -> None
```

##### `reset_included_cloud_storage_locations` <a name="reset_included_cloud_storage_locations" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageLocations"></a>

```python
def reset_included_cloud_storage_locations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets">excluded_cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference">StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations">excluded_cloud_storage_locations</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference">StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets">included_cloud_storage_buckets</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference">StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations">included_cloud_storage_locations</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference">StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBucketsInput">excluded_cloud_storage_buckets_input</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocationsInput">excluded_cloud_storage_locations_input</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.property.includedCloudStorageBucketsInput">included_cloud_storage_buckets_input</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocationsInput">included_cloud_storage_locations_input</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilter">StorageControlProjectIntelligenceConfigFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_cloud_storage_buckets`<sup>Required</sup> <a name="excluded_cloud_storage_buckets" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets"></a>

```python
excluded_cloud_storage_buckets: StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference">StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference</a>

---

##### `excluded_cloud_storage_locations`<sup>Required</sup> <a name="excluded_cloud_storage_locations" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations"></a>

```python
excluded_cloud_storage_locations: StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference">StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference</a>

---

##### `included_cloud_storage_buckets`<sup>Required</sup> <a name="included_cloud_storage_buckets" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets"></a>

```python
included_cloud_storage_buckets: StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference">StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference</a>

---

##### `included_cloud_storage_locations`<sup>Required</sup> <a name="included_cloud_storage_locations" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations"></a>

```python
included_cloud_storage_locations: StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference">StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference</a>

---

##### `excluded_cloud_storage_buckets_input`<sup>Optional</sup> <a name="excluded_cloud_storage_buckets_input" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBucketsInput"></a>

```python
excluded_cloud_storage_buckets_input: StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---

##### `excluded_cloud_storage_locations_input`<sup>Optional</sup> <a name="excluded_cloud_storage_locations_input" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocationsInput"></a>

```python
excluded_cloud_storage_locations_input: StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---

##### `included_cloud_storage_buckets_input`<sup>Optional</sup> <a name="included_cloud_storage_buckets_input" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.property.includedCloudStorageBucketsInput"></a>

```python
included_cloud_storage_buckets_input: StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---

##### `included_cloud_storage_locations_input`<sup>Optional</sup> <a name="included_cloud_storage_locations_input" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocationsInput"></a>

```python
included_cloud_storage_locations_input: StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilterOutputReference.property.internalValue"></a>

```python
internal_value: StorageControlProjectIntelligenceConfigFilter
```

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigFilter">StorageControlProjectIntelligenceConfigFilter</a>

---


### StorageControlProjectIntelligenceConfigTimeoutsOutputReference <a name="StorageControlProjectIntelligenceConfigTimeoutsOutputReference" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_control_project_intelligence_config

storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeouts">StorageControlProjectIntelligenceConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageControlProjectIntelligenceConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTimeouts">StorageControlProjectIntelligenceConfigTimeouts</a>]

---


### StorageControlProjectIntelligenceConfigTrialConfigList <a name="StorageControlProjectIntelligenceConfigTrialConfigList" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_control_project_intelligence_config

storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageControlProjectIntelligenceConfigTrialConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StorageControlProjectIntelligenceConfigTrialConfigOutputReference <a name="StorageControlProjectIntelligenceConfigTrialConfigOutputReference" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_control_project_intelligence_config

storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfig">StorageControlProjectIntelligenceConfigTrialConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfigOutputReference.property.internalValue"></a>

```python
internal_value: StorageControlProjectIntelligenceConfigTrialConfig
```

- *Type:* <a href="#@cdktf/provider-google.storageControlProjectIntelligenceConfig.StorageControlProjectIntelligenceConfigTrialConfig">StorageControlProjectIntelligenceConfigTrialConfig</a>

---



