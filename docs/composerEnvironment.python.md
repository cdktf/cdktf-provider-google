# `composerEnvironment` Submodule <a name="`composerEnvironment` Submodule" id="@cdktf/provider-google.composerEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComposerEnvironment <a name="ComposerEnvironment" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment google_composer_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  config: ComposerEnvironmentConfigA = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  region: str = None,
  storage_config: ComposerEnvironmentStorageConfig = None,
  timeouts: ComposerEnvironmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the environment. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA">ComposerEnvironmentConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#id ComposerEnvironment#id}. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for this environment. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.region">region</a></code> | <code>str</code> | The location or Compute Engine region for the environment. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.storageConfig">storage_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfig">ComposerEnvironmentStorageConfig</a></code> | storage_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts">ComposerEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.name"></a>

- *Type:* str

Name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#name ComposerEnvironment#name}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA">ComposerEnvironmentConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#config ComposerEnvironment#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#id ComposerEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels for this environment.

The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?. Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?)?. No more than 64 labels can be associated with a given environment. Both keys and values must be <= 128 bytes in size.

```
			**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
			Please refer to the field 'effective_labels' for all of the labels present on the resource.
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#labels ComposerEnvironment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#project ComposerEnvironment#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.region"></a>

- *Type:* str

The location or Compute Engine region for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#region ComposerEnvironment#region}

---

##### `storage_config`<sup>Optional</sup> <a name="storage_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.storageConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfig">ComposerEnvironmentStorageConfig</a>

storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#storage_config ComposerEnvironment#storage_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts">ComposerEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#timeouts ComposerEnvironment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putStorageConfig">put_storage_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetStorageConfig">reset_storage_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_config` <a name="put_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putConfig"></a>

```python
def put_config(
  database_config: ComposerEnvironmentConfigDatabaseConfig = None,
  data_retention_config: ComposerEnvironmentConfigDataRetentionConfig = None,
  enable_private_builds_only: bool | IResolvable = None,
  enable_private_environment: bool | IResolvable = None,
  encryption_config: ComposerEnvironmentConfigEncryptionConfig = None,
  environment_size: str = None,
  maintenance_window: ComposerEnvironmentConfigMaintenanceWindow = None,
  master_authorized_networks_config: ComposerEnvironmentConfigMasterAuthorizedNetworksConfig = None,
  node_config: ComposerEnvironmentConfigNodeConfig = None,
  node_count: typing.Union[int, float] = None,
  private_environment_config: ComposerEnvironmentConfigPrivateEnvironmentConfig = None,
  recovery_config: ComposerEnvironmentConfigRecoveryConfig = None,
  resilience_mode: str = None,
  software_config: ComposerEnvironmentConfigSoftwareConfig = None,
  web_server_config: ComposerEnvironmentConfigWebServerConfig = None,
  web_server_network_access_control: ComposerEnvironmentConfigWebServerNetworkAccessControl = None,
  workloads_config: ComposerEnvironmentConfigWorkloadsConfig = None
) -> None
```

###### `database_config`<sup>Optional</sup> <a name="database_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putConfig.parameter.databaseConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig">ComposerEnvironmentConfigDatabaseConfig</a>

database_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#database_config ComposerEnvironment#database_config}

---

###### `data_retention_config`<sup>Optional</sup> <a name="data_retention_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putConfig.parameter.dataRetentionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfig">ComposerEnvironmentConfigDataRetentionConfig</a>

data_retention_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#data_retention_config ComposerEnvironment#data_retention_config}

---

###### `enable_private_builds_only`<sup>Optional</sup> <a name="enable_private_builds_only" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putConfig.parameter.enablePrivateBuildsOnly"></a>

- *Type:* bool | cdktf.IResolvable

Optional.

If true, builds performed during operations that install Python packages have only private connectivity to Google services. If false, the builds also have access to the internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#enable_private_builds_only ComposerEnvironment#enable_private_builds_only}

---

###### `enable_private_environment`<sup>Optional</sup> <a name="enable_private_environment" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putConfig.parameter.enablePrivateEnvironment"></a>

- *Type:* bool | cdktf.IResolvable

Optional. If true, a private Composer environment will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#enable_private_environment ComposerEnvironment#enable_private_environment}

---

###### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putConfig.parameter.encryptionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig">ComposerEnvironmentConfigEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#encryption_config ComposerEnvironment#encryption_config}

---

###### `environment_size`<sup>Optional</sup> <a name="environment_size" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putConfig.parameter.environmentSize"></a>

- *Type:* str

The size of the Cloud Composer environment.

This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#environment_size ComposerEnvironment#environment_size}

---

###### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putConfig.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow">ComposerEnvironmentConfigMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#maintenance_window ComposerEnvironment#maintenance_window}

---

###### `master_authorized_networks_config`<sup>Optional</sup> <a name="master_authorized_networks_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putConfig.parameter.masterAuthorizedNetworksConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig">ComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a>

master_authorized_networks_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#master_authorized_networks_config ComposerEnvironment#master_authorized_networks_config}

---

###### `node_config`<sup>Optional</sup> <a name="node_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putConfig.parameter.nodeConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig">ComposerEnvironmentConfigNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#node_config ComposerEnvironment#node_config}

---

###### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putConfig.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

The number of nodes in the Kubernetes Engine cluster that will be used to run this environment.

This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#node_count ComposerEnvironment#node_count}

---

###### `private_environment_config`<sup>Optional</sup> <a name="private_environment_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putConfig.parameter.privateEnvironmentConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig">ComposerEnvironmentConfigPrivateEnvironmentConfig</a>

private_environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#private_environment_config ComposerEnvironment#private_environment_config}

---

###### `recovery_config`<sup>Optional</sup> <a name="recovery_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putConfig.parameter.recoveryConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig">ComposerEnvironmentConfigRecoveryConfig</a>

recovery_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#recovery_config ComposerEnvironment#recovery_config}

---

###### `resilience_mode`<sup>Optional</sup> <a name="resilience_mode" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putConfig.parameter.resilienceMode"></a>

- *Type:* str

Whether high resilience is enabled or not.

This field is supported for Cloud Composer environments in versions composer-2.1.15-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#resilience_mode ComposerEnvironment#resilience_mode}

---

###### `software_config`<sup>Optional</sup> <a name="software_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putConfig.parameter.softwareConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig">ComposerEnvironmentConfigSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#software_config ComposerEnvironment#software_config}

---

###### `web_server_config`<sup>Optional</sup> <a name="web_server_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putConfig.parameter.webServerConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig">ComposerEnvironmentConfigWebServerConfig</a>

web_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#web_server_config ComposerEnvironment#web_server_config}

---

###### `web_server_network_access_control`<sup>Optional</sup> <a name="web_server_network_access_control" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putConfig.parameter.webServerNetworkAccessControl"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl">ComposerEnvironmentConfigWebServerNetworkAccessControl</a>

web_server_network_access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#web_server_network_access_control ComposerEnvironment#web_server_network_access_control}

---

###### `workloads_config`<sup>Optional</sup> <a name="workloads_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putConfig.parameter.workloadsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig">ComposerEnvironmentConfigWorkloadsConfig</a>

workloads_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#workloads_config ComposerEnvironment#workloads_config}

---

##### `put_storage_config` <a name="put_storage_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putStorageConfig"></a>

```python
def put_storage_config(
  bucket: str
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putStorageConfig.parameter.bucket"></a>

- *Type:* str

Optional. Name of an existing Cloud Storage bucket to be used by the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#bucket ComposerEnvironment#bucket}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#create ComposerEnvironment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#delete ComposerEnvironment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#update ComposerEnvironment#update}.

---

##### `reset_config` <a name="reset_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_storage_config` <a name="reset_storage_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetStorageConfig"></a>

```python
def reset_storage_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComposerEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComposerEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComposerEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComposerEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComposerEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference">ComposerEnvironmentConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.storageConfig">storage_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference">ComposerEnvironmentStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference">ComposerEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.configInput">config_input</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA">ComposerEnvironmentConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.storageConfigInput">storage_config_input</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfig">ComposerEnvironmentStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts">ComposerEnvironmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.config"></a>

```python
config: ComposerEnvironmentConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference">ComposerEnvironmentConfigAOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `storage_config`<sup>Required</sup> <a name="storage_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.storageConfig"></a>

```python
storage_config: ComposerEnvironmentStorageConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference">ComposerEnvironmentStorageConfigOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.timeouts"></a>

```python
timeouts: ComposerEnvironmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference">ComposerEnvironmentTimeoutsOutputReference</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.configInput"></a>

```python
config_input: ComposerEnvironmentConfigA
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA">ComposerEnvironmentConfigA</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `storage_config_input`<sup>Optional</sup> <a name="storage_config_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.storageConfigInput"></a>

```python
storage_config_input: ComposerEnvironmentStorageConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfig">ComposerEnvironmentStorageConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ComposerEnvironmentTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts">ComposerEnvironmentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComposerEnvironmentConfig <a name="ComposerEnvironmentConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  config: ComposerEnvironmentConfigA = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  region: str = None,
  storage_config: ComposerEnvironmentStorageConfig = None,
  timeouts: ComposerEnvironmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.name">name</a></code> | <code>str</code> | Name of the environment. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA">ComposerEnvironmentConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#id ComposerEnvironment#id}. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for this environment. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.region">region</a></code> | <code>str</code> | The location or Compute Engine region for the environment. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.storageConfig">storage_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfig">ComposerEnvironmentStorageConfig</a></code> | storage_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts">ComposerEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#name ComposerEnvironment#name}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.config"></a>

```python
config: ComposerEnvironmentConfigA
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA">ComposerEnvironmentConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#config ComposerEnvironment#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#id ComposerEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels for this environment.

The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?. Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?)?. No more than 64 labels can be associated with a given environment. Both keys and values must be <= 128 bytes in size.

```
			**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
			Please refer to the field 'effective_labels' for all of the labels present on the resource.
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#labels ComposerEnvironment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#project ComposerEnvironment#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The location or Compute Engine region for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#region ComposerEnvironment#region}

---

##### `storage_config`<sup>Optional</sup> <a name="storage_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.storageConfig"></a>

```python
storage_config: ComposerEnvironmentStorageConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfig">ComposerEnvironmentStorageConfig</a>

storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#storage_config ComposerEnvironment#storage_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfig.property.timeouts"></a>

```python
timeouts: ComposerEnvironmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts">ComposerEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#timeouts ComposerEnvironment#timeouts}

---

### ComposerEnvironmentConfigA <a name="ComposerEnvironmentConfigA" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigA(
  database_config: ComposerEnvironmentConfigDatabaseConfig = None,
  data_retention_config: ComposerEnvironmentConfigDataRetentionConfig = None,
  enable_private_builds_only: bool | IResolvable = None,
  enable_private_environment: bool | IResolvable = None,
  encryption_config: ComposerEnvironmentConfigEncryptionConfig = None,
  environment_size: str = None,
  maintenance_window: ComposerEnvironmentConfigMaintenanceWindow = None,
  master_authorized_networks_config: ComposerEnvironmentConfigMasterAuthorizedNetworksConfig = None,
  node_config: ComposerEnvironmentConfigNodeConfig = None,
  node_count: typing.Union[int, float] = None,
  private_environment_config: ComposerEnvironmentConfigPrivateEnvironmentConfig = None,
  recovery_config: ComposerEnvironmentConfigRecoveryConfig = None,
  resilience_mode: str = None,
  software_config: ComposerEnvironmentConfigSoftwareConfig = None,
  web_server_config: ComposerEnvironmentConfigWebServerConfig = None,
  web_server_network_access_control: ComposerEnvironmentConfigWebServerNetworkAccessControl = None,
  workloads_config: ComposerEnvironmentConfigWorkloadsConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.databaseConfig">database_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig">ComposerEnvironmentConfigDatabaseConfig</a></code> | database_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.dataRetentionConfig">data_retention_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfig">ComposerEnvironmentConfigDataRetentionConfig</a></code> | data_retention_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.enablePrivateBuildsOnly">enable_private_builds_only</a></code> | <code>bool \| cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.enablePrivateEnvironment">enable_private_environment</a></code> | <code>bool \| cdktf.IResolvable</code> | Optional. If true, a private Composer environment will be created. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig">ComposerEnvironmentConfigEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.environmentSize">environment_size</a></code> | <code>str</code> | The size of the Cloud Composer environment. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow">ComposerEnvironmentConfigMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.masterAuthorizedNetworksConfig">master_authorized_networks_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig">ComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a></code> | master_authorized_networks_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.nodeConfig">node_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig">ComposerEnvironmentConfigNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.privateEnvironmentConfig">private_environment_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig">ComposerEnvironmentConfigPrivateEnvironmentConfig</a></code> | private_environment_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.recoveryConfig">recovery_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig">ComposerEnvironmentConfigRecoveryConfig</a></code> | recovery_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.resilienceMode">resilience_mode</a></code> | <code>str</code> | Whether high resilience is enabled or not. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.softwareConfig">software_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig">ComposerEnvironmentConfigSoftwareConfig</a></code> | software_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.webServerConfig">web_server_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig">ComposerEnvironmentConfigWebServerConfig</a></code> | web_server_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.webServerNetworkAccessControl">web_server_network_access_control</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl">ComposerEnvironmentConfigWebServerNetworkAccessControl</a></code> | web_server_network_access_control block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.workloadsConfig">workloads_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig">ComposerEnvironmentConfigWorkloadsConfig</a></code> | workloads_config block. |

---

##### `database_config`<sup>Optional</sup> <a name="database_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.databaseConfig"></a>

```python
database_config: ComposerEnvironmentConfigDatabaseConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig">ComposerEnvironmentConfigDatabaseConfig</a>

database_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#database_config ComposerEnvironment#database_config}

---

##### `data_retention_config`<sup>Optional</sup> <a name="data_retention_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.dataRetentionConfig"></a>

```python
data_retention_config: ComposerEnvironmentConfigDataRetentionConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfig">ComposerEnvironmentConfigDataRetentionConfig</a>

data_retention_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#data_retention_config ComposerEnvironment#data_retention_config}

---

##### `enable_private_builds_only`<sup>Optional</sup> <a name="enable_private_builds_only" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.enablePrivateBuildsOnly"></a>

```python
enable_private_builds_only: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Optional.

If true, builds performed during operations that install Python packages have only private connectivity to Google services. If false, the builds also have access to the internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#enable_private_builds_only ComposerEnvironment#enable_private_builds_only}

---

##### `enable_private_environment`<sup>Optional</sup> <a name="enable_private_environment" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.enablePrivateEnvironment"></a>

```python
enable_private_environment: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Optional. If true, a private Composer environment will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#enable_private_environment ComposerEnvironment#enable_private_environment}

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.encryptionConfig"></a>

```python
encryption_config: ComposerEnvironmentConfigEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig">ComposerEnvironmentConfigEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#encryption_config ComposerEnvironment#encryption_config}

---

##### `environment_size`<sup>Optional</sup> <a name="environment_size" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.environmentSize"></a>

```python
environment_size: str
```

- *Type:* str

The size of the Cloud Composer environment.

This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#environment_size ComposerEnvironment#environment_size}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.maintenanceWindow"></a>

```python
maintenance_window: ComposerEnvironmentConfigMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow">ComposerEnvironmentConfigMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#maintenance_window ComposerEnvironment#maintenance_window}

---

##### `master_authorized_networks_config`<sup>Optional</sup> <a name="master_authorized_networks_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.masterAuthorizedNetworksConfig"></a>

```python
master_authorized_networks_config: ComposerEnvironmentConfigMasterAuthorizedNetworksConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig">ComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a>

master_authorized_networks_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#master_authorized_networks_config ComposerEnvironment#master_authorized_networks_config}

---

##### `node_config`<sup>Optional</sup> <a name="node_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.nodeConfig"></a>

```python
node_config: ComposerEnvironmentConfigNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig">ComposerEnvironmentConfigNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#node_config ComposerEnvironment#node_config}

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of nodes in the Kubernetes Engine cluster that will be used to run this environment.

This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#node_count ComposerEnvironment#node_count}

---

##### `private_environment_config`<sup>Optional</sup> <a name="private_environment_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.privateEnvironmentConfig"></a>

```python
private_environment_config: ComposerEnvironmentConfigPrivateEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig">ComposerEnvironmentConfigPrivateEnvironmentConfig</a>

private_environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#private_environment_config ComposerEnvironment#private_environment_config}

---

##### `recovery_config`<sup>Optional</sup> <a name="recovery_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.recoveryConfig"></a>

```python
recovery_config: ComposerEnvironmentConfigRecoveryConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig">ComposerEnvironmentConfigRecoveryConfig</a>

recovery_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#recovery_config ComposerEnvironment#recovery_config}

---

##### `resilience_mode`<sup>Optional</sup> <a name="resilience_mode" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.resilienceMode"></a>

```python
resilience_mode: str
```

- *Type:* str

Whether high resilience is enabled or not.

This field is supported for Cloud Composer environments in versions composer-2.1.15-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#resilience_mode ComposerEnvironment#resilience_mode}

---

##### `software_config`<sup>Optional</sup> <a name="software_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.softwareConfig"></a>

```python
software_config: ComposerEnvironmentConfigSoftwareConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig">ComposerEnvironmentConfigSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#software_config ComposerEnvironment#software_config}

---

##### `web_server_config`<sup>Optional</sup> <a name="web_server_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.webServerConfig"></a>

```python
web_server_config: ComposerEnvironmentConfigWebServerConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig">ComposerEnvironmentConfigWebServerConfig</a>

web_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#web_server_config ComposerEnvironment#web_server_config}

---

##### `web_server_network_access_control`<sup>Optional</sup> <a name="web_server_network_access_control" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.webServerNetworkAccessControl"></a>

```python
web_server_network_access_control: ComposerEnvironmentConfigWebServerNetworkAccessControl
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl">ComposerEnvironmentConfigWebServerNetworkAccessControl</a>

web_server_network_access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#web_server_network_access_control ComposerEnvironment#web_server_network_access_control}

---

##### `workloads_config`<sup>Optional</sup> <a name="workloads_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA.property.workloadsConfig"></a>

```python
workloads_config: ComposerEnvironmentConfigWorkloadsConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig">ComposerEnvironmentConfigWorkloadsConfig</a>

workloads_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#workloads_config ComposerEnvironment#workloads_config}

---

### ComposerEnvironmentConfigDatabaseConfig <a name="ComposerEnvironmentConfigDatabaseConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigDatabaseConfig(
  machine_type: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig.property.machineType">machine_type</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig.property.zone">zone</a></code> | <code>str</code> | Optional. Cloud SQL database preferred zone. |

---

##### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

Optional.

Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. If not specified, db-n1-standard-2 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#machine_type ComposerEnvironment#machine_type}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Optional. Cloud SQL database preferred zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#zone ComposerEnvironment#zone}

---

### ComposerEnvironmentConfigDataRetentionConfig <a name="ComposerEnvironmentConfigDataRetentionConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigDataRetentionConfig(
  airflow_metadata_retention_config: IResolvable | typing.List[ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig] = None,
  task_logs_retention_config: IResolvable | typing.List[ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfig.property.airflowMetadataRetentionConfig">airflow_metadata_retention_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a>]</code> | airflow_metadata_retention_config block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfig.property.taskLogsRetentionConfig">task_logs_retention_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>]</code> | task_logs_retention_config block. |

---

##### `airflow_metadata_retention_config`<sup>Optional</sup> <a name="airflow_metadata_retention_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfig.property.airflowMetadataRetentionConfig"></a>

```python
airflow_metadata_retention_config: IResolvable | typing.List[ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a>]

airflow_metadata_retention_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#airflow_metadata_retention_config ComposerEnvironment#airflow_metadata_retention_config}

---

##### `task_logs_retention_config`<sup>Optional</sup> <a name="task_logs_retention_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfig.property.taskLogsRetentionConfig"></a>

```python
task_logs_retention_config: IResolvable | typing.List[ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>]

task_logs_retention_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#task_logs_retention_config ComposerEnvironment#task_logs_retention_config}

---

### ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig <a name="ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig(
  retention_days: typing.Union[int, float] = None,
  retention_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | How many days data should be retained for. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig.property.retentionMode">retention_mode</a></code> | <code>str</code> | Whether database retention is enabled or not. |

---

##### `retention_days`<sup>Optional</sup> <a name="retention_days" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many days data should be retained for.

This field is supported for Cloud Composer environments in composer 3 and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#retention_days ComposerEnvironment#retention_days}

---

##### `retention_mode`<sup>Optional</sup> <a name="retention_mode" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig.property.retentionMode"></a>

```python
retention_mode: str
```

- *Type:* str

Whether database retention is enabled or not.

This field is supported for Cloud Composer environments in composer 3 and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#retention_mode ComposerEnvironment#retention_mode}

---

### ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig <a name="ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig(
  storage_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig.property.storageMode">storage_mode</a></code> | <code>str</code> | Whether logs in cloud logging only is enabled or not. |

---

##### `storage_mode`<sup>Optional</sup> <a name="storage_mode" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig.property.storageMode"></a>

```python
storage_mode: str
```

- *Type:* str

Whether logs in cloud logging only is enabled or not.

This field is supported for Cloud Composer environments in versions composer-2.0.32-airflow-2.1.4 and newer but not in composer-3*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#storage_mode ComposerEnvironment#storage_mode}

---

### ComposerEnvironmentConfigEncryptionConfig <a name="ComposerEnvironmentConfigEncryptionConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigEncryptionConfig(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Optional. Customer-managed Encryption Key available through Google's Key Management Service. Cannot be updated. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Optional. Customer-managed Encryption Key available through Google's Key Management Service. Cannot be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#kms_key_name ComposerEnvironment#kms_key_name}

---

### ComposerEnvironmentConfigMaintenanceWindow <a name="ComposerEnvironmentConfigMaintenanceWindow" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow(
  end_time: str,
  recurrence: str,
  start_time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow.property.endTime">end_time</a></code> | <code>str</code> | Maintenance window end time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow.property.recurrence">recurrence</a></code> | <code>str</code> | Maintenance window recurrence. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow.property.startTime">start_time</a></code> | <code>str</code> | Start time of the first recurrence of the maintenance window. |

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

Maintenance window end time.

It is used only to calculate the duration of the maintenance window. The value for end-time must be in the future, relative to 'start_time'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#end_time ComposerEnvironment#end_time}

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow.property.recurrence"></a>

```python
recurrence: str
```

- *Type:* str

Maintenance window recurrence.

Format is a subset of RFC-5545 (https://tools.ietf.org/html/rfc5545) 'RRULE'. The only allowed values for 'FREQ' field are 'FREQ=DAILY' and 'FREQ=WEEKLY;BYDAY=...'. Example values: 'FREQ=WEEKLY;BYDAY=TU,WE', 'FREQ=DAILY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#recurrence ComposerEnvironment#recurrence}

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Start time of the first recurrence of the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#start_time ComposerEnvironment#start_time}

---

### ComposerEnvironmentConfigMasterAuthorizedNetworksConfig <a name="ComposerEnvironmentConfigMasterAuthorizedNetworksConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig(
  enabled: bool | IResolvable,
  cidr_blocks: IResolvable | typing.List[ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether or not master authorized networks is enabled. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig.property.cidrBlocks">cidr_blocks</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>]</code> | cidr_blocks block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether or not master authorized networks is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#enabled ComposerEnvironment#enabled}

---

##### `cidr_blocks`<sup>Optional</sup> <a name="cidr_blocks" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig.property.cidrBlocks"></a>

```python
cidr_blocks: IResolvable | typing.List[ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>]

cidr_blocks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#cidr_blocks ComposerEnvironment#cidr_blocks}

---

### ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks <a name="ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks(
  cidr_block: str,
  display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.property.cidrBlock">cidr_block</a></code> | <code>str</code> | cidr_block must be specified in CIDR notation. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.property.displayName">display_name</a></code> | <code>str</code> | display_name is a field for users to identify CIDR blocks. |

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

cidr_block must be specified in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#cidr_block ComposerEnvironment#cidr_block}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

display_name is a field for users to identify CIDR blocks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#display_name ComposerEnvironment#display_name}

---

### ComposerEnvironmentConfigNodeConfig <a name="ComposerEnvironmentConfigNodeConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigNodeConfig(
  composer_internal_ipv4_cidr_block: str = None,
  composer_network_attachment: str = None,
  disk_size_gb: typing.Union[int, float] = None,
  enable_ip_masq_agent: bool | IResolvable = None,
  ip_allocation_policy: ComposerEnvironmentConfigNodeConfigIpAllocationPolicy = None,
  machine_type: str = None,
  network: str = None,
  oauth_scopes: typing.List[str] = None,
  service_account: str = None,
  subnetwork: str = None,
  tags: typing.List[str] = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.composerInternalIpv4CidrBlock">composer_internal_ipv4_cidr_block</a></code> | <code>str</code> | IPv4 cidr range that will be used by Composer internal components. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.composerNetworkAttachment">composer_network_attachment</a></code> | <code>str</code> | PSC (Private Service Connect) Network entry point. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | The disk size in GB used for node VMs. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.enableIpMasqAgent">enable_ip_masq_agent</a></code> | <code>bool \| cdktf.IResolvable</code> | Deploys 'ip-masq-agent' daemon set in the GKE cluster and defines nonMasqueradeCIDRs equals to pod IP range so IP masquerading is used for all destination addresses, except between pods traffic. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.ipAllocationPolicy">ip_allocation_policy</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy">ComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a></code> | ip_allocation_policy block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.machineType">machine_type</a></code> | <code>str</code> | The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.network">network</a></code> | <code>str</code> | The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | The set of Google API scopes to be made available on all node VMs. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | The Google Cloud Platform Service Account to be used by the node VMs. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.subnetwork">subnetwork</a></code> | <code>str</code> | The Compute Engine subnetwork to be used for machine communications, specified as a self-link, relative resource name (e.g. "projects/{project}/regions/{region}/subnetworks/{subnetwork}"), or by name. If subnetwork is provided, network must also be provided and the subnetwork must belong to the enclosing environment's project and region. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | The list of instance tags applied to all node VMs. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.zone">zone</a></code> | <code>str</code> | The Compute Engine zone in which to deploy the VMs running the Apache Airflow software, specified as the zone name or relative resource name (e.g. "projects/{project}/zones/{zone}"). Must belong to the enclosing environment's project and region. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. |

---

##### `composer_internal_ipv4_cidr_block`<sup>Optional</sup> <a name="composer_internal_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.composerInternalIpv4CidrBlock"></a>

```python
composer_internal_ipv4_cidr_block: str
```

- *Type:* str

IPv4 cidr range that will be used by Composer internal components.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#composer_internal_ipv4_cidr_block ComposerEnvironment#composer_internal_ipv4_cidr_block}

---

##### `composer_network_attachment`<sup>Optional</sup> <a name="composer_network_attachment" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.composerNetworkAttachment"></a>

```python
composer_network_attachment: str
```

- *Type:* str

PSC (Private Service Connect) Network entry point.

Customers can pre-create the Network Attachment and point Cloud Composer environment to use. It is possible to share network attachment among many environments, provided enough IP addresses are available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#composer_network_attachment ComposerEnvironment#composer_network_attachment}

---

##### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The disk size in GB used for node VMs.

Minimum size is 20GB. If unspecified, defaults to 100GB. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#disk_size_gb ComposerEnvironment#disk_size_gb}

---

##### `enable_ip_masq_agent`<sup>Optional</sup> <a name="enable_ip_masq_agent" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.enableIpMasqAgent"></a>

```python
enable_ip_masq_agent: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Deploys 'ip-masq-agent' daemon set in the GKE cluster and defines nonMasqueradeCIDRs equals to pod IP range so IP masquerading is used for all destination addresses, except between pods traffic.

See: https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#enable_ip_masq_agent ComposerEnvironment#enable_ip_masq_agent}

---

##### `ip_allocation_policy`<sup>Optional</sup> <a name="ip_allocation_policy" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.ipAllocationPolicy"></a>

```python
ip_allocation_policy: ComposerEnvironmentConfigNodeConfigIpAllocationPolicy
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy">ComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a>

ip_allocation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#ip_allocation_policy ComposerEnvironment#ip_allocation_policy}

---

##### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

The Compute Engine machine type used for cluster instances, specified as a name or relative resource name.

For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment's project and region/zone. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#machine_type ComposerEnvironment#machine_type}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The Compute Engine machine type used for cluster instances, specified as a name or relative resource name.

For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment's project and region/zone. The network must belong to the environment's project. If unspecified, the "default" network ID in the environment's project is used. If a Custom Subnet Network is provided, subnetwork must also be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#network ComposerEnvironment#network}

---

##### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

The set of Google API scopes to be made available on all node VMs.

Cannot be updated. If empty, defaults to ["https://www.googleapis.com/auth/cloud-platform"]. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#oauth_scopes ComposerEnvironment#oauth_scopes}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

The Google Cloud Platform Service Account to be used by the node VMs.

If a service account is not specified, the "default" Compute Engine service account is used. Cannot be updated. If given, note that the service account must have roles/composer.worker for any GCP resources created under the Cloud Composer Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#service_account ComposerEnvironment#service_account}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

The Compute Engine subnetwork to be used for machine communications, specified as a self-link, relative resource name (e.g. "projects/{project}/regions/{region}/subnetworks/{subnetwork}"), or by name. If subnetwork is provided, network must also be provided and the subnetwork must belong to the enclosing environment's project and region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#subnetwork ComposerEnvironment#subnetwork}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

The list of instance tags applied to all node VMs.

Tags are used to identify valid sources or targets for network firewalls. Each tag within the list must comply with RFC1035. Cannot be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#tags ComposerEnvironment#tags}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

The Compute Engine zone in which to deploy the VMs running the Apache Airflow software, specified as the zone name or relative resource name (e.g. "projects/{project}/zones/{zone}"). Must belong to the enclosing environment's project and region. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#zone ComposerEnvironment#zone}

---

### ComposerEnvironmentConfigNodeConfigIpAllocationPolicy <a name="ComposerEnvironmentConfigNodeConfigIpAllocationPolicy" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy(
  cluster_ipv4_cidr_block: str = None,
  cluster_secondary_range_name: str = None,
  services_ipv4_cidr_block: str = None,
  services_secondary_range_name: str = None,
  use_ip_aliases: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.clusterIpv4CidrBlock">cluster_ipv4_cidr_block</a></code> | <code>str</code> | The IP address range used to allocate IP addresses to pods in the cluster. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.clusterSecondaryRangeName">cluster_secondary_range_name</a></code> | <code>str</code> | The name of the cluster's secondary range used to allocate IP addresses to pods. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.servicesIpv4CidrBlock">services_ipv4_cidr_block</a></code> | <code>str</code> | The IP address range used to allocate IP addresses in this cluster. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.servicesSecondaryRangeName">services_secondary_range_name</a></code> | <code>str</code> | The name of the services' secondary range used to allocate IP addresses to the cluster. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.useIpAliases">use_ip_aliases</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether or not to enable Alias IPs in the GKE cluster. |

---

##### `cluster_ipv4_cidr_block`<sup>Optional</sup> <a name="cluster_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.clusterIpv4CidrBlock"></a>

```python
cluster_ipv4_cidr_block: str
```

- *Type:* str

The IP address range used to allocate IP addresses to pods in the cluster.

For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when use_ip_aliases is true. Set to blank to have GKE choose a range with the default size. Set to /netmask (e.g. /14) to have GKE choose a range with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use. Specify either cluster_secondary_range_name or cluster_ipv4_cidr_block but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#cluster_ipv4_cidr_block ComposerEnvironment#cluster_ipv4_cidr_block}

---

##### `cluster_secondary_range_name`<sup>Optional</sup> <a name="cluster_secondary_range_name" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.clusterSecondaryRangeName"></a>

```python
cluster_secondary_range_name: str
```

- *Type:* str

The name of the cluster's secondary range used to allocate IP addresses to pods.

Specify either cluster_secondary_range_name or cluster_ipv4_cidr_block but not both. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when use_ip_aliases is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#cluster_secondary_range_name ComposerEnvironment#cluster_secondary_range_name}

---

##### `services_ipv4_cidr_block`<sup>Optional</sup> <a name="services_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.servicesIpv4CidrBlock"></a>

```python
services_ipv4_cidr_block: str
```

- *Type:* str

The IP address range used to allocate IP addresses in this cluster.

For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when use_ip_aliases is true. Set to blank to have GKE choose a range with the default size. Set to /netmask (e.g. /14) to have GKE choose a range with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use. Specify either services_secondary_range_name or services_ipv4_cidr_block but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#services_ipv4_cidr_block ComposerEnvironment#services_ipv4_cidr_block}

---

##### `services_secondary_range_name`<sup>Optional</sup> <a name="services_secondary_range_name" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.servicesSecondaryRangeName"></a>

```python
services_secondary_range_name: str
```

- *Type:* str

The name of the services' secondary range used to allocate IP addresses to the cluster.

Specify either services_secondary_range_name or services_ipv4_cidr_block but not both. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when use_ip_aliases is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#services_secondary_range_name ComposerEnvironment#services_secondary_range_name}

---

##### `use_ip_aliases`<sup>Optional</sup> <a name="use_ip_aliases" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy.property.useIpAliases"></a>

```python
use_ip_aliases: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether or not to enable Alias IPs in the GKE cluster.

If true, a VPC-native cluster is created. Defaults to true if the ip_allocation_policy block is present in config. This field is only supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use VPC-native GKE clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#use_ip_aliases ComposerEnvironment#use_ip_aliases}

---

### ComposerEnvironmentConfigPrivateEnvironmentConfig <a name="ComposerEnvironmentConfigPrivateEnvironmentConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig(
  cloud_composer_connection_subnetwork: str = None,
  cloud_composer_network_ipv4_cidr_block: str = None,
  cloud_sql_ipv4_cidr_block: str = None,
  connection_type: str = None,
  enable_private_endpoint: bool | IResolvable = None,
  enable_privately_used_public_ips: bool | IResolvable = None,
  master_ipv4_cidr_block: str = None,
  web_server_ipv4_cidr_block: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudComposerConnectionSubnetwork">cloud_composer_connection_subnetwork</a></code> | <code>str</code> | When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudComposerNetworkIpv4CidrBlock">cloud_composer_network_ipv4_cidr_block</a></code> | <code>str</code> | The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudSqlIpv4CidrBlock">cloud_sql_ipv4_cidr_block</a></code> | <code>str</code> | The CIDR block from which IP range in tenant project will be reserved for Cloud SQL. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.connectionType">connection_type</a></code> | <code>str</code> | Mode of internal communication within the Composer environment. Must be one of "VPC_PEERING" or "PRIVATE_SERVICE_CONNECT". |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.enablePrivateEndpoint">enable_private_endpoint</a></code> | <code>bool \| cdktf.IResolvable</code> | If true, access to the public endpoint of the GKE cluster is denied. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.enablePrivatelyUsedPublicIps">enable_privately_used_public_ips</a></code> | <code>bool \| cdktf.IResolvable</code> | When enabled, IPs from public (non-RFC1918) ranges can be used for ip_allocation_policy.cluster_ipv4_cidr_block and ip_allocation_policy.service_ipv4_cidr_block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.masterIpv4CidrBlock">master_ipv4_cidr_block</a></code> | <code>str</code> | The IP range in CIDR notation to use for the hosted master network. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.webServerIpv4CidrBlock">web_server_ipv4_cidr_block</a></code> | <code>str</code> | The CIDR block from which IP range for web server will be reserved. |

---

##### `cloud_composer_connection_subnetwork`<sup>Optional</sup> <a name="cloud_composer_connection_subnetwork" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudComposerConnectionSubnetwork"></a>

```python
cloud_composer_connection_subnetwork: str
```

- *Type:* str

When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork.

This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#cloud_composer_connection_subnetwork ComposerEnvironment#cloud_composer_connection_subnetwork}

---

##### `cloud_composer_network_ipv4_cidr_block`<sup>Optional</sup> <a name="cloud_composer_network_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudComposerNetworkIpv4CidrBlock"></a>

```python
cloud_composer_network_ipv4_cidr_block: str
```

- *Type:* str

The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved.

Needs to be disjoint from private_cluster_config.master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#cloud_composer_network_ipv4_cidr_block ComposerEnvironment#cloud_composer_network_ipv4_cidr_block}

---

##### `cloud_sql_ipv4_cidr_block`<sup>Optional</sup> <a name="cloud_sql_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.cloudSqlIpv4CidrBlock"></a>

```python
cloud_sql_ipv4_cidr_block: str
```

- *Type:* str

The CIDR block from which IP range in tenant project will be reserved for Cloud SQL.

Needs to be disjoint from web_server_ipv4_cidr_block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#cloud_sql_ipv4_cidr_block ComposerEnvironment#cloud_sql_ipv4_cidr_block}

---

##### `connection_type`<sup>Optional</sup> <a name="connection_type" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

Mode of internal communication within the Composer environment. Must be one of "VPC_PEERING" or "PRIVATE_SERVICE_CONNECT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#connection_type ComposerEnvironment#connection_type}

---

##### `enable_private_endpoint`<sup>Optional</sup> <a name="enable_private_endpoint" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.enablePrivateEndpoint"></a>

```python
enable_private_endpoint: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If true, access to the public endpoint of the GKE cluster is denied.

If this field is set to true, ip_allocation_policy.use_ip_aliases must be set to true for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#enable_private_endpoint ComposerEnvironment#enable_private_endpoint}

---

##### `enable_privately_used_public_ips`<sup>Optional</sup> <a name="enable_privately_used_public_ips" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.enablePrivatelyUsedPublicIps"></a>

```python
enable_privately_used_public_ips: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

When enabled, IPs from public (non-RFC1918) ranges can be used for ip_allocation_policy.cluster_ipv4_cidr_block and ip_allocation_policy.service_ipv4_cidr_block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#enable_privately_used_public_ips ComposerEnvironment#enable_privately_used_public_ips}

---

##### `master_ipv4_cidr_block`<sup>Optional</sup> <a name="master_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.masterIpv4CidrBlock"></a>

```python
master_ipv4_cidr_block: str
```

- *Type:* str

The IP range in CIDR notation to use for the hosted master network.

This range is used for assigning internal IP addresses to the cluster master or set of masters and to the internal load balancer virtual IP. This range must not overlap with any other ranges in use within the cluster's network. If left blank, the default value of '172.16.0.0/28' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#master_ipv4_cidr_block ComposerEnvironment#master_ipv4_cidr_block}

---

##### `web_server_ipv4_cidr_block`<sup>Optional</sup> <a name="web_server_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig.property.webServerIpv4CidrBlock"></a>

```python
web_server_ipv4_cidr_block: str
```

- *Type:* str

The CIDR block from which IP range for web server will be reserved.

Needs to be disjoint from master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#web_server_ipv4_cidr_block ComposerEnvironment#web_server_ipv4_cidr_block}

---

### ComposerEnvironmentConfigRecoveryConfig <a name="ComposerEnvironmentConfigRecoveryConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigRecoveryConfig(
  scheduled_snapshots_config: ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig.property.scheduledSnapshotsConfig">scheduled_snapshots_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a></code> | scheduled_snapshots_config block. |

---

##### `scheduled_snapshots_config`<sup>Optional</sup> <a name="scheduled_snapshots_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig.property.scheduledSnapshotsConfig"></a>

```python
scheduled_snapshots_config: ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a>

scheduled_snapshots_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#scheduled_snapshots_config ComposerEnvironment#scheduled_snapshots_config}

---

### ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig <a name="ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig(
  enabled: bool | IResolvable,
  snapshot_creation_schedule: str = None,
  snapshot_location: str = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | When enabled, Cloud Composer periodically saves snapshots of your environment to a Cloud Storage bucket. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.snapshotCreationSchedule">snapshot_creation_schedule</a></code> | <code>str</code> | Snapshot schedule, in the unix-cron format. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.snapshotLocation">snapshot_location</a></code> | <code>str</code> | the URI of a bucket folder where to save the snapshot. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.timeZone">time_zone</a></code> | <code>str</code> | A time zone for the schedule. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

When enabled, Cloud Composer periodically saves snapshots of your environment to a Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#enabled ComposerEnvironment#enabled}

---

##### `snapshot_creation_schedule`<sup>Optional</sup> <a name="snapshot_creation_schedule" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.snapshotCreationSchedule"></a>

```python
snapshot_creation_schedule: str
```

- *Type:* str

Snapshot schedule, in the unix-cron format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#snapshot_creation_schedule ComposerEnvironment#snapshot_creation_schedule}

---

##### `snapshot_location`<sup>Optional</sup> <a name="snapshot_location" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.snapshotLocation"></a>

```python
snapshot_location: str
```

- *Type:* str

the URI of a bucket folder where to save the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#snapshot_location ComposerEnvironment#snapshot_location}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

A time zone for the schedule.

This value is a time offset and does not take into account daylight saving time changes. Valid values are from UTC-12 to UTC+12. Examples: UTC, UTC-01, UTC+03.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#time_zone ComposerEnvironment#time_zone}

---

### ComposerEnvironmentConfigSoftwareConfig <a name="ComposerEnvironmentConfigSoftwareConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigSoftwareConfig(
  airflow_config_overrides: typing.Mapping[str] = None,
  cloud_data_lineage_integration: ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration = None,
  env_variables: typing.Mapping[str] = None,
  image_version: str = None,
  pypi_packages: typing.Mapping[str] = None,
  python_version: str = None,
  scheduler_count: typing.Union[int, float] = None,
  web_server_plugins_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.airflowConfigOverrides">airflow_config_overrides</a></code> | <code>typing.Mapping[str]</code> | Apache Airflow configuration properties to override. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.cloudDataLineageIntegration">cloud_data_lineage_integration</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a></code> | cloud_data_lineage_integration block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.envVariables">env_variables</a></code> | <code>typing.Mapping[str]</code> | Additional environment variables to provide to the Apache Airflow scheduler, worker, and webserver processes. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.imageVersion">image_version</a></code> | <code>str</code> | The version of the software running in the environment. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.pypiPackages">pypi_packages</a></code> | <code>typing.Mapping[str]</code> | Custom Python Package Index (PyPI) packages to be installed in the environment. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.pythonVersion">python_version</a></code> | <code>str</code> | The major version of Python used to run the Apache Airflow scheduler, worker, and webserver processes. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.schedulerCount">scheduler_count</a></code> | <code>typing.Union[int, float]</code> | The number of schedulers for Airflow. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.webServerPluginsMode">web_server_plugins_mode</a></code> | <code>str</code> | Should be either 'ENABLED' or 'DISABLED'. Defaults to 'ENABLED'. Used in Composer 3. |

---

##### `airflow_config_overrides`<sup>Optional</sup> <a name="airflow_config_overrides" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.airflowConfigOverrides"></a>

```python
airflow_config_overrides: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Apache Airflow configuration properties to override.

Property keys contain the section and property names, separated by a hyphen, for example "core-dags_are_paused_at_creation". Section names must not contain hyphens ("-"), opening square brackets ("["), or closing square brackets ("]"). The property name must not be empty and cannot contain "=" or ";". Section and property names cannot contain characters: "." Apache Airflow configuration property names must be written in snake_case. Property values can contain any character, and can be written in any lower/upper case format. Certain Apache Airflow configuration property values are blacklisted, and cannot be overridden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#airflow_config_overrides ComposerEnvironment#airflow_config_overrides}

---

##### `cloud_data_lineage_integration`<sup>Optional</sup> <a name="cloud_data_lineage_integration" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.cloudDataLineageIntegration"></a>

```python
cloud_data_lineage_integration: ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a>

cloud_data_lineage_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#cloud_data_lineage_integration ComposerEnvironment#cloud_data_lineage_integration}

---

##### `env_variables`<sup>Optional</sup> <a name="env_variables" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.envVariables"></a>

```python
env_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Additional environment variables to provide to the Apache Airflow scheduler, worker, and webserver processes.

Environment variable names must match the regular expression [a-zA-Z_][a-zA-Z0-9_]*. They cannot specify Apache Airflow software configuration overrides (they cannot match the regular expression AIRFLOW__[A-Z0-9_]+__[A-Z0-9_]+), and they cannot match any of the following reserved names: AIRFLOW_HOME C_FORCE_ROOT CONTAINER_NAME DAGS_FOLDER GCP_PROJECT GCS_BUCKET GKE_CLUSTER_NAME SQL_DATABASE SQL_INSTANCE SQL_PASSWORD SQL_PROJECT SQL_REGION SQL_USER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#env_variables ComposerEnvironment#env_variables}

---

##### `image_version`<sup>Optional</sup> <a name="image_version" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.imageVersion"></a>

```python
image_version: str
```

- *Type:* str

The version of the software running in the environment.

This encapsulates both the version of Cloud Composer functionality and the version of Apache Airflow. It must match the regular expression composer-([0-9]+(.[0-9]+.[0-9]+(-preview.[0-9]+)?)?|latest)-airflow-([0-9]+(.[0-9]+(.[0-9]+)?)?). The Cloud Composer portion of the image version is a full semantic version, or an alias in the form of major version number or 'latest'. The Apache Airflow portion of the image version is a full semantic version that points to one of the supported Apache Airflow versions, or an alias in the form of only major or major.minor versions specified. See documentation for more details and version list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#image_version ComposerEnvironment#image_version}

---

##### `pypi_packages`<sup>Optional</sup> <a name="pypi_packages" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.pypiPackages"></a>

```python
pypi_packages: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Custom Python Package Index (PyPI) packages to be installed in the environment.

Keys refer to the lowercase package name (e.g. "numpy"). Values are the lowercase extras and version specifier (e.g. "==1.12.0", "[devel,gcp_api]", "[devel]>=1.8.2, <1.9.2"). To specify a package without pinning it to a version specifier, use the empty string as the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#pypi_packages ComposerEnvironment#pypi_packages}

---

##### `python_version`<sup>Optional</sup> <a name="python_version" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.pythonVersion"></a>

```python
python_version: str
```

- *Type:* str

The major version of Python used to run the Apache Airflow scheduler, worker, and webserver processes.

Can be set to '2' or '3'. If not specified, the default is '2'. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use Python major version 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#python_version ComposerEnvironment#python_version}

---

##### `scheduler_count`<sup>Optional</sup> <a name="scheduler_count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.schedulerCount"></a>

```python
scheduler_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of schedulers for Airflow. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#scheduler_count ComposerEnvironment#scheduler_count}

---

##### `web_server_plugins_mode`<sup>Optional</sup> <a name="web_server_plugins_mode" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig.property.webServerPluginsMode"></a>

```python
web_server_plugins_mode: str
```

- *Type:* str

Should be either 'ENABLED' or 'DISABLED'. Defaults to 'ENABLED'. Used in Composer 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#web_server_plugins_mode ComposerEnvironment#web_server_plugins_mode}

---

### ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration <a name="ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration(
  enabled: bool | IResolvable
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether or not Cloud Data Lineage integration is enabled. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether or not Cloud Data Lineage integration is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#enabled ComposerEnvironment#enabled}

---

### ComposerEnvironmentConfigWebServerConfig <a name="ComposerEnvironmentConfigWebServerConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigWebServerConfig(
  machine_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig.property.machineType">machine_type</a></code> | <code>str</code> | Optional. |

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

Optional.

Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. If not specified, composer-n1-webserver-2 will be used. Value custom is returned only in response, if Airflow web server parameters were manually changed to a non-standard values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#machine_type ComposerEnvironment#machine_type}

---

### ComposerEnvironmentConfigWebServerNetworkAccessControl <a name="ComposerEnvironmentConfigWebServerNetworkAccessControl" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl(
  allowed_ip_range: IResolvable | typing.List[ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl.property.allowedIpRange">allowed_ip_range</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>]</code> | allowed_ip_range block. |

---

##### `allowed_ip_range`<sup>Optional</sup> <a name="allowed_ip_range" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl.property.allowedIpRange"></a>

```python
allowed_ip_range: IResolvable | typing.List[ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>]

allowed_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#allowed_ip_range ComposerEnvironment#allowed_ip_range}

---

### ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange <a name="ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange(
  value: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.property.value">value</a></code> | <code>str</code> | IP address or range, defined using CIDR notation, of requests that this rule applies to. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.property.description">description</a></code> | <code>str</code> | A description of this ip range. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.property.value"></a>

```python
value: str
```

- *Type:* str

IP address or range, defined using CIDR notation, of requests that this rule applies to.

Examples: 192.168.1.1 or 192.168.0.0/16 or 2001:db8::/32 or 2001:0db8:0000:0042:0000:8a2e:0370:7334. IP range prefixes should be properly truncated. For example, 1.2.3.4/24 should be truncated to 1.2.3.0/24. Similarly, for IPv6, 2001:db8::1/32 should be truncated to 2001:db8::/32.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#value ComposerEnvironment#value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.property.description"></a>

```python
description: str
```

- *Type:* str

A description of this ip range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#description ComposerEnvironment#description}

---

### ComposerEnvironmentConfigWorkloadsConfig <a name="ComposerEnvironmentConfigWorkloadsConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig(
  dag_processor: ComposerEnvironmentConfigWorkloadsConfigDagProcessor = None,
  scheduler: ComposerEnvironmentConfigWorkloadsConfigScheduler = None,
  triggerer: ComposerEnvironmentConfigWorkloadsConfigTriggerer = None,
  web_server: ComposerEnvironmentConfigWorkloadsConfigWebServer = None,
  worker: ComposerEnvironmentConfigWorkloadsConfigWorker = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.property.dagProcessor">dag_processor</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessor">ComposerEnvironmentConfigWorkloadsConfigDagProcessor</a></code> | dag_processor block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.property.scheduler">scheduler</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler">ComposerEnvironmentConfigWorkloadsConfigScheduler</a></code> | scheduler block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.property.triggerer">triggerer</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer">ComposerEnvironmentConfigWorkloadsConfigTriggerer</a></code> | triggerer block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.property.webServer">web_server</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer">ComposerEnvironmentConfigWorkloadsConfigWebServer</a></code> | web_server block. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.property.worker">worker</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker">ComposerEnvironmentConfigWorkloadsConfigWorker</a></code> | worker block. |

---

##### `dag_processor`<sup>Optional</sup> <a name="dag_processor" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.property.dagProcessor"></a>

```python
dag_processor: ComposerEnvironmentConfigWorkloadsConfigDagProcessor
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessor">ComposerEnvironmentConfigWorkloadsConfigDagProcessor</a>

dag_processor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#dag_processor ComposerEnvironment#dag_processor}

---

##### `scheduler`<sup>Optional</sup> <a name="scheduler" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.property.scheduler"></a>

```python
scheduler: ComposerEnvironmentConfigWorkloadsConfigScheduler
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler">ComposerEnvironmentConfigWorkloadsConfigScheduler</a>

scheduler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#scheduler ComposerEnvironment#scheduler}

---

##### `triggerer`<sup>Optional</sup> <a name="triggerer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.property.triggerer"></a>

```python
triggerer: ComposerEnvironmentConfigWorkloadsConfigTriggerer
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer">ComposerEnvironmentConfigWorkloadsConfigTriggerer</a>

triggerer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#triggerer ComposerEnvironment#triggerer}

---

##### `web_server`<sup>Optional</sup> <a name="web_server" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.property.webServer"></a>

```python
web_server: ComposerEnvironmentConfigWorkloadsConfigWebServer
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer">ComposerEnvironmentConfigWorkloadsConfigWebServer</a>

web_server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#web_server ComposerEnvironment#web_server}

---

##### `worker`<sup>Optional</sup> <a name="worker" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig.property.worker"></a>

```python
worker: ComposerEnvironmentConfigWorkloadsConfigWorker
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker">ComposerEnvironmentConfigWorkloadsConfigWorker</a>

worker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#worker ComposerEnvironment#worker}

---

### ComposerEnvironmentConfigWorkloadsConfigDagProcessor <a name="ComposerEnvironmentConfigWorkloadsConfigDagProcessor" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessor.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessor(
  count: typing.Union[int, float] = None,
  cpu: typing.Union[int, float] = None,
  memory_gb: typing.Union[int, float] = None,
  storage_gb: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Number of DAG processors. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | CPU request and limit for DAG processor. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.memoryGb">memory_gb</a></code> | <code>typing.Union[int, float]</code> | Memory (GB) request and limit for DAG processor. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.storageGb">storage_gb</a></code> | <code>typing.Union[int, float]</code> | Storage (GB) request and limit for DAG processor. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of DAG processors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#count ComposerEnvironment#count}

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

CPU request and limit for DAG processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#cpu ComposerEnvironment#cpu}

---

##### `memory_gb`<sup>Optional</sup> <a name="memory_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.memoryGb"></a>

```python
memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Memory (GB) request and limit for DAG processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#memory_gb ComposerEnvironment#memory_gb}

---

##### `storage_gb`<sup>Optional</sup> <a name="storage_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessor.property.storageGb"></a>

```python
storage_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Storage (GB) request and limit for DAG processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#storage_gb ComposerEnvironment#storage_gb}

---

### ComposerEnvironmentConfigWorkloadsConfigScheduler <a name="ComposerEnvironmentConfigWorkloadsConfigScheduler" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler(
  count: typing.Union[int, float] = None,
  cpu: typing.Union[int, float] = None,
  memory_gb: typing.Union[int, float] = None,
  storage_gb: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.property.count">count</a></code> | <code>typing.Union[int, float]</code> | The number of schedulers. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | CPU request and limit for a single Airflow scheduler replica. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.property.memoryGb">memory_gb</a></code> | <code>typing.Union[int, float]</code> | Memory (GB) request and limit for a single Airflow scheduler replica. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.property.storageGb">storage_gb</a></code> | <code>typing.Union[int, float]</code> | Storage (GB) request and limit for a single Airflow scheduler replica. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of schedulers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#count ComposerEnvironment#count}

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

CPU request and limit for a single Airflow scheduler replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#cpu ComposerEnvironment#cpu}

---

##### `memory_gb`<sup>Optional</sup> <a name="memory_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.property.memoryGb"></a>

```python
memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Memory (GB) request and limit for a single Airflow scheduler replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#memory_gb ComposerEnvironment#memory_gb}

---

##### `storage_gb`<sup>Optional</sup> <a name="storage_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler.property.storageGb"></a>

```python
storage_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Storage (GB) request and limit for a single Airflow scheduler replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#storage_gb ComposerEnvironment#storage_gb}

---

### ComposerEnvironmentConfigWorkloadsConfigTriggerer <a name="ComposerEnvironmentConfigWorkloadsConfigTriggerer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer(
  count: typing.Union[int, float],
  cpu: typing.Union[int, float],
  memory_gb: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer.property.count">count</a></code> | <code>typing.Union[int, float]</code> | The number of triggerers. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | CPU request and limit for a single Airflow triggerer replica. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer.property.memoryGb">memory_gb</a></code> | <code>typing.Union[int, float]</code> | Memory (GB) request and limit for a single Airflow triggerer replica. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of triggerers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#count ComposerEnvironment#count}

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

CPU request and limit for a single Airflow triggerer replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#cpu ComposerEnvironment#cpu}

---

##### `memory_gb`<sup>Required</sup> <a name="memory_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer.property.memoryGb"></a>

```python
memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Memory (GB) request and limit for a single Airflow triggerer replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#memory_gb ComposerEnvironment#memory_gb}

---

### ComposerEnvironmentConfigWorkloadsConfigWebServer <a name="ComposerEnvironmentConfigWorkloadsConfigWebServer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer(
  cpu: typing.Union[int, float] = None,
  memory_gb: typing.Union[int, float] = None,
  storage_gb: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | CPU request and limit for Airflow web server. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer.property.memoryGb">memory_gb</a></code> | <code>typing.Union[int, float]</code> | Memory (GB) request and limit for Airflow web server. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer.property.storageGb">storage_gb</a></code> | <code>typing.Union[int, float]</code> | Storage (GB) request and limit for Airflow web server. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

CPU request and limit for Airflow web server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#cpu ComposerEnvironment#cpu}

---

##### `memory_gb`<sup>Optional</sup> <a name="memory_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer.property.memoryGb"></a>

```python
memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Memory (GB) request and limit for Airflow web server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#memory_gb ComposerEnvironment#memory_gb}

---

##### `storage_gb`<sup>Optional</sup> <a name="storage_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer.property.storageGb"></a>

```python
storage_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Storage (GB) request and limit for Airflow web server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#storage_gb ComposerEnvironment#storage_gb}

---

### ComposerEnvironmentConfigWorkloadsConfigWorker <a name="ComposerEnvironmentConfigWorkloadsConfigWorker" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker(
  cpu: typing.Union[int, float] = None,
  max_count: typing.Union[int, float] = None,
  memory_gb: typing.Union[int, float] = None,
  min_count: typing.Union[int, float] = None,
  storage_gb: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | CPU request and limit for a single Airflow worker replica. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.maxCount">max_count</a></code> | <code>typing.Union[int, float]</code> | Maximum number of workers for autoscaling. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.memoryGb">memory_gb</a></code> | <code>typing.Union[int, float]</code> | Memory (GB) request and limit for a single Airflow worker replica. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.minCount">min_count</a></code> | <code>typing.Union[int, float]</code> | Minimum number of workers for autoscaling. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.storageGb">storage_gb</a></code> | <code>typing.Union[int, float]</code> | Storage (GB) request and limit for a single Airflow worker replica. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

CPU request and limit for a single Airflow worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#cpu ComposerEnvironment#cpu}

---

##### `max_count`<sup>Optional</sup> <a name="max_count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.maxCount"></a>

```python
max_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of workers for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#max_count ComposerEnvironment#max_count}

---

##### `memory_gb`<sup>Optional</sup> <a name="memory_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.memoryGb"></a>

```python
memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Memory (GB) request and limit for a single Airflow worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#memory_gb ComposerEnvironment#memory_gb}

---

##### `min_count`<sup>Optional</sup> <a name="min_count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.minCount"></a>

```python
min_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of workers for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#min_count ComposerEnvironment#min_count}

---

##### `storage_gb`<sup>Optional</sup> <a name="storage_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker.property.storageGb"></a>

```python
storage_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Storage (GB) request and limit for a single Airflow worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#storage_gb ComposerEnvironment#storage_gb}

---

### ComposerEnvironmentStorageConfig <a name="ComposerEnvironmentStorageConfig" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentStorageConfig(
  bucket: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfig.property.bucket">bucket</a></code> | <code>str</code> | Optional. Name of an existing Cloud Storage bucket to be used by the environment. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Optional. Name of an existing Cloud Storage bucket to be used by the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#bucket ComposerEnvironment#bucket}

---

### ComposerEnvironmentTimeouts <a name="ComposerEnvironmentTimeouts" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#create ComposerEnvironment#create}. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#delete ComposerEnvironment#delete}. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#update ComposerEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#create ComposerEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#delete ComposerEnvironment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#update ComposerEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComposerEnvironmentConfigAOutputReference <a name="ComposerEnvironmentConfigAOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putDatabaseConfig">put_database_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putDataRetentionConfig">put_data_retention_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putEncryptionConfig">put_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putMasterAuthorizedNetworksConfig">put_master_authorized_networks_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putNodeConfig">put_node_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putPrivateEnvironmentConfig">put_private_environment_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putRecoveryConfig">put_recovery_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putSoftwareConfig">put_software_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWebServerConfig">put_web_server_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWebServerNetworkAccessControl">put_web_server_network_access_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWorkloadsConfig">put_workloads_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetDatabaseConfig">reset_database_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetDataRetentionConfig">reset_data_retention_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetEnablePrivateBuildsOnly">reset_enable_private_builds_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetEnablePrivateEnvironment">reset_enable_private_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetEncryptionConfig">reset_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetEnvironmentSize">reset_environment_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetMasterAuthorizedNetworksConfig">reset_master_authorized_networks_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetNodeConfig">reset_node_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetNodeCount">reset_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetPrivateEnvironmentConfig">reset_private_environment_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetRecoveryConfig">reset_recovery_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetResilienceMode">reset_resilience_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetSoftwareConfig">reset_software_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetWebServerConfig">reset_web_server_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetWebServerNetworkAccessControl">reset_web_server_network_access_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetWorkloadsConfig">reset_workloads_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_database_config` <a name="put_database_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putDatabaseConfig"></a>

```python
def put_database_config(
  machine_type: str = None,
  zone: str = None
) -> None
```

###### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putDatabaseConfig.parameter.machineType"></a>

- *Type:* str

Optional.

Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. If not specified, db-n1-standard-2 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#machine_type ComposerEnvironment#machine_type}

---

###### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putDatabaseConfig.parameter.zone"></a>

- *Type:* str

Optional. Cloud SQL database preferred zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#zone ComposerEnvironment#zone}

---

##### `put_data_retention_config` <a name="put_data_retention_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putDataRetentionConfig"></a>

```python
def put_data_retention_config(
  airflow_metadata_retention_config: IResolvable | typing.List[ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig] = None,
  task_logs_retention_config: IResolvable | typing.List[ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig] = None
) -> None
```

###### `airflow_metadata_retention_config`<sup>Optional</sup> <a name="airflow_metadata_retention_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putDataRetentionConfig.parameter.airflowMetadataRetentionConfig"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a>]

airflow_metadata_retention_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#airflow_metadata_retention_config ComposerEnvironment#airflow_metadata_retention_config}

---

###### `task_logs_retention_config`<sup>Optional</sup> <a name="task_logs_retention_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putDataRetentionConfig.parameter.taskLogsRetentionConfig"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>]

task_logs_retention_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#task_logs_retention_config ComposerEnvironment#task_logs_retention_config}

---

##### `put_encryption_config` <a name="put_encryption_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putEncryptionConfig"></a>

```python
def put_encryption_config(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putEncryptionConfig.parameter.kmsKeyName"></a>

- *Type:* str

Optional. Customer-managed Encryption Key available through Google's Key Management Service. Cannot be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#kms_key_name ComposerEnvironment#kms_key_name}

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  end_time: str,
  recurrence: str,
  start_time: str
) -> None
```

###### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putMaintenanceWindow.parameter.endTime"></a>

- *Type:* str

Maintenance window end time.

It is used only to calculate the duration of the maintenance window. The value for end-time must be in the future, relative to 'start_time'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#end_time ComposerEnvironment#end_time}

---

###### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putMaintenanceWindow.parameter.recurrence"></a>

- *Type:* str

Maintenance window recurrence.

Format is a subset of RFC-5545 (https://tools.ietf.org/html/rfc5545) 'RRULE'. The only allowed values for 'FREQ' field are 'FREQ=DAILY' and 'FREQ=WEEKLY;BYDAY=...'. Example values: 'FREQ=WEEKLY;BYDAY=TU,WE', 'FREQ=DAILY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#recurrence ComposerEnvironment#recurrence}

---

###### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putMaintenanceWindow.parameter.startTime"></a>

- *Type:* str

Start time of the first recurrence of the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#start_time ComposerEnvironment#start_time}

---

##### `put_master_authorized_networks_config` <a name="put_master_authorized_networks_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putMasterAuthorizedNetworksConfig"></a>

```python
def put_master_authorized_networks_config(
  enabled: bool | IResolvable,
  cidr_blocks: IResolvable | typing.List[ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks] = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putMasterAuthorizedNetworksConfig.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Whether or not master authorized networks is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#enabled ComposerEnvironment#enabled}

---

###### `cidr_blocks`<sup>Optional</sup> <a name="cidr_blocks" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putMasterAuthorizedNetworksConfig.parameter.cidrBlocks"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>]

cidr_blocks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#cidr_blocks ComposerEnvironment#cidr_blocks}

---

##### `put_node_config` <a name="put_node_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putNodeConfig"></a>

```python
def put_node_config(
  composer_internal_ipv4_cidr_block: str = None,
  composer_network_attachment: str = None,
  disk_size_gb: typing.Union[int, float] = None,
  enable_ip_masq_agent: bool | IResolvable = None,
  ip_allocation_policy: ComposerEnvironmentConfigNodeConfigIpAllocationPolicy = None,
  machine_type: str = None,
  network: str = None,
  oauth_scopes: typing.List[str] = None,
  service_account: str = None,
  subnetwork: str = None,
  tags: typing.List[str] = None,
  zone: str = None
) -> None
```

###### `composer_internal_ipv4_cidr_block`<sup>Optional</sup> <a name="composer_internal_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putNodeConfig.parameter.composerInternalIpv4CidrBlock"></a>

- *Type:* str

IPv4 cidr range that will be used by Composer internal components.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#composer_internal_ipv4_cidr_block ComposerEnvironment#composer_internal_ipv4_cidr_block}

---

###### `composer_network_attachment`<sup>Optional</sup> <a name="composer_network_attachment" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putNodeConfig.parameter.composerNetworkAttachment"></a>

- *Type:* str

PSC (Private Service Connect) Network entry point.

Customers can pre-create the Network Attachment and point Cloud Composer environment to use. It is possible to share network attachment among many environments, provided enough IP addresses are available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#composer_network_attachment ComposerEnvironment#composer_network_attachment}

---

###### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putNodeConfig.parameter.diskSizeGb"></a>

- *Type:* typing.Union[int, float]

The disk size in GB used for node VMs.

Minimum size is 20GB. If unspecified, defaults to 100GB. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#disk_size_gb ComposerEnvironment#disk_size_gb}

---

###### `enable_ip_masq_agent`<sup>Optional</sup> <a name="enable_ip_masq_agent" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putNodeConfig.parameter.enableIpMasqAgent"></a>

- *Type:* bool | cdktf.IResolvable

Deploys 'ip-masq-agent' daemon set in the GKE cluster and defines nonMasqueradeCIDRs equals to pod IP range so IP masquerading is used for all destination addresses, except between pods traffic.

See: https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#enable_ip_masq_agent ComposerEnvironment#enable_ip_masq_agent}

---

###### `ip_allocation_policy`<sup>Optional</sup> <a name="ip_allocation_policy" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putNodeConfig.parameter.ipAllocationPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy">ComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a>

ip_allocation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#ip_allocation_policy ComposerEnvironment#ip_allocation_policy}

---

###### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putNodeConfig.parameter.machineType"></a>

- *Type:* str

The Compute Engine machine type used for cluster instances, specified as a name or relative resource name.

For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment's project and region/zone. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#machine_type ComposerEnvironment#machine_type}

---

###### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putNodeConfig.parameter.network"></a>

- *Type:* str

The Compute Engine machine type used for cluster instances, specified as a name or relative resource name.

For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment's project and region/zone. The network must belong to the environment's project. If unspecified, the "default" network ID in the environment's project is used. If a Custom Subnet Network is provided, subnetwork must also be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#network ComposerEnvironment#network}

---

###### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putNodeConfig.parameter.oauthScopes"></a>

- *Type:* typing.List[str]

The set of Google API scopes to be made available on all node VMs.

Cannot be updated. If empty, defaults to ["https://www.googleapis.com/auth/cloud-platform"]. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#oauth_scopes ComposerEnvironment#oauth_scopes}

---

###### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putNodeConfig.parameter.serviceAccount"></a>

- *Type:* str

The Google Cloud Platform Service Account to be used by the node VMs.

If a service account is not specified, the "default" Compute Engine service account is used. Cannot be updated. If given, note that the service account must have roles/composer.worker for any GCP resources created under the Cloud Composer Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#service_account ComposerEnvironment#service_account}

---

###### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putNodeConfig.parameter.subnetwork"></a>

- *Type:* str

The Compute Engine subnetwork to be used for machine communications, specified as a self-link, relative resource name (e.g. "projects/{project}/regions/{region}/subnetworks/{subnetwork}"), or by name. If subnetwork is provided, network must also be provided and the subnetwork must belong to the enclosing environment's project and region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#subnetwork ComposerEnvironment#subnetwork}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putNodeConfig.parameter.tags"></a>

- *Type:* typing.List[str]

The list of instance tags applied to all node VMs.

Tags are used to identify valid sources or targets for network firewalls. Each tag within the list must comply with RFC1035. Cannot be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#tags ComposerEnvironment#tags}

---

###### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putNodeConfig.parameter.zone"></a>

- *Type:* str

The Compute Engine zone in which to deploy the VMs running the Apache Airflow software, specified as the zone name or relative resource name (e.g. "projects/{project}/zones/{zone}"). Must belong to the enclosing environment's project and region. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#zone ComposerEnvironment#zone}

---

##### `put_private_environment_config` <a name="put_private_environment_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putPrivateEnvironmentConfig"></a>

```python
def put_private_environment_config(
  cloud_composer_connection_subnetwork: str = None,
  cloud_composer_network_ipv4_cidr_block: str = None,
  cloud_sql_ipv4_cidr_block: str = None,
  connection_type: str = None,
  enable_private_endpoint: bool | IResolvable = None,
  enable_privately_used_public_ips: bool | IResolvable = None,
  master_ipv4_cidr_block: str = None,
  web_server_ipv4_cidr_block: str = None
) -> None
```

###### `cloud_composer_connection_subnetwork`<sup>Optional</sup> <a name="cloud_composer_connection_subnetwork" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putPrivateEnvironmentConfig.parameter.cloudComposerConnectionSubnetwork"></a>

- *Type:* str

When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork.

This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#cloud_composer_connection_subnetwork ComposerEnvironment#cloud_composer_connection_subnetwork}

---

###### `cloud_composer_network_ipv4_cidr_block`<sup>Optional</sup> <a name="cloud_composer_network_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putPrivateEnvironmentConfig.parameter.cloudComposerNetworkIpv4CidrBlock"></a>

- *Type:* str

The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved.

Needs to be disjoint from private_cluster_config.master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#cloud_composer_network_ipv4_cidr_block ComposerEnvironment#cloud_composer_network_ipv4_cidr_block}

---

###### `cloud_sql_ipv4_cidr_block`<sup>Optional</sup> <a name="cloud_sql_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putPrivateEnvironmentConfig.parameter.cloudSqlIpv4CidrBlock"></a>

- *Type:* str

The CIDR block from which IP range in tenant project will be reserved for Cloud SQL.

Needs to be disjoint from web_server_ipv4_cidr_block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#cloud_sql_ipv4_cidr_block ComposerEnvironment#cloud_sql_ipv4_cidr_block}

---

###### `connection_type`<sup>Optional</sup> <a name="connection_type" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putPrivateEnvironmentConfig.parameter.connectionType"></a>

- *Type:* str

Mode of internal communication within the Composer environment. Must be one of "VPC_PEERING" or "PRIVATE_SERVICE_CONNECT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#connection_type ComposerEnvironment#connection_type}

---

###### `enable_private_endpoint`<sup>Optional</sup> <a name="enable_private_endpoint" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putPrivateEnvironmentConfig.parameter.enablePrivateEndpoint"></a>

- *Type:* bool | cdktf.IResolvable

If true, access to the public endpoint of the GKE cluster is denied.

If this field is set to true, ip_allocation_policy.use_ip_aliases must be set to true for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#enable_private_endpoint ComposerEnvironment#enable_private_endpoint}

---

###### `enable_privately_used_public_ips`<sup>Optional</sup> <a name="enable_privately_used_public_ips" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putPrivateEnvironmentConfig.parameter.enablePrivatelyUsedPublicIps"></a>

- *Type:* bool | cdktf.IResolvable

When enabled, IPs from public (non-RFC1918) ranges can be used for ip_allocation_policy.cluster_ipv4_cidr_block and ip_allocation_policy.service_ipv4_cidr_block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#enable_privately_used_public_ips ComposerEnvironment#enable_privately_used_public_ips}

---

###### `master_ipv4_cidr_block`<sup>Optional</sup> <a name="master_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putPrivateEnvironmentConfig.parameter.masterIpv4CidrBlock"></a>

- *Type:* str

The IP range in CIDR notation to use for the hosted master network.

This range is used for assigning internal IP addresses to the cluster master or set of masters and to the internal load balancer virtual IP. This range must not overlap with any other ranges in use within the cluster's network. If left blank, the default value of '172.16.0.0/28' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#master_ipv4_cidr_block ComposerEnvironment#master_ipv4_cidr_block}

---

###### `web_server_ipv4_cidr_block`<sup>Optional</sup> <a name="web_server_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putPrivateEnvironmentConfig.parameter.webServerIpv4CidrBlock"></a>

- *Type:* str

The CIDR block from which IP range for web server will be reserved.

Needs to be disjoint from master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#web_server_ipv4_cidr_block ComposerEnvironment#web_server_ipv4_cidr_block}

---

##### `put_recovery_config` <a name="put_recovery_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putRecoveryConfig"></a>

```python
def put_recovery_config(
  scheduled_snapshots_config: ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig = None
) -> None
```

###### `scheduled_snapshots_config`<sup>Optional</sup> <a name="scheduled_snapshots_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putRecoveryConfig.parameter.scheduledSnapshotsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a>

scheduled_snapshots_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#scheduled_snapshots_config ComposerEnvironment#scheduled_snapshots_config}

---

##### `put_software_config` <a name="put_software_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putSoftwareConfig"></a>

```python
def put_software_config(
  airflow_config_overrides: typing.Mapping[str] = None,
  cloud_data_lineage_integration: ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration = None,
  env_variables: typing.Mapping[str] = None,
  image_version: str = None,
  pypi_packages: typing.Mapping[str] = None,
  python_version: str = None,
  scheduler_count: typing.Union[int, float] = None,
  web_server_plugins_mode: str = None
) -> None
```

###### `airflow_config_overrides`<sup>Optional</sup> <a name="airflow_config_overrides" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putSoftwareConfig.parameter.airflowConfigOverrides"></a>

- *Type:* typing.Mapping[str]

Apache Airflow configuration properties to override.

Property keys contain the section and property names, separated by a hyphen, for example "core-dags_are_paused_at_creation". Section names must not contain hyphens ("-"), opening square brackets ("["), or closing square brackets ("]"). The property name must not be empty and cannot contain "=" or ";". Section and property names cannot contain characters: "." Apache Airflow configuration property names must be written in snake_case. Property values can contain any character, and can be written in any lower/upper case format. Certain Apache Airflow configuration property values are blacklisted, and cannot be overridden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#airflow_config_overrides ComposerEnvironment#airflow_config_overrides}

---

###### `cloud_data_lineage_integration`<sup>Optional</sup> <a name="cloud_data_lineage_integration" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putSoftwareConfig.parameter.cloudDataLineageIntegration"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a>

cloud_data_lineage_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#cloud_data_lineage_integration ComposerEnvironment#cloud_data_lineage_integration}

---

###### `env_variables`<sup>Optional</sup> <a name="env_variables" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putSoftwareConfig.parameter.envVariables"></a>

- *Type:* typing.Mapping[str]

Additional environment variables to provide to the Apache Airflow scheduler, worker, and webserver processes.

Environment variable names must match the regular expression [a-zA-Z_][a-zA-Z0-9_]*. They cannot specify Apache Airflow software configuration overrides (they cannot match the regular expression AIRFLOW__[A-Z0-9_]+__[A-Z0-9_]+), and they cannot match any of the following reserved names: AIRFLOW_HOME C_FORCE_ROOT CONTAINER_NAME DAGS_FOLDER GCP_PROJECT GCS_BUCKET GKE_CLUSTER_NAME SQL_DATABASE SQL_INSTANCE SQL_PASSWORD SQL_PROJECT SQL_REGION SQL_USER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#env_variables ComposerEnvironment#env_variables}

---

###### `image_version`<sup>Optional</sup> <a name="image_version" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putSoftwareConfig.parameter.imageVersion"></a>

- *Type:* str

The version of the software running in the environment.

This encapsulates both the version of Cloud Composer functionality and the version of Apache Airflow. It must match the regular expression composer-([0-9]+(.[0-9]+.[0-9]+(-preview.[0-9]+)?)?|latest)-airflow-([0-9]+(.[0-9]+(.[0-9]+)?)?). The Cloud Composer portion of the image version is a full semantic version, or an alias in the form of major version number or 'latest'. The Apache Airflow portion of the image version is a full semantic version that points to one of the supported Apache Airflow versions, or an alias in the form of only major or major.minor versions specified. See documentation for more details and version list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#image_version ComposerEnvironment#image_version}

---

###### `pypi_packages`<sup>Optional</sup> <a name="pypi_packages" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putSoftwareConfig.parameter.pypiPackages"></a>

- *Type:* typing.Mapping[str]

Custom Python Package Index (PyPI) packages to be installed in the environment.

Keys refer to the lowercase package name (e.g. "numpy"). Values are the lowercase extras and version specifier (e.g. "==1.12.0", "[devel,gcp_api]", "[devel]>=1.8.2, <1.9.2"). To specify a package without pinning it to a version specifier, use the empty string as the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#pypi_packages ComposerEnvironment#pypi_packages}

---

###### `python_version`<sup>Optional</sup> <a name="python_version" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putSoftwareConfig.parameter.pythonVersion"></a>

- *Type:* str

The major version of Python used to run the Apache Airflow scheduler, worker, and webserver processes.

Can be set to '2' or '3'. If not specified, the default is '2'. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use Python major version 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#python_version ComposerEnvironment#python_version}

---

###### `scheduler_count`<sup>Optional</sup> <a name="scheduler_count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putSoftwareConfig.parameter.schedulerCount"></a>

- *Type:* typing.Union[int, float]

The number of schedulers for Airflow. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#scheduler_count ComposerEnvironment#scheduler_count}

---

###### `web_server_plugins_mode`<sup>Optional</sup> <a name="web_server_plugins_mode" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putSoftwareConfig.parameter.webServerPluginsMode"></a>

- *Type:* str

Should be either 'ENABLED' or 'DISABLED'. Defaults to 'ENABLED'. Used in Composer 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#web_server_plugins_mode ComposerEnvironment#web_server_plugins_mode}

---

##### `put_web_server_config` <a name="put_web_server_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWebServerConfig"></a>

```python
def put_web_server_config(
  machine_type: str
) -> None
```

###### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWebServerConfig.parameter.machineType"></a>

- *Type:* str

Optional.

Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. If not specified, composer-n1-webserver-2 will be used. Value custom is returned only in response, if Airflow web server parameters were manually changed to a non-standard values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#machine_type ComposerEnvironment#machine_type}

---

##### `put_web_server_network_access_control` <a name="put_web_server_network_access_control" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWebServerNetworkAccessControl"></a>

```python
def put_web_server_network_access_control(
  allowed_ip_range: IResolvable | typing.List[ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange] = None
) -> None
```

###### `allowed_ip_range`<sup>Optional</sup> <a name="allowed_ip_range" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWebServerNetworkAccessControl.parameter.allowedIpRange"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>]

allowed_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#allowed_ip_range ComposerEnvironment#allowed_ip_range}

---

##### `put_workloads_config` <a name="put_workloads_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWorkloadsConfig"></a>

```python
def put_workloads_config(
  dag_processor: ComposerEnvironmentConfigWorkloadsConfigDagProcessor = None,
  scheduler: ComposerEnvironmentConfigWorkloadsConfigScheduler = None,
  triggerer: ComposerEnvironmentConfigWorkloadsConfigTriggerer = None,
  web_server: ComposerEnvironmentConfigWorkloadsConfigWebServer = None,
  worker: ComposerEnvironmentConfigWorkloadsConfigWorker = None
) -> None
```

###### `dag_processor`<sup>Optional</sup> <a name="dag_processor" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWorkloadsConfig.parameter.dagProcessor"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessor">ComposerEnvironmentConfigWorkloadsConfigDagProcessor</a>

dag_processor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#dag_processor ComposerEnvironment#dag_processor}

---

###### `scheduler`<sup>Optional</sup> <a name="scheduler" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWorkloadsConfig.parameter.scheduler"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler">ComposerEnvironmentConfigWorkloadsConfigScheduler</a>

scheduler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#scheduler ComposerEnvironment#scheduler}

---

###### `triggerer`<sup>Optional</sup> <a name="triggerer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWorkloadsConfig.parameter.triggerer"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer">ComposerEnvironmentConfigWorkloadsConfigTriggerer</a>

triggerer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#triggerer ComposerEnvironment#triggerer}

---

###### `web_server`<sup>Optional</sup> <a name="web_server" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWorkloadsConfig.parameter.webServer"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer">ComposerEnvironmentConfigWorkloadsConfigWebServer</a>

web_server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#web_server ComposerEnvironment#web_server}

---

###### `worker`<sup>Optional</sup> <a name="worker" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.putWorkloadsConfig.parameter.worker"></a>

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker">ComposerEnvironmentConfigWorkloadsConfigWorker</a>

worker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#worker ComposerEnvironment#worker}

---

##### `reset_database_config` <a name="reset_database_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetDatabaseConfig"></a>

```python
def reset_database_config() -> None
```

##### `reset_data_retention_config` <a name="reset_data_retention_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetDataRetentionConfig"></a>

```python
def reset_data_retention_config() -> None
```

##### `reset_enable_private_builds_only` <a name="reset_enable_private_builds_only" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetEnablePrivateBuildsOnly"></a>

```python
def reset_enable_private_builds_only() -> None
```

##### `reset_enable_private_environment` <a name="reset_enable_private_environment" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetEnablePrivateEnvironment"></a>

```python
def reset_enable_private_environment() -> None
```

##### `reset_encryption_config` <a name="reset_encryption_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetEncryptionConfig"></a>

```python
def reset_encryption_config() -> None
```

##### `reset_environment_size` <a name="reset_environment_size" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetEnvironmentSize"></a>

```python
def reset_environment_size() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_master_authorized_networks_config` <a name="reset_master_authorized_networks_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetMasterAuthorizedNetworksConfig"></a>

```python
def reset_master_authorized_networks_config() -> None
```

##### `reset_node_config` <a name="reset_node_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetNodeConfig"></a>

```python
def reset_node_config() -> None
```

##### `reset_node_count` <a name="reset_node_count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetNodeCount"></a>

```python
def reset_node_count() -> None
```

##### `reset_private_environment_config` <a name="reset_private_environment_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetPrivateEnvironmentConfig"></a>

```python
def reset_private_environment_config() -> None
```

##### `reset_recovery_config` <a name="reset_recovery_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetRecoveryConfig"></a>

```python
def reset_recovery_config() -> None
```

##### `reset_resilience_mode` <a name="reset_resilience_mode" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetResilienceMode"></a>

```python
def reset_resilience_mode() -> None
```

##### `reset_software_config` <a name="reset_software_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetSoftwareConfig"></a>

```python
def reset_software_config() -> None
```

##### `reset_web_server_config` <a name="reset_web_server_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetWebServerConfig"></a>

```python
def reset_web_server_config() -> None
```

##### `reset_web_server_network_access_control` <a name="reset_web_server_network_access_control" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetWebServerNetworkAccessControl"></a>

```python
def reset_web_server_network_access_control() -> None
```

##### `reset_workloads_config` <a name="reset_workloads_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.resetWorkloadsConfig"></a>

```python
def reset_workloads_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.airflowUri">airflow_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.dagGcsPrefix">dag_gcs_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.databaseConfig">database_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference">ComposerEnvironmentConfigDatabaseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.dataRetentionConfig">data_retention_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference">ComposerEnvironmentConfigDataRetentionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference">ComposerEnvironmentConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.gkeCluster">gke_cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference">ComposerEnvironmentConfigMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfig">master_authorized_networks_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.nodeConfig">node_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference">ComposerEnvironmentConfigNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfig">private_environment_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference">ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.recoveryConfig">recovery_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference">ComposerEnvironmentConfigRecoveryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.softwareConfig">software_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference">ComposerEnvironmentConfigSoftwareConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.webServerConfig">web_server_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference">ComposerEnvironmentConfigWebServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControl">web_server_network_access_control</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference">ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.workloadsConfig">workloads_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference">ComposerEnvironmentConfigWorkloadsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.databaseConfigInput">database_config_input</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig">ComposerEnvironmentConfigDatabaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.dataRetentionConfigInput">data_retention_config_input</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfig">ComposerEnvironmentConfigDataRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.enablePrivateBuildsOnlyInput">enable_private_builds_only_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.enablePrivateEnvironmentInput">enable_private_environment_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.encryptionConfigInput">encryption_config_input</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig">ComposerEnvironmentConfigEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.environmentSizeInput">environment_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow">ComposerEnvironmentConfigMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfigInput">master_authorized_networks_config_input</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig">ComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.nodeConfigInput">node_config_input</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig">ComposerEnvironmentConfigNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfigInput">private_environment_config_input</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig">ComposerEnvironmentConfigPrivateEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.recoveryConfigInput">recovery_config_input</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig">ComposerEnvironmentConfigRecoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.resilienceModeInput">resilience_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.softwareConfigInput">software_config_input</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig">ComposerEnvironmentConfigSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.webServerConfigInput">web_server_config_input</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig">ComposerEnvironmentConfigWebServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControlInput">web_server_network_access_control_input</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl">ComposerEnvironmentConfigWebServerNetworkAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.workloadsConfigInput">workloads_config_input</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig">ComposerEnvironmentConfigWorkloadsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.enablePrivateBuildsOnly">enable_private_builds_only</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.enablePrivateEnvironment">enable_private_environment</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.environmentSize">environment_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.resilienceMode">resilience_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA">ComposerEnvironmentConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `airflow_uri`<sup>Required</sup> <a name="airflow_uri" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.airflowUri"></a>

```python
airflow_uri: str
```

- *Type:* str

---

##### `dag_gcs_prefix`<sup>Required</sup> <a name="dag_gcs_prefix" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.dagGcsPrefix"></a>

```python
dag_gcs_prefix: str
```

- *Type:* str

---

##### `database_config`<sup>Required</sup> <a name="database_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.databaseConfig"></a>

```python
database_config: ComposerEnvironmentConfigDatabaseConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference">ComposerEnvironmentConfigDatabaseConfigOutputReference</a>

---

##### `data_retention_config`<sup>Required</sup> <a name="data_retention_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.dataRetentionConfig"></a>

```python
data_retention_config: ComposerEnvironmentConfigDataRetentionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference">ComposerEnvironmentConfigDataRetentionConfigOutputReference</a>

---

##### `encryption_config`<sup>Required</sup> <a name="encryption_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.encryptionConfig"></a>

```python
encryption_config: ComposerEnvironmentConfigEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference">ComposerEnvironmentConfigEncryptionConfigOutputReference</a>

---

##### `gke_cluster`<sup>Required</sup> <a name="gke_cluster" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.gkeCluster"></a>

```python
gke_cluster: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.maintenanceWindow"></a>

```python
maintenance_window: ComposerEnvironmentConfigMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference">ComposerEnvironmentConfigMaintenanceWindowOutputReference</a>

---

##### `master_authorized_networks_config`<sup>Required</sup> <a name="master_authorized_networks_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfig"></a>

```python
master_authorized_networks_config: ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference</a>

---

##### `node_config`<sup>Required</sup> <a name="node_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.nodeConfig"></a>

```python
node_config: ComposerEnvironmentConfigNodeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference">ComposerEnvironmentConfigNodeConfigOutputReference</a>

---

##### `private_environment_config`<sup>Required</sup> <a name="private_environment_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfig"></a>

```python
private_environment_config: ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference">ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference</a>

---

##### `recovery_config`<sup>Required</sup> <a name="recovery_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.recoveryConfig"></a>

```python
recovery_config: ComposerEnvironmentConfigRecoveryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference">ComposerEnvironmentConfigRecoveryConfigOutputReference</a>

---

##### `software_config`<sup>Required</sup> <a name="software_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.softwareConfig"></a>

```python
software_config: ComposerEnvironmentConfigSoftwareConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference">ComposerEnvironmentConfigSoftwareConfigOutputReference</a>

---

##### `web_server_config`<sup>Required</sup> <a name="web_server_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.webServerConfig"></a>

```python
web_server_config: ComposerEnvironmentConfigWebServerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference">ComposerEnvironmentConfigWebServerConfigOutputReference</a>

---

##### `web_server_network_access_control`<sup>Required</sup> <a name="web_server_network_access_control" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControl"></a>

```python
web_server_network_access_control: ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference">ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference</a>

---

##### `workloads_config`<sup>Required</sup> <a name="workloads_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.workloadsConfig"></a>

```python
workloads_config: ComposerEnvironmentConfigWorkloadsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference">ComposerEnvironmentConfigWorkloadsConfigOutputReference</a>

---

##### `database_config_input`<sup>Optional</sup> <a name="database_config_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.databaseConfigInput"></a>

```python
database_config_input: ComposerEnvironmentConfigDatabaseConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig">ComposerEnvironmentConfigDatabaseConfig</a>

---

##### `data_retention_config_input`<sup>Optional</sup> <a name="data_retention_config_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.dataRetentionConfigInput"></a>

```python
data_retention_config_input: ComposerEnvironmentConfigDataRetentionConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfig">ComposerEnvironmentConfigDataRetentionConfig</a>

---

##### `enable_private_builds_only_input`<sup>Optional</sup> <a name="enable_private_builds_only_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.enablePrivateBuildsOnlyInput"></a>

```python
enable_private_builds_only_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enable_private_environment_input`<sup>Optional</sup> <a name="enable_private_environment_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.enablePrivateEnvironmentInput"></a>

```python
enable_private_environment_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `encryption_config_input`<sup>Optional</sup> <a name="encryption_config_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.encryptionConfigInput"></a>

```python
encryption_config_input: ComposerEnvironmentConfigEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig">ComposerEnvironmentConfigEncryptionConfig</a>

---

##### `environment_size_input`<sup>Optional</sup> <a name="environment_size_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.environmentSizeInput"></a>

```python
environment_size_input: str
```

- *Type:* str

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: ComposerEnvironmentConfigMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow">ComposerEnvironmentConfigMaintenanceWindow</a>

---

##### `master_authorized_networks_config_input`<sup>Optional</sup> <a name="master_authorized_networks_config_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfigInput"></a>

```python
master_authorized_networks_config_input: ComposerEnvironmentConfigMasterAuthorizedNetworksConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig">ComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a>

---

##### `node_config_input`<sup>Optional</sup> <a name="node_config_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.nodeConfigInput"></a>

```python
node_config_input: ComposerEnvironmentConfigNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig">ComposerEnvironmentConfigNodeConfig</a>

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_environment_config_input`<sup>Optional</sup> <a name="private_environment_config_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfigInput"></a>

```python
private_environment_config_input: ComposerEnvironmentConfigPrivateEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig">ComposerEnvironmentConfigPrivateEnvironmentConfig</a>

---

##### `recovery_config_input`<sup>Optional</sup> <a name="recovery_config_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.recoveryConfigInput"></a>

```python
recovery_config_input: ComposerEnvironmentConfigRecoveryConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig">ComposerEnvironmentConfigRecoveryConfig</a>

---

##### `resilience_mode_input`<sup>Optional</sup> <a name="resilience_mode_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.resilienceModeInput"></a>

```python
resilience_mode_input: str
```

- *Type:* str

---

##### `software_config_input`<sup>Optional</sup> <a name="software_config_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.softwareConfigInput"></a>

```python
software_config_input: ComposerEnvironmentConfigSoftwareConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig">ComposerEnvironmentConfigSoftwareConfig</a>

---

##### `web_server_config_input`<sup>Optional</sup> <a name="web_server_config_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.webServerConfigInput"></a>

```python
web_server_config_input: ComposerEnvironmentConfigWebServerConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig">ComposerEnvironmentConfigWebServerConfig</a>

---

##### `web_server_network_access_control_input`<sup>Optional</sup> <a name="web_server_network_access_control_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControlInput"></a>

```python
web_server_network_access_control_input: ComposerEnvironmentConfigWebServerNetworkAccessControl
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl">ComposerEnvironmentConfigWebServerNetworkAccessControl</a>

---

##### `workloads_config_input`<sup>Optional</sup> <a name="workloads_config_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.workloadsConfigInput"></a>

```python
workloads_config_input: ComposerEnvironmentConfigWorkloadsConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig">ComposerEnvironmentConfigWorkloadsConfig</a>

---

##### `enable_private_builds_only`<sup>Required</sup> <a name="enable_private_builds_only" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.enablePrivateBuildsOnly"></a>

```python
enable_private_builds_only: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enable_private_environment`<sup>Required</sup> <a name="enable_private_environment" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.enablePrivateEnvironment"></a>

```python
enable_private_environment: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `environment_size`<sup>Required</sup> <a name="environment_size" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.environmentSize"></a>

```python
environment_size: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resilience_mode`<sup>Required</sup> <a name="resilience_mode" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.resilienceMode"></a>

```python
resilience_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigAOutputReference.property.internalValue"></a>

```python
internal_value: ComposerEnvironmentConfigA
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigA">ComposerEnvironmentConfigA</a>

---


### ComposerEnvironmentConfigDatabaseConfigOutputReference <a name="ComposerEnvironmentConfigDatabaseConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.resetMachineType">reset_machine_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.resetZone">reset_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_machine_type` <a name="reset_machine_type" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.resetMachineType"></a>

```python
def reset_machine_type() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.resetZone"></a>

```python
def reset_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig">ComposerEnvironmentConfigDatabaseConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComposerEnvironmentConfigDatabaseConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDatabaseConfig">ComposerEnvironmentConfigDatabaseConfig</a>

---


### ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList <a name="ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a>]

---


### ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference <a name="ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resetRetentionDays">reset_retention_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resetRetentionMode">reset_retention_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_retention_days` <a name="reset_retention_days" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resetRetentionDays"></a>

```python
def reset_retention_days() -> None
```

##### `reset_retention_mode` <a name="reset_retention_mode" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.resetRetentionMode"></a>

```python
def reset_retention_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionDaysInput">retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionModeInput">retention_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionMode">retention_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retention_days_input`<sup>Optional</sup> <a name="retention_days_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionDaysInput"></a>

```python
retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_mode_input`<sup>Optional</sup> <a name="retention_mode_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionModeInput"></a>

```python
retention_mode_input: str
```

- *Type:* str

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_mode`<sup>Required</sup> <a name="retention_mode" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.retentionMode"></a>

```python
retention_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a>

---


### ComposerEnvironmentConfigDataRetentionConfigOutputReference <a name="ComposerEnvironmentConfigDataRetentionConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.putAirflowMetadataRetentionConfig">put_airflow_metadata_retention_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.putTaskLogsRetentionConfig">put_task_logs_retention_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.resetAirflowMetadataRetentionConfig">reset_airflow_metadata_retention_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.resetTaskLogsRetentionConfig">reset_task_logs_retention_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_airflow_metadata_retention_config` <a name="put_airflow_metadata_retention_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.putAirflowMetadataRetentionConfig"></a>

```python
def put_airflow_metadata_retention_config(
  value: IResolvable | typing.List[ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.putAirflowMetadataRetentionConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a>]

---

##### `put_task_logs_retention_config` <a name="put_task_logs_retention_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.putTaskLogsRetentionConfig"></a>

```python
def put_task_logs_retention_config(
  value: IResolvable | typing.List[ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.putTaskLogsRetentionConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>]

---

##### `reset_airflow_metadata_retention_config` <a name="reset_airflow_metadata_retention_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.resetAirflowMetadataRetentionConfig"></a>

```python
def reset_airflow_metadata_retention_config() -> None
```

##### `reset_task_logs_retention_config` <a name="reset_task_logs_retention_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.resetTaskLogsRetentionConfig"></a>

```python
def reset_task_logs_retention_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.property.airflowMetadataRetentionConfig">airflow_metadata_retention_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList">ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.property.taskLogsRetentionConfig">task_logs_retention_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList">ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.property.airflowMetadataRetentionConfigInput">airflow_metadata_retention_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.property.taskLogsRetentionConfigInput">task_logs_retention_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfig">ComposerEnvironmentConfigDataRetentionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `airflow_metadata_retention_config`<sup>Required</sup> <a name="airflow_metadata_retention_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.property.airflowMetadataRetentionConfig"></a>

```python
airflow_metadata_retention_config: ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList">ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfigList</a>

---

##### `task_logs_retention_config`<sup>Required</sup> <a name="task_logs_retention_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.property.taskLogsRetentionConfig"></a>

```python
task_logs_retention_config: ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList">ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList</a>

---

##### `airflow_metadata_retention_config_input`<sup>Optional</sup> <a name="airflow_metadata_retention_config_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.property.airflowMetadataRetentionConfigInput"></a>

```python
airflow_metadata_retention_config_input: IResolvable | typing.List[ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigAirflowMetadataRetentionConfig</a>]

---

##### `task_logs_retention_config_input`<sup>Optional</sup> <a name="task_logs_retention_config_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.property.taskLogsRetentionConfigInput"></a>

```python
task_logs_retention_config_input: IResolvable | typing.List[ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComposerEnvironmentConfigDataRetentionConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfig">ComposerEnvironmentConfigDataRetentionConfig</a>

---


### ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList <a name="ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>]

---


### ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference <a name="ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resetStorageMode">reset_storage_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_storage_mode` <a name="reset_storage_mode" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.resetStorageMode"></a>

```python
def reset_storage_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.storageModeInput">storage_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.storageMode">storage_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `storage_mode_input`<sup>Optional</sup> <a name="storage_mode_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.storageModeInput"></a>

```python
storage_mode_input: str
```

- *Type:* str

---

##### `storage_mode`<sup>Required</sup> <a name="storage_mode" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.storageMode"></a>

```python
storage_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig">ComposerEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig</a>

---


### ComposerEnvironmentConfigEncryptionConfigOutputReference <a name="ComposerEnvironmentConfigEncryptionConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig">ComposerEnvironmentConfigEncryptionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComposerEnvironmentConfigEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigEncryptionConfig">ComposerEnvironmentConfigEncryptionConfig</a>

---


### ComposerEnvironmentConfigMaintenanceWindowOutputReference <a name="ComposerEnvironmentConfigMaintenanceWindowOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrenceInput">recurrence_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrence">recurrence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow">ComposerEnvironmentConfigMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `recurrence_input`<sup>Optional</sup> <a name="recurrence_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrenceInput"></a>

```python
recurrence_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrence"></a>

```python
recurrence: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: ComposerEnvironmentConfigMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMaintenanceWindow">ComposerEnvironmentConfigMaintenanceWindow</a>

---


### ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList <a name="ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>]

---


### ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference <a name="ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlockInput">cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_block_input`<sup>Optional</sup> <a name="cidr_block_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlockInput"></a>

```python
cidr_block_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>

---


### ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference <a name="ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.putCidrBlocks">put_cidr_blocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resetCidrBlocks">reset_cidr_blocks</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cidr_blocks` <a name="put_cidr_blocks" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.putCidrBlocks"></a>

```python
def put_cidr_blocks(
  value: IResolvable | typing.List[ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.putCidrBlocks.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>]

---

##### `reset_cidr_blocks` <a name="reset_cidr_blocks" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resetCidrBlocks"></a>

```python
def reset_cidr_blocks() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocks">cidr_blocks</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocksInput">cidr_blocks_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig">ComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_blocks`<sup>Required</sup> <a name="cidr_blocks" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocks"></a>

```python
cidr_blocks: ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList</a>

---

##### `cidr_blocks_input`<sup>Optional</sup> <a name="cidr_blocks_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocksInput"></a>

```python
cidr_blocks_input: IResolvable | typing.List[ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComposerEnvironmentConfigMasterAuthorizedNetworksConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigMasterAuthorizedNetworksConfig">ComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a>

---


### ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference <a name="ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetClusterIpv4CidrBlock">reset_cluster_ipv4_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetClusterSecondaryRangeName">reset_cluster_secondary_range_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetServicesIpv4CidrBlock">reset_services_ipv4_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetServicesSecondaryRangeName">reset_services_secondary_range_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetUseIpAliases">reset_use_ip_aliases</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cluster_ipv4_cidr_block` <a name="reset_cluster_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetClusterIpv4CidrBlock"></a>

```python
def reset_cluster_ipv4_cidr_block() -> None
```

##### `reset_cluster_secondary_range_name` <a name="reset_cluster_secondary_range_name" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetClusterSecondaryRangeName"></a>

```python
def reset_cluster_secondary_range_name() -> None
```

##### `reset_services_ipv4_cidr_block` <a name="reset_services_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetServicesIpv4CidrBlock"></a>

```python
def reset_services_ipv4_cidr_block() -> None
```

##### `reset_services_secondary_range_name` <a name="reset_services_secondary_range_name" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetServicesSecondaryRangeName"></a>

```python
def reset_services_secondary_range_name() -> None
```

##### `reset_use_ip_aliases` <a name="reset_use_ip_aliases" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resetUseIpAliases"></a>

```python
def reset_use_ip_aliases() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlockInput">cluster_ipv4_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeNameInput">cluster_secondary_range_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlockInput">services_ipv4_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeNameInput">services_secondary_range_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliasesInput">use_ip_aliases_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlock">cluster_ipv4_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeName">cluster_secondary_range_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlock">services_ipv4_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeName">services_secondary_range_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliases">use_ip_aliases</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy">ComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_ipv4_cidr_block_input`<sup>Optional</sup> <a name="cluster_ipv4_cidr_block_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlockInput"></a>

```python
cluster_ipv4_cidr_block_input: str
```

- *Type:* str

---

##### `cluster_secondary_range_name_input`<sup>Optional</sup> <a name="cluster_secondary_range_name_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeNameInput"></a>

```python
cluster_secondary_range_name_input: str
```

- *Type:* str

---

##### `services_ipv4_cidr_block_input`<sup>Optional</sup> <a name="services_ipv4_cidr_block_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlockInput"></a>

```python
services_ipv4_cidr_block_input: str
```

- *Type:* str

---

##### `services_secondary_range_name_input`<sup>Optional</sup> <a name="services_secondary_range_name_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeNameInput"></a>

```python
services_secondary_range_name_input: str
```

- *Type:* str

---

##### `use_ip_aliases_input`<sup>Optional</sup> <a name="use_ip_aliases_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliasesInput"></a>

```python
use_ip_aliases_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `cluster_ipv4_cidr_block`<sup>Required</sup> <a name="cluster_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlock"></a>

```python
cluster_ipv4_cidr_block: str
```

- *Type:* str

---

##### `cluster_secondary_range_name`<sup>Required</sup> <a name="cluster_secondary_range_name" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeName"></a>

```python
cluster_secondary_range_name: str
```

- *Type:* str

---

##### `services_ipv4_cidr_block`<sup>Required</sup> <a name="services_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlock"></a>

```python
services_ipv4_cidr_block: str
```

- *Type:* str

---

##### `services_secondary_range_name`<sup>Required</sup> <a name="services_secondary_range_name" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeName"></a>

```python
services_secondary_range_name: str
```

- *Type:* str

---

##### `use_ip_aliases`<sup>Required</sup> <a name="use_ip_aliases" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliases"></a>

```python
use_ip_aliases: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: ComposerEnvironmentConfigNodeConfigIpAllocationPolicy
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy">ComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a>

---


### ComposerEnvironmentConfigNodeConfigOutputReference <a name="ComposerEnvironmentConfigNodeConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.putIpAllocationPolicy">put_ip_allocation_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetComposerInternalIpv4CidrBlock">reset_composer_internal_ipv4_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetComposerNetworkAttachment">reset_composer_network_attachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetDiskSizeGb">reset_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetEnableIpMasqAgent">reset_enable_ip_masq_agent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetIpAllocationPolicy">reset_ip_allocation_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetMachineType">reset_machine_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetOauthScopes">reset_oauth_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetZone">reset_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ip_allocation_policy` <a name="put_ip_allocation_policy" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.putIpAllocationPolicy"></a>

```python
def put_ip_allocation_policy(
  cluster_ipv4_cidr_block: str = None,
  cluster_secondary_range_name: str = None,
  services_ipv4_cidr_block: str = None,
  services_secondary_range_name: str = None,
  use_ip_aliases: bool | IResolvable = None
) -> None
```

###### `cluster_ipv4_cidr_block`<sup>Optional</sup> <a name="cluster_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.putIpAllocationPolicy.parameter.clusterIpv4CidrBlock"></a>

- *Type:* str

The IP address range used to allocate IP addresses to pods in the cluster.

For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when use_ip_aliases is true. Set to blank to have GKE choose a range with the default size. Set to /netmask (e.g. /14) to have GKE choose a range with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use. Specify either cluster_secondary_range_name or cluster_ipv4_cidr_block but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#cluster_ipv4_cidr_block ComposerEnvironment#cluster_ipv4_cidr_block}

---

###### `cluster_secondary_range_name`<sup>Optional</sup> <a name="cluster_secondary_range_name" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.putIpAllocationPolicy.parameter.clusterSecondaryRangeName"></a>

- *Type:* str

The name of the cluster's secondary range used to allocate IP addresses to pods.

Specify either cluster_secondary_range_name or cluster_ipv4_cidr_block but not both. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when use_ip_aliases is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#cluster_secondary_range_name ComposerEnvironment#cluster_secondary_range_name}

---

###### `services_ipv4_cidr_block`<sup>Optional</sup> <a name="services_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.putIpAllocationPolicy.parameter.servicesIpv4CidrBlock"></a>

- *Type:* str

The IP address range used to allocate IP addresses in this cluster.

For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when use_ip_aliases is true. Set to blank to have GKE choose a range with the default size. Set to /netmask (e.g. /14) to have GKE choose a range with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use. Specify either services_secondary_range_name or services_ipv4_cidr_block but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#services_ipv4_cidr_block ComposerEnvironment#services_ipv4_cidr_block}

---

###### `services_secondary_range_name`<sup>Optional</sup> <a name="services_secondary_range_name" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.putIpAllocationPolicy.parameter.servicesSecondaryRangeName"></a>

- *Type:* str

The name of the services' secondary range used to allocate IP addresses to the cluster.

Specify either services_secondary_range_name or services_ipv4_cidr_block but not both. For Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*, this field is applicable only when use_ip_aliases is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#services_secondary_range_name ComposerEnvironment#services_secondary_range_name}

---

###### `use_ip_aliases`<sup>Optional</sup> <a name="use_ip_aliases" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.putIpAllocationPolicy.parameter.useIpAliases"></a>

- *Type:* bool | cdktf.IResolvable

Whether or not to enable Alias IPs in the GKE cluster.

If true, a VPC-native cluster is created. Defaults to true if the ip_allocation_policy block is present in config. This field is only supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use VPC-native GKE clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#use_ip_aliases ComposerEnvironment#use_ip_aliases}

---

##### `reset_composer_internal_ipv4_cidr_block` <a name="reset_composer_internal_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetComposerInternalIpv4CidrBlock"></a>

```python
def reset_composer_internal_ipv4_cidr_block() -> None
```

##### `reset_composer_network_attachment` <a name="reset_composer_network_attachment" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetComposerNetworkAttachment"></a>

```python
def reset_composer_network_attachment() -> None
```

##### `reset_disk_size_gb` <a name="reset_disk_size_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetDiskSizeGb"></a>

```python
def reset_disk_size_gb() -> None
```

##### `reset_enable_ip_masq_agent` <a name="reset_enable_ip_masq_agent" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetEnableIpMasqAgent"></a>

```python
def reset_enable_ip_masq_agent() -> None
```

##### `reset_ip_allocation_policy` <a name="reset_ip_allocation_policy" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetIpAllocationPolicy"></a>

```python
def reset_ip_allocation_policy() -> None
```

##### `reset_machine_type` <a name="reset_machine_type" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetMachineType"></a>

```python
def reset_machine_type() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_oauth_scopes` <a name="reset_oauth_scopes" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetOauthScopes"></a>

```python
def reset_oauth_scopes() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.resetZone"></a>

```python
def reset_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicy">ip_allocation_policy</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference">ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.composerInternalIpv4CidrBlockInput">composer_internal_ipv4_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.composerNetworkAttachmentInput">composer_network_attachment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgentInput">enable_ip_masq_agent_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicyInput">ip_allocation_policy_input</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy">ComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopesInput">oauth_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.composerInternalIpv4CidrBlock">composer_internal_ipv4_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.composerNetworkAttachment">composer_network_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgent">enable_ip_masq_agent</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig">ComposerEnvironmentConfigNodeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_allocation_policy`<sup>Required</sup> <a name="ip_allocation_policy" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicy"></a>

```python
ip_allocation_policy: ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference">ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference</a>

---

##### `composer_internal_ipv4_cidr_block_input`<sup>Optional</sup> <a name="composer_internal_ipv4_cidr_block_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.composerInternalIpv4CidrBlockInput"></a>

```python
composer_internal_ipv4_cidr_block_input: str
```

- *Type:* str

---

##### `composer_network_attachment_input`<sup>Optional</sup> <a name="composer_network_attachment_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.composerNetworkAttachmentInput"></a>

```python
composer_network_attachment_input: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_ip_masq_agent_input`<sup>Optional</sup> <a name="enable_ip_masq_agent_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgentInput"></a>

```python
enable_ip_masq_agent_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `ip_allocation_policy_input`<sup>Optional</sup> <a name="ip_allocation_policy_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicyInput"></a>

```python
ip_allocation_policy_input: ComposerEnvironmentConfigNodeConfigIpAllocationPolicy
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigIpAllocationPolicy">ComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a>

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `oauth_scopes_input`<sup>Optional</sup> <a name="oauth_scopes_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopesInput"></a>

```python
oauth_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `composer_internal_ipv4_cidr_block`<sup>Required</sup> <a name="composer_internal_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.composerInternalIpv4CidrBlock"></a>

```python
composer_internal_ipv4_cidr_block: str
```

- *Type:* str

---

##### `composer_network_attachment`<sup>Required</sup> <a name="composer_network_attachment" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.composerNetworkAttachment"></a>

```python
composer_network_attachment: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_ip_masq_agent`<sup>Required</sup> <a name="enable_ip_masq_agent" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgent"></a>

```python
enable_ip_masq_agent: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `oauth_scopes`<sup>Required</sup> <a name="oauth_scopes" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComposerEnvironmentConfigNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigNodeConfig">ComposerEnvironmentConfigNodeConfig</a>

---


### ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference <a name="ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudComposerConnectionSubnetwork">reset_cloud_composer_connection_subnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudComposerNetworkIpv4CidrBlock">reset_cloud_composer_network_ipv4_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudSqlIpv4CidrBlock">reset_cloud_sql_ipv4_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetConnectionType">reset_connection_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetEnablePrivateEndpoint">reset_enable_private_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetEnablePrivatelyUsedPublicIps">reset_enable_privately_used_public_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetMasterIpv4CidrBlock">reset_master_ipv4_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetWebServerIpv4CidrBlock">reset_web_server_ipv4_cidr_block</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cloud_composer_connection_subnetwork` <a name="reset_cloud_composer_connection_subnetwork" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudComposerConnectionSubnetwork"></a>

```python
def reset_cloud_composer_connection_subnetwork() -> None
```

##### `reset_cloud_composer_network_ipv4_cidr_block` <a name="reset_cloud_composer_network_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudComposerNetworkIpv4CidrBlock"></a>

```python
def reset_cloud_composer_network_ipv4_cidr_block() -> None
```

##### `reset_cloud_sql_ipv4_cidr_block` <a name="reset_cloud_sql_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetCloudSqlIpv4CidrBlock"></a>

```python
def reset_cloud_sql_ipv4_cidr_block() -> None
```

##### `reset_connection_type` <a name="reset_connection_type" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetConnectionType"></a>

```python
def reset_connection_type() -> None
```

##### `reset_enable_private_endpoint` <a name="reset_enable_private_endpoint" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetEnablePrivateEndpoint"></a>

```python
def reset_enable_private_endpoint() -> None
```

##### `reset_enable_privately_used_public_ips` <a name="reset_enable_privately_used_public_ips" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetEnablePrivatelyUsedPublicIps"></a>

```python
def reset_enable_privately_used_public_ips() -> None
```

##### `reset_master_ipv4_cidr_block` <a name="reset_master_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetMasterIpv4CidrBlock"></a>

```python
def reset_master_ipv4_cidr_block() -> None
```

##### `reset_web_server_ipv4_cidr_block` <a name="reset_web_server_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resetWebServerIpv4CidrBlock"></a>

```python
def reset_web_server_ipv4_cidr_block() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetworkInput">cloud_composer_connection_subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlockInput">cloud_composer_network_ipv4_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlockInput">cloud_sql_ipv4_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.connectionTypeInput">connection_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpointInput">enable_private_endpoint_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIpsInput">enable_privately_used_public_ips_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlockInput">master_ipv4_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlockInput">web_server_ipv4_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetwork">cloud_composer_connection_subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlock">cloud_composer_network_ipv4_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlock">cloud_sql_ipv4_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpoint">enable_private_endpoint</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIps">enable_privately_used_public_ips</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlock">master_ipv4_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlock">web_server_ipv4_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig">ComposerEnvironmentConfigPrivateEnvironmentConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_composer_connection_subnetwork_input`<sup>Optional</sup> <a name="cloud_composer_connection_subnetwork_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetworkInput"></a>

```python
cloud_composer_connection_subnetwork_input: str
```

- *Type:* str

---

##### `cloud_composer_network_ipv4_cidr_block_input`<sup>Optional</sup> <a name="cloud_composer_network_ipv4_cidr_block_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlockInput"></a>

```python
cloud_composer_network_ipv4_cidr_block_input: str
```

- *Type:* str

---

##### `cloud_sql_ipv4_cidr_block_input`<sup>Optional</sup> <a name="cloud_sql_ipv4_cidr_block_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlockInput"></a>

```python
cloud_sql_ipv4_cidr_block_input: str
```

- *Type:* str

---

##### `connection_type_input`<sup>Optional</sup> <a name="connection_type_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.connectionTypeInput"></a>

```python
connection_type_input: str
```

- *Type:* str

---

##### `enable_private_endpoint_input`<sup>Optional</sup> <a name="enable_private_endpoint_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpointInput"></a>

```python
enable_private_endpoint_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enable_privately_used_public_ips_input`<sup>Optional</sup> <a name="enable_privately_used_public_ips_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIpsInput"></a>

```python
enable_privately_used_public_ips_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `master_ipv4_cidr_block_input`<sup>Optional</sup> <a name="master_ipv4_cidr_block_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlockInput"></a>

```python
master_ipv4_cidr_block_input: str
```

- *Type:* str

---

##### `web_server_ipv4_cidr_block_input`<sup>Optional</sup> <a name="web_server_ipv4_cidr_block_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlockInput"></a>

```python
web_server_ipv4_cidr_block_input: str
```

- *Type:* str

---

##### `cloud_composer_connection_subnetwork`<sup>Required</sup> <a name="cloud_composer_connection_subnetwork" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetwork"></a>

```python
cloud_composer_connection_subnetwork: str
```

- *Type:* str

---

##### `cloud_composer_network_ipv4_cidr_block`<sup>Required</sup> <a name="cloud_composer_network_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlock"></a>

```python
cloud_composer_network_ipv4_cidr_block: str
```

- *Type:* str

---

##### `cloud_sql_ipv4_cidr_block`<sup>Required</sup> <a name="cloud_sql_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlock"></a>

```python
cloud_sql_ipv4_cidr_block: str
```

- *Type:* str

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `enable_private_endpoint`<sup>Required</sup> <a name="enable_private_endpoint" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpoint"></a>

```python
enable_private_endpoint: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enable_privately_used_public_ips`<sup>Required</sup> <a name="enable_privately_used_public_ips" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIps"></a>

```python
enable_privately_used_public_ips: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `master_ipv4_cidr_block`<sup>Required</sup> <a name="master_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlock"></a>

```python
master_ipv4_cidr_block: str
```

- *Type:* str

---

##### `web_server_ipv4_cidr_block`<sup>Required</sup> <a name="web_server_ipv4_cidr_block" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlock"></a>

```python
web_server_ipv4_cidr_block: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComposerEnvironmentConfigPrivateEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigPrivateEnvironmentConfig">ComposerEnvironmentConfigPrivateEnvironmentConfig</a>

---


### ComposerEnvironmentConfigRecoveryConfigOutputReference <a name="ComposerEnvironmentConfigRecoveryConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.putScheduledSnapshotsConfig">put_scheduled_snapshots_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.resetScheduledSnapshotsConfig">reset_scheduled_snapshots_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_scheduled_snapshots_config` <a name="put_scheduled_snapshots_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.putScheduledSnapshotsConfig"></a>

```python
def put_scheduled_snapshots_config(
  enabled: bool | IResolvable,
  snapshot_creation_schedule: str = None,
  snapshot_location: str = None,
  time_zone: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.putScheduledSnapshotsConfig.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

When enabled, Cloud Composer periodically saves snapshots of your environment to a Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#enabled ComposerEnvironment#enabled}

---

###### `snapshot_creation_schedule`<sup>Optional</sup> <a name="snapshot_creation_schedule" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.putScheduledSnapshotsConfig.parameter.snapshotCreationSchedule"></a>

- *Type:* str

Snapshot schedule, in the unix-cron format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#snapshot_creation_schedule ComposerEnvironment#snapshot_creation_schedule}

---

###### `snapshot_location`<sup>Optional</sup> <a name="snapshot_location" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.putScheduledSnapshotsConfig.parameter.snapshotLocation"></a>

- *Type:* str

the URI of a bucket folder where to save the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#snapshot_location ComposerEnvironment#snapshot_location}

---

###### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.putScheduledSnapshotsConfig.parameter.timeZone"></a>

- *Type:* str

A time zone for the schedule.

This value is a time offset and does not take into account daylight saving time changes. Valid values are from UTC-12 to UTC+12. Examples: UTC, UTC-01, UTC+03.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#time_zone ComposerEnvironment#time_zone}

---

##### `reset_scheduled_snapshots_config` <a name="reset_scheduled_snapshots_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.resetScheduledSnapshotsConfig"></a>

```python
def reset_scheduled_snapshots_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfig">scheduled_snapshots_config</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfigInput">scheduled_snapshots_config_input</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig">ComposerEnvironmentConfigRecoveryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scheduled_snapshots_config`<sup>Required</sup> <a name="scheduled_snapshots_config" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfig"></a>

```python
scheduled_snapshots_config: ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference</a>

---

##### `scheduled_snapshots_config_input`<sup>Optional</sup> <a name="scheduled_snapshots_config_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfigInput"></a>

```python
scheduled_snapshots_config_input: ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComposerEnvironmentConfigRecoveryConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfig">ComposerEnvironmentConfigRecoveryConfig</a>

---


### ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference <a name="ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetSnapshotCreationSchedule">reset_snapshot_creation_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetSnapshotLocation">reset_snapshot_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_snapshot_creation_schedule` <a name="reset_snapshot_creation_schedule" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetSnapshotCreationSchedule"></a>

```python
def reset_snapshot_creation_schedule() -> None
```

##### `reset_snapshot_location` <a name="reset_snapshot_location" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetSnapshotLocation"></a>

```python
def reset_snapshot_location() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationScheduleInput">snapshot_creation_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocationInput">snapshot_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationSchedule">snapshot_creation_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocation">snapshot_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `snapshot_creation_schedule_input`<sup>Optional</sup> <a name="snapshot_creation_schedule_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationScheduleInput"></a>

```python
snapshot_creation_schedule_input: str
```

- *Type:* str

---

##### `snapshot_location_input`<sup>Optional</sup> <a name="snapshot_location_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocationInput"></a>

```python
snapshot_location_input: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `snapshot_creation_schedule`<sup>Required</sup> <a name="snapshot_creation_schedule" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationSchedule"></a>

```python
snapshot_creation_schedule: str
```

- *Type:* str

---

##### `snapshot_location`<sup>Required</sup> <a name="snapshot_location" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocation"></a>

```python
snapshot_location: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">ComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a>

---


### ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference <a name="ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.internalValue"></a>

```python
internal_value: ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a>

---


### ComposerEnvironmentConfigSoftwareConfigOutputReference <a name="ComposerEnvironmentConfigSoftwareConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.putCloudDataLineageIntegration">put_cloud_data_lineage_integration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetAirflowConfigOverrides">reset_airflow_config_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetCloudDataLineageIntegration">reset_cloud_data_lineage_integration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetEnvVariables">reset_env_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetImageVersion">reset_image_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetPypiPackages">reset_pypi_packages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetPythonVersion">reset_python_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetSchedulerCount">reset_scheduler_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetWebServerPluginsMode">reset_web_server_plugins_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloud_data_lineage_integration` <a name="put_cloud_data_lineage_integration" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.putCloudDataLineageIntegration"></a>

```python
def put_cloud_data_lineage_integration(
  enabled: bool | IResolvable
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.putCloudDataLineageIntegration.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Whether or not Cloud Data Lineage integration is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#enabled ComposerEnvironment#enabled}

---

##### `reset_airflow_config_overrides` <a name="reset_airflow_config_overrides" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetAirflowConfigOverrides"></a>

```python
def reset_airflow_config_overrides() -> None
```

##### `reset_cloud_data_lineage_integration` <a name="reset_cloud_data_lineage_integration" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetCloudDataLineageIntegration"></a>

```python
def reset_cloud_data_lineage_integration() -> None
```

##### `reset_env_variables` <a name="reset_env_variables" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetEnvVariables"></a>

```python
def reset_env_variables() -> None
```

##### `reset_image_version` <a name="reset_image_version" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetImageVersion"></a>

```python
def reset_image_version() -> None
```

##### `reset_pypi_packages` <a name="reset_pypi_packages" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetPypiPackages"></a>

```python
def reset_pypi_packages() -> None
```

##### `reset_python_version` <a name="reset_python_version" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetPythonVersion"></a>

```python
def reset_python_version() -> None
```

##### `reset_scheduler_count` <a name="reset_scheduler_count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetSchedulerCount"></a>

```python
def reset_scheduler_count() -> None
```

##### `reset_web_server_plugins_mode` <a name="reset_web_server_plugins_mode" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.resetWebServerPluginsMode"></a>

```python
def reset_web_server_plugins_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.cloudDataLineageIntegration">cloud_data_lineage_integration</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference">ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverridesInput">airflow_config_overrides_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.cloudDataLineageIntegrationInput">cloud_data_lineage_integration_input</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariablesInput">env_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersionInput">image_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackagesInput">pypi_packages_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersionInput">python_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCountInput">scheduler_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.webServerPluginsModeInput">web_server_plugins_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverrides">airflow_config_overrides</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariables">env_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersion">image_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackages">pypi_packages</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersion">python_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCount">scheduler_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.webServerPluginsMode">web_server_plugins_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig">ComposerEnvironmentConfigSoftwareConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_data_lineage_integration`<sup>Required</sup> <a name="cloud_data_lineage_integration" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.cloudDataLineageIntegration"></a>

```python
cloud_data_lineage_integration: ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference">ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference</a>

---

##### `airflow_config_overrides_input`<sup>Optional</sup> <a name="airflow_config_overrides_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverridesInput"></a>

```python
airflow_config_overrides_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `cloud_data_lineage_integration_input`<sup>Optional</sup> <a name="cloud_data_lineage_integration_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.cloudDataLineageIntegrationInput"></a>

```python
cloud_data_lineage_integration_input: ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">ComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a>

---

##### `env_variables_input`<sup>Optional</sup> <a name="env_variables_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariablesInput"></a>

```python
env_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `image_version_input`<sup>Optional</sup> <a name="image_version_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersionInput"></a>

```python
image_version_input: str
```

- *Type:* str

---

##### `pypi_packages_input`<sup>Optional</sup> <a name="pypi_packages_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackagesInput"></a>

```python
pypi_packages_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `python_version_input`<sup>Optional</sup> <a name="python_version_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersionInput"></a>

```python
python_version_input: str
```

- *Type:* str

---

##### `scheduler_count_input`<sup>Optional</sup> <a name="scheduler_count_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCountInput"></a>

```python
scheduler_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `web_server_plugins_mode_input`<sup>Optional</sup> <a name="web_server_plugins_mode_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.webServerPluginsModeInput"></a>

```python
web_server_plugins_mode_input: str
```

- *Type:* str

---

##### `airflow_config_overrides`<sup>Required</sup> <a name="airflow_config_overrides" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverrides"></a>

```python
airflow_config_overrides: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `env_variables`<sup>Required</sup> <a name="env_variables" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariables"></a>

```python
env_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `image_version`<sup>Required</sup> <a name="image_version" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersion"></a>

```python
image_version: str
```

- *Type:* str

---

##### `pypi_packages`<sup>Required</sup> <a name="pypi_packages" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackages"></a>

```python
pypi_packages: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `python_version`<sup>Required</sup> <a name="python_version" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersion"></a>

```python
python_version: str
```

- *Type:* str

---

##### `scheduler_count`<sup>Required</sup> <a name="scheduler_count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCount"></a>

```python
scheduler_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `web_server_plugins_mode`<sup>Required</sup> <a name="web_server_plugins_mode" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.webServerPluginsMode"></a>

```python
web_server_plugins_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComposerEnvironmentConfigSoftwareConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigSoftwareConfig">ComposerEnvironmentConfigSoftwareConfig</a>

---


### ComposerEnvironmentConfigWebServerConfigOutputReference <a name="ComposerEnvironmentConfigWebServerConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig">ComposerEnvironmentConfigWebServerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComposerEnvironmentConfigWebServerConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerConfig">ComposerEnvironmentConfigWebServerConfig</a>

---


### ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList <a name="ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>]

---


### ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference <a name="ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>

---


### ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference <a name="ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.putAllowedIpRange">put_allowed_ip_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resetAllowedIpRange">reset_allowed_ip_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allowed_ip_range` <a name="put_allowed_ip_range" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.putAllowedIpRange"></a>

```python
def put_allowed_ip_range(
  value: IResolvable | typing.List[ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.putAllowedIpRange.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>]

---

##### `reset_allowed_ip_range` <a name="reset_allowed_ip_range" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resetAllowedIpRange"></a>

```python
def reset_allowed_ip_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRange">allowed_ip_range</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList">ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRangeInput">allowed_ip_range_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl">ComposerEnvironmentConfigWebServerNetworkAccessControl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_ip_range`<sup>Required</sup> <a name="allowed_ip_range" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRange"></a>

```python
allowed_ip_range: ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList">ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList</a>

---

##### `allowed_ip_range_input`<sup>Optional</sup> <a name="allowed_ip_range_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRangeInput"></a>

```python
allowed_ip_range_input: IResolvable | typing.List[ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.internalValue"></a>

```python
internal_value: ComposerEnvironmentConfigWebServerNetworkAccessControl
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWebServerNetworkAccessControl">ComposerEnvironmentConfigWebServerNetworkAccessControl</a>

---


### ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference <a name="ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetCount">reset_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetCpu">reset_cpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetMemoryGb">reset_memory_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetStorageGb">reset_storage_gb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_count` <a name="reset_count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetCount"></a>

```python
def reset_count() -> None
```

##### `reset_cpu` <a name="reset_cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetCpu"></a>

```python
def reset_cpu() -> None
```

##### `reset_memory_gb` <a name="reset_memory_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetMemoryGb"></a>

```python
def reset_memory_gb() -> None
```

##### `reset_storage_gb` <a name="reset_storage_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.resetStorageGb"></a>

```python
def reset_storage_gb() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.cpuInput">cpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.memoryGbInput">memory_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.storageGbInput">storage_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.memoryGb">memory_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.storageGb">storage_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessor">ComposerEnvironmentConfigWorkloadsConfigDagProcessor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.cpuInput"></a>

```python
cpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_gb_input`<sup>Optional</sup> <a name="memory_gb_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.memoryGbInput"></a>

```python
memory_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_gb_input`<sup>Optional</sup> <a name="storage_gb_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.storageGbInput"></a>

```python
storage_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_gb`<sup>Required</sup> <a name="memory_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.memoryGb"></a>

```python
memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_gb`<sup>Required</sup> <a name="storage_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.storageGb"></a>

```python
storage_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference.property.internalValue"></a>

```python
internal_value: ComposerEnvironmentConfigWorkloadsConfigDagProcessor
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessor">ComposerEnvironmentConfigWorkloadsConfigDagProcessor</a>

---


### ComposerEnvironmentConfigWorkloadsConfigOutputReference <a name="ComposerEnvironmentConfigWorkloadsConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putDagProcessor">put_dag_processor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putScheduler">put_scheduler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putTriggerer">put_triggerer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putWebServer">put_web_server</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putWorker">put_worker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resetDagProcessor">reset_dag_processor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resetScheduler">reset_scheduler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resetTriggerer">reset_triggerer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resetWebServer">reset_web_server</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resetWorker">reset_worker</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dag_processor` <a name="put_dag_processor" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putDagProcessor"></a>

```python
def put_dag_processor(
  count: typing.Union[int, float] = None,
  cpu: typing.Union[int, float] = None,
  memory_gb: typing.Union[int, float] = None,
  storage_gb: typing.Union[int, float] = None
) -> None
```

###### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putDagProcessor.parameter.count"></a>

- *Type:* typing.Union[int, float]

Number of DAG processors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#count ComposerEnvironment#count}

---

###### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putDagProcessor.parameter.cpu"></a>

- *Type:* typing.Union[int, float]

CPU request and limit for DAG processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#cpu ComposerEnvironment#cpu}

---

###### `memory_gb`<sup>Optional</sup> <a name="memory_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putDagProcessor.parameter.memoryGb"></a>

- *Type:* typing.Union[int, float]

Memory (GB) request and limit for DAG processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#memory_gb ComposerEnvironment#memory_gb}

---

###### `storage_gb`<sup>Optional</sup> <a name="storage_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putDagProcessor.parameter.storageGb"></a>

- *Type:* typing.Union[int, float]

Storage (GB) request and limit for DAG processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#storage_gb ComposerEnvironment#storage_gb}

---

##### `put_scheduler` <a name="put_scheduler" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putScheduler"></a>

```python
def put_scheduler(
  count: typing.Union[int, float] = None,
  cpu: typing.Union[int, float] = None,
  memory_gb: typing.Union[int, float] = None,
  storage_gb: typing.Union[int, float] = None
) -> None
```

###### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putScheduler.parameter.count"></a>

- *Type:* typing.Union[int, float]

The number of schedulers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#count ComposerEnvironment#count}

---

###### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putScheduler.parameter.cpu"></a>

- *Type:* typing.Union[int, float]

CPU request and limit for a single Airflow scheduler replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#cpu ComposerEnvironment#cpu}

---

###### `memory_gb`<sup>Optional</sup> <a name="memory_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putScheduler.parameter.memoryGb"></a>

- *Type:* typing.Union[int, float]

Memory (GB) request and limit for a single Airflow scheduler replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#memory_gb ComposerEnvironment#memory_gb}

---

###### `storage_gb`<sup>Optional</sup> <a name="storage_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putScheduler.parameter.storageGb"></a>

- *Type:* typing.Union[int, float]

Storage (GB) request and limit for a single Airflow scheduler replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#storage_gb ComposerEnvironment#storage_gb}

---

##### `put_triggerer` <a name="put_triggerer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putTriggerer"></a>

```python
def put_triggerer(
  count: typing.Union[int, float],
  cpu: typing.Union[int, float],
  memory_gb: typing.Union[int, float]
) -> None
```

###### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putTriggerer.parameter.count"></a>

- *Type:* typing.Union[int, float]

The number of triggerers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#count ComposerEnvironment#count}

---

###### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putTriggerer.parameter.cpu"></a>

- *Type:* typing.Union[int, float]

CPU request and limit for a single Airflow triggerer replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#cpu ComposerEnvironment#cpu}

---

###### `memory_gb`<sup>Required</sup> <a name="memory_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putTriggerer.parameter.memoryGb"></a>

- *Type:* typing.Union[int, float]

Memory (GB) request and limit for a single Airflow triggerer replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#memory_gb ComposerEnvironment#memory_gb}

---

##### `put_web_server` <a name="put_web_server" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putWebServer"></a>

```python
def put_web_server(
  cpu: typing.Union[int, float] = None,
  memory_gb: typing.Union[int, float] = None,
  storage_gb: typing.Union[int, float] = None
) -> None
```

###### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putWebServer.parameter.cpu"></a>

- *Type:* typing.Union[int, float]

CPU request and limit for Airflow web server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#cpu ComposerEnvironment#cpu}

---

###### `memory_gb`<sup>Optional</sup> <a name="memory_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putWebServer.parameter.memoryGb"></a>

- *Type:* typing.Union[int, float]

Memory (GB) request and limit for Airflow web server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#memory_gb ComposerEnvironment#memory_gb}

---

###### `storage_gb`<sup>Optional</sup> <a name="storage_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putWebServer.parameter.storageGb"></a>

- *Type:* typing.Union[int, float]

Storage (GB) request and limit for Airflow web server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#storage_gb ComposerEnvironment#storage_gb}

---

##### `put_worker` <a name="put_worker" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putWorker"></a>

```python
def put_worker(
  cpu: typing.Union[int, float] = None,
  max_count: typing.Union[int, float] = None,
  memory_gb: typing.Union[int, float] = None,
  min_count: typing.Union[int, float] = None,
  storage_gb: typing.Union[int, float] = None
) -> None
```

###### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putWorker.parameter.cpu"></a>

- *Type:* typing.Union[int, float]

CPU request and limit for a single Airflow worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#cpu ComposerEnvironment#cpu}

---

###### `max_count`<sup>Optional</sup> <a name="max_count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putWorker.parameter.maxCount"></a>

- *Type:* typing.Union[int, float]

Maximum number of workers for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#max_count ComposerEnvironment#max_count}

---

###### `memory_gb`<sup>Optional</sup> <a name="memory_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putWorker.parameter.memoryGb"></a>

- *Type:* typing.Union[int, float]

Memory (GB) request and limit for a single Airflow worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#memory_gb ComposerEnvironment#memory_gb}

---

###### `min_count`<sup>Optional</sup> <a name="min_count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putWorker.parameter.minCount"></a>

- *Type:* typing.Union[int, float]

Minimum number of workers for autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#min_count ComposerEnvironment#min_count}

---

###### `storage_gb`<sup>Optional</sup> <a name="storage_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.putWorker.parameter.storageGb"></a>

- *Type:* typing.Union[int, float]

Storage (GB) request and limit for a single Airflow worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/composer_environment#storage_gb ComposerEnvironment#storage_gb}

---

##### `reset_dag_processor` <a name="reset_dag_processor" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resetDagProcessor"></a>

```python
def reset_dag_processor() -> None
```

##### `reset_scheduler` <a name="reset_scheduler" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resetScheduler"></a>

```python
def reset_scheduler() -> None
```

##### `reset_triggerer` <a name="reset_triggerer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resetTriggerer"></a>

```python
def reset_triggerer() -> None
```

##### `reset_web_server` <a name="reset_web_server" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resetWebServer"></a>

```python
def reset_web_server() -> None
```

##### `reset_worker` <a name="reset_worker" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.resetWorker"></a>

```python
def reset_worker() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.dagProcessor">dag_processor</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference">ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.scheduler">scheduler</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference">ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.triggerer">triggerer</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference">ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServer">web_server</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference">ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.worker">worker</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference">ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.dagProcessorInput">dag_processor_input</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessor">ComposerEnvironmentConfigWorkloadsConfigDagProcessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.schedulerInput">scheduler_input</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler">ComposerEnvironmentConfigWorkloadsConfigScheduler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.triggererInput">triggerer_input</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer">ComposerEnvironmentConfigWorkloadsConfigTriggerer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServerInput">web_server_input</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer">ComposerEnvironmentConfigWorkloadsConfigWebServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.workerInput">worker_input</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker">ComposerEnvironmentConfigWorkloadsConfigWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig">ComposerEnvironmentConfigWorkloadsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dag_processor`<sup>Required</sup> <a name="dag_processor" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.dagProcessor"></a>

```python
dag_processor: ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference">ComposerEnvironmentConfigWorkloadsConfigDagProcessorOutputReference</a>

---

##### `scheduler`<sup>Required</sup> <a name="scheduler" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.scheduler"></a>

```python
scheduler: ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference">ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference</a>

---

##### `triggerer`<sup>Required</sup> <a name="triggerer" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.triggerer"></a>

```python
triggerer: ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference">ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference</a>

---

##### `web_server`<sup>Required</sup> <a name="web_server" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServer"></a>

```python
web_server: ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference">ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference</a>

---

##### `worker`<sup>Required</sup> <a name="worker" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.worker"></a>

```python
worker: ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference">ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference</a>

---

##### `dag_processor_input`<sup>Optional</sup> <a name="dag_processor_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.dagProcessorInput"></a>

```python
dag_processor_input: ComposerEnvironmentConfigWorkloadsConfigDagProcessor
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigDagProcessor">ComposerEnvironmentConfigWorkloadsConfigDagProcessor</a>

---

##### `scheduler_input`<sup>Optional</sup> <a name="scheduler_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.schedulerInput"></a>

```python
scheduler_input: ComposerEnvironmentConfigWorkloadsConfigScheduler
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler">ComposerEnvironmentConfigWorkloadsConfigScheduler</a>

---

##### `triggerer_input`<sup>Optional</sup> <a name="triggerer_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.triggererInput"></a>

```python
triggerer_input: ComposerEnvironmentConfigWorkloadsConfigTriggerer
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer">ComposerEnvironmentConfigWorkloadsConfigTriggerer</a>

---

##### `web_server_input`<sup>Optional</sup> <a name="web_server_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServerInput"></a>

```python
web_server_input: ComposerEnvironmentConfigWorkloadsConfigWebServer
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer">ComposerEnvironmentConfigWorkloadsConfigWebServer</a>

---

##### `worker_input`<sup>Optional</sup> <a name="worker_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.workerInput"></a>

```python
worker_input: ComposerEnvironmentConfigWorkloadsConfigWorker
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker">ComposerEnvironmentConfigWorkloadsConfigWorker</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComposerEnvironmentConfigWorkloadsConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfig">ComposerEnvironmentConfigWorkloadsConfig</a>

---


### ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference <a name="ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetCount">reset_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetCpu">reset_cpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetMemoryGb">reset_memory_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetStorageGb">reset_storage_gb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_count` <a name="reset_count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetCount"></a>

```python
def reset_count() -> None
```

##### `reset_cpu` <a name="reset_cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetCpu"></a>

```python
def reset_cpu() -> None
```

##### `reset_memory_gb` <a name="reset_memory_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetMemoryGb"></a>

```python
def reset_memory_gb() -> None
```

##### `reset_storage_gb` <a name="reset_storage_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resetStorageGb"></a>

```python
def reset_storage_gb() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpuInput">cpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGbInput">memory_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGbInput">storage_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGb">memory_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGb">storage_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler">ComposerEnvironmentConfigWorkloadsConfigScheduler</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpuInput"></a>

```python
cpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_gb_input`<sup>Optional</sup> <a name="memory_gb_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGbInput"></a>

```python
memory_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_gb_input`<sup>Optional</sup> <a name="storage_gb_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGbInput"></a>

```python
storage_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_gb`<sup>Required</sup> <a name="memory_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGb"></a>

```python
memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_gb`<sup>Required</sup> <a name="storage_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGb"></a>

```python
storage_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.internalValue"></a>

```python
internal_value: ComposerEnvironmentConfigWorkloadsConfigScheduler
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigScheduler">ComposerEnvironmentConfigWorkloadsConfigScheduler</a>

---


### ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference <a name="ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.cpuInput">cpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.memoryGbInput">memory_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.memoryGb">memory_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer">ComposerEnvironmentConfigWorkloadsConfigTriggerer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.cpuInput"></a>

```python
cpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_gb_input`<sup>Optional</sup> <a name="memory_gb_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.memoryGbInput"></a>

```python
memory_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_gb`<sup>Required</sup> <a name="memory_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.memoryGb"></a>

```python
memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.internalValue"></a>

```python
internal_value: ComposerEnvironmentConfigWorkloadsConfigTriggerer
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigTriggerer">ComposerEnvironmentConfigWorkloadsConfigTriggerer</a>

---


### ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference <a name="ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetCpu">reset_cpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetMemoryGb">reset_memory_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetStorageGb">reset_storage_gb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu` <a name="reset_cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetCpu"></a>

```python
def reset_cpu() -> None
```

##### `reset_memory_gb` <a name="reset_memory_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetMemoryGb"></a>

```python
def reset_memory_gb() -> None
```

##### `reset_storage_gb` <a name="reset_storage_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resetStorageGb"></a>

```python
def reset_storage_gb() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpuInput">cpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGbInput">memory_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGbInput">storage_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGb">memory_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGb">storage_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer">ComposerEnvironmentConfigWorkloadsConfigWebServer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpuInput"></a>

```python
cpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_gb_input`<sup>Optional</sup> <a name="memory_gb_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGbInput"></a>

```python
memory_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_gb_input`<sup>Optional</sup> <a name="storage_gb_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGbInput"></a>

```python
storage_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_gb`<sup>Required</sup> <a name="memory_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGb"></a>

```python
memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_gb`<sup>Required</sup> <a name="storage_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGb"></a>

```python
storage_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.internalValue"></a>

```python
internal_value: ComposerEnvironmentConfigWorkloadsConfigWebServer
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWebServer">ComposerEnvironmentConfigWorkloadsConfigWebServer</a>

---


### ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference <a name="ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetCpu">reset_cpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMaxCount">reset_max_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMemoryGb">reset_memory_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMinCount">reset_min_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetStorageGb">reset_storage_gb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu` <a name="reset_cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetCpu"></a>

```python
def reset_cpu() -> None
```

##### `reset_max_count` <a name="reset_max_count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMaxCount"></a>

```python
def reset_max_count() -> None
```

##### `reset_memory_gb` <a name="reset_memory_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMemoryGb"></a>

```python
def reset_memory_gb() -> None
```

##### `reset_min_count` <a name="reset_min_count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetMinCount"></a>

```python
def reset_min_count() -> None
```

##### `reset_storage_gb` <a name="reset_storage_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resetStorageGb"></a>

```python
def reset_storage_gb() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpuInput">cpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCountInput">max_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGbInput">memory_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCountInput">min_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGbInput">storage_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCount">max_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGb">memory_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCount">min_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGb">storage_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker">ComposerEnvironmentConfigWorkloadsConfigWorker</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpuInput"></a>

```python
cpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_count_input`<sup>Optional</sup> <a name="max_count_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCountInput"></a>

```python
max_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_gb_input`<sup>Optional</sup> <a name="memory_gb_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGbInput"></a>

```python
memory_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_count_input`<sup>Optional</sup> <a name="min_count_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCountInput"></a>

```python
min_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_gb_input`<sup>Optional</sup> <a name="storage_gb_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGbInput"></a>

```python
storage_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_count`<sup>Required</sup> <a name="max_count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCount"></a>

```python
max_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_gb`<sup>Required</sup> <a name="memory_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGb"></a>

```python
memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_count`<sup>Required</sup> <a name="min_count" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCount"></a>

```python
min_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_gb`<sup>Required</sup> <a name="storage_gb" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGb"></a>

```python
storage_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.internalValue"></a>

```python
internal_value: ComposerEnvironmentConfigWorkloadsConfigWorker
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentConfigWorkloadsConfigWorker">ComposerEnvironmentConfigWorkloadsConfigWorker</a>

---


### ComposerEnvironmentStorageConfigOutputReference <a name="ComposerEnvironmentStorageConfigOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentStorageConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfig">ComposerEnvironmentStorageConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComposerEnvironmentStorageConfig
```

- *Type:* <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentStorageConfig">ComposerEnvironmentStorageConfig</a>

---


### ComposerEnvironmentTimeoutsOutputReference <a name="ComposerEnvironmentTimeoutsOutputReference" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import composer_environment

composerEnvironment.ComposerEnvironmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts">ComposerEnvironmentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComposerEnvironmentTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.composerEnvironment.ComposerEnvironmentTimeouts">ComposerEnvironmentTimeouts</a>

---



