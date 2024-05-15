# `sccFolderCustomModule` Submodule <a name="`sccFolderCustomModule` Submodule" id="@cdktf/provider-google.sccFolderCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccFolderCustomModule <a name="SccFolderCustomModule" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module google_scc_folder_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_folder_custom_module

sccFolderCustomModule.SccFolderCustomModule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_config: SccFolderCustomModuleCustomConfig,
  display_name: str,
  enablement_state: str,
  folder: str,
  id: str = None,
  timeouts: SccFolderCustomModuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.customConfig">custom_config</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig">SccFolderCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.enablementState">enablement_state</a></code> | <code>str</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.folder">folder</a></code> | <code>str</code> | Numerical ID of the parent folder. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#id SccFolderCustomModule#id}. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts">SccFolderCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_config`<sup>Required</sup> <a name="custom_config" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.customConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig">SccFolderCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#custom_config SccFolderCustomModule#custom_config}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#display_name SccFolderCustomModule#display_name}

---

##### `enablement_state`<sup>Required</sup> <a name="enablement_state" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.enablementState"></a>

- *Type:* str

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#enablement_state SccFolderCustomModule#enablement_state}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.folder"></a>

- *Type:* str

Numerical ID of the parent folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#folder SccFolderCustomModule#folder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#id SccFolderCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts">SccFolderCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#timeouts SccFolderCustomModule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.putCustomConfig">put_custom_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_config` <a name="put_custom_config" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.putCustomConfig"></a>

```python
def put_custom_config(
  predicate: SccFolderCustomModuleCustomConfigPredicate,
  recommendation: str,
  resource_selector: SccFolderCustomModuleCustomConfigResourceSelector,
  severity: str,
  custom_output: SccFolderCustomModuleCustomConfigCustomOutput = None,
  description: str = None
) -> None
```

###### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.putCustomConfig.parameter.predicate"></a>

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate">SccFolderCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#predicate SccFolderCustomModule#predicate}

---

###### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.putCustomConfig.parameter.recommendation"></a>

- *Type:* str

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#recommendation SccFolderCustomModule#recommendation}

---

###### `resource_selector`<sup>Required</sup> <a name="resource_selector" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.putCustomConfig.parameter.resourceSelector"></a>

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelector">SccFolderCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#resource_selector SccFolderCustomModule#resource_selector}

---

###### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.putCustomConfig.parameter.severity"></a>

- *Type:* str

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#severity SccFolderCustomModule#severity}

---

###### `custom_output`<sup>Optional</sup> <a name="custom_output" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.putCustomConfig.parameter.customOutput"></a>

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutput">SccFolderCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#custom_output SccFolderCustomModule#custom_output}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.putCustomConfig.parameter.description"></a>

- *Type:* str

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#description SccFolderCustomModule#description}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#create SccFolderCustomModule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#delete SccFolderCustomModule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#update SccFolderCustomModule#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SccFolderCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import scc_folder_custom_module

sccFolderCustomModule.SccFolderCustomModule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import scc_folder_custom_module

sccFolderCustomModule.SccFolderCustomModule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import scc_folder_custom_module

sccFolderCustomModule.SccFolderCustomModule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import scc_folder_custom_module

sccFolderCustomModule.SccFolderCustomModule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SccFolderCustomModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SccFolderCustomModule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SccFolderCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SccFolderCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.ancestorModule">ancestor_module</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.customConfig">custom_config</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference">SccFolderCustomModuleCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.lastEditor">last_editor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference">SccFolderCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.customConfigInput">custom_config_input</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig">SccFolderCustomModuleCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.enablementStateInput">enablement_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts">SccFolderCustomModuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.enablementState">enablement_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ancestor_module`<sup>Required</sup> <a name="ancestor_module" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.ancestorModule"></a>

```python
ancestor_module: str
```

- *Type:* str

---

##### `custom_config`<sup>Required</sup> <a name="custom_config" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.customConfig"></a>

```python
custom_config: SccFolderCustomModuleCustomConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference">SccFolderCustomModuleCustomConfigOutputReference</a>

---

##### `last_editor`<sup>Required</sup> <a name="last_editor" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.lastEditor"></a>

```python
last_editor: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.timeouts"></a>

```python
timeouts: SccFolderCustomModuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference">SccFolderCustomModuleTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `custom_config_input`<sup>Optional</sup> <a name="custom_config_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.customConfigInput"></a>

```python
custom_config_input: SccFolderCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig">SccFolderCustomModuleCustomConfig</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enablement_state_input`<sup>Optional</sup> <a name="enablement_state_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.enablementStateInput"></a>

```python
enablement_state_input: str
```

- *Type:* str

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SccFolderCustomModuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts">SccFolderCustomModuleTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enablement_state`<sup>Required</sup> <a name="enablement_state" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.enablementState"></a>

```python
enablement_state: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SccFolderCustomModuleConfig <a name="SccFolderCustomModuleConfig" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_folder_custom_module

sccFolderCustomModule.SccFolderCustomModuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_config: SccFolderCustomModuleCustomConfig,
  display_name: str,
  enablement_state: str,
  folder: str,
  id: str = None,
  timeouts: SccFolderCustomModuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.customConfig">custom_config</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig">SccFolderCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.enablementState">enablement_state</a></code> | <code>str</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.folder">folder</a></code> | <code>str</code> | Numerical ID of the parent folder. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#id SccFolderCustomModule#id}. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts">SccFolderCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_config`<sup>Required</sup> <a name="custom_config" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.customConfig"></a>

```python
custom_config: SccFolderCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig">SccFolderCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#custom_config SccFolderCustomModule#custom_config}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#display_name SccFolderCustomModule#display_name}

---

##### `enablement_state`<sup>Required</sup> <a name="enablement_state" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.enablementState"></a>

```python
enablement_state: str
```

- *Type:* str

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#enablement_state SccFolderCustomModule#enablement_state}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

Numerical ID of the parent folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#folder SccFolderCustomModule#folder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#id SccFolderCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.timeouts"></a>

```python
timeouts: SccFolderCustomModuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts">SccFolderCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#timeouts SccFolderCustomModule#timeouts}

---

### SccFolderCustomModuleCustomConfig <a name="SccFolderCustomModuleCustomConfig" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_folder_custom_module

sccFolderCustomModule.SccFolderCustomModuleCustomConfig(
  predicate: SccFolderCustomModuleCustomConfigPredicate,
  recommendation: str,
  resource_selector: SccFolderCustomModuleCustomConfigResourceSelector,
  severity: str,
  custom_output: SccFolderCustomModuleCustomConfigCustomOutput = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate">SccFolderCustomModuleCustomConfigPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig.property.recommendation">recommendation</a></code> | <code>str</code> | An explanation of the recommended steps that security teams can take to resolve the detected issue. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig.property.resourceSelector">resource_selector</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelector">SccFolderCustomModuleCustomConfigResourceSelector</a></code> | resource_selector block. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig.property.severity">severity</a></code> | <code>str</code> | The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"]. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig.property.customOutput">custom_output</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutput">SccFolderCustomModuleCustomConfigCustomOutput</a></code> | custom_output block. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig.property.description">description</a></code> | <code>str</code> | Text that describes the vulnerability or misconfiguration that the custom module detects. |

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig.property.predicate"></a>

```python
predicate: SccFolderCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate">SccFolderCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#predicate SccFolderCustomModule#predicate}

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig.property.recommendation"></a>

```python
recommendation: str
```

- *Type:* str

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#recommendation SccFolderCustomModule#recommendation}

---

##### `resource_selector`<sup>Required</sup> <a name="resource_selector" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig.property.resourceSelector"></a>

```python
resource_selector: SccFolderCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelector">SccFolderCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#resource_selector SccFolderCustomModule#resource_selector}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig.property.severity"></a>

```python
severity: str
```

- *Type:* str

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#severity SccFolderCustomModule#severity}

---

##### `custom_output`<sup>Optional</sup> <a name="custom_output" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig.property.customOutput"></a>

```python
custom_output: SccFolderCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutput">SccFolderCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#custom_output SccFolderCustomModule#custom_output}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#description SccFolderCustomModule#description}

---

### SccFolderCustomModuleCustomConfigCustomOutput <a name="SccFolderCustomModuleCustomConfigCustomOutput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_folder_custom_module

sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutput(
  properties: typing.Union[IResolvable, typing.List[SccFolderCustomModuleCustomConfigCustomOutputProperties]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutput.property.properties">properties</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputProperties">SccFolderCustomModuleCustomConfigCustomOutputProperties</a>]]</code> | properties block. |

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutput.property.properties"></a>

```python
properties: typing.Union[IResolvable, typing.List[SccFolderCustomModuleCustomConfigCustomOutputProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputProperties">SccFolderCustomModuleCustomConfigCustomOutputProperties</a>]]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#properties SccFolderCustomModule#properties}

---

### SccFolderCustomModuleCustomConfigCustomOutputProperties <a name="SccFolderCustomModuleCustomConfigCustomOutputProperties" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_folder_custom_module

sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputProperties(
  name: str = None,
  value_expression: SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputProperties.property.name">name</a></code> | <code>str</code> | Name of the property for the custom output. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputProperties.property.valueExpression">value_expression</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | value_expression block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputProperties.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the property for the custom output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#name SccFolderCustomModule#name}

---

##### `value_expression`<sup>Optional</sup> <a name="value_expression" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputProperties.property.valueExpression"></a>

```python
value_expression: SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

value_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#value_expression SccFolderCustomModule#value_expression}

---

### SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression <a name="SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_folder_custom_module

sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#expression SccFolderCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#description SccFolderCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#location SccFolderCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#title SccFolderCustomModule#title}

---

### SccFolderCustomModuleCustomConfigPredicate <a name="SccFolderCustomModuleCustomConfigPredicate" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_folder_custom_module

sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#expression SccFolderCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#description SccFolderCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#location SccFolderCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#title SccFolderCustomModule#title}

---

### SccFolderCustomModuleCustomConfigResourceSelector <a name="SccFolderCustomModuleCustomConfigResourceSelector" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_folder_custom_module

sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelector(
  resource_types: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelector.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | The resource types to run the detector on. |

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelector.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#resource_types SccFolderCustomModule#resource_types}

---

### SccFolderCustomModuleTimeouts <a name="SccFolderCustomModuleTimeouts" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_folder_custom_module

sccFolderCustomModule.SccFolderCustomModuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#create SccFolderCustomModule#create}. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#delete SccFolderCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#update SccFolderCustomModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#create SccFolderCustomModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#delete SccFolderCustomModule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#update SccFolderCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccFolderCustomModuleCustomConfigCustomOutputOutputReference <a name="SccFolderCustomModuleCustomConfigCustomOutputOutputReference" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_folder_custom_module

sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.resetProperties">reset_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_properties` <a name="put_properties" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.putProperties"></a>

```python
def put_properties(
  value: typing.Union[IResolvable, typing.List[SccFolderCustomModuleCustomConfigCustomOutputProperties]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.putProperties.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputProperties">SccFolderCustomModuleCustomConfigCustomOutputProperties</a>]]

---

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList">SccFolderCustomModuleCustomConfigCustomOutputPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputProperties">SccFolderCustomModuleCustomConfigCustomOutputProperties</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutput">SccFolderCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.properties"></a>

```python
properties: SccFolderCustomModuleCustomConfigCustomOutputPropertiesList
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList">SccFolderCustomModuleCustomConfigCustomOutputPropertiesList</a>

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Union[IResolvable, typing.List[SccFolderCustomModuleCustomConfigCustomOutputProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputProperties">SccFolderCustomModuleCustomConfigCustomOutputProperties</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue"></a>

```python
internal_value: SccFolderCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutput">SccFolderCustomModuleCustomConfigCustomOutput</a>

---


### SccFolderCustomModuleCustomConfigCustomOutputPropertiesList <a name="SccFolderCustomModuleCustomConfigCustomOutputPropertiesList" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_folder_custom_module

sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputProperties">SccFolderCustomModuleCustomConfigCustomOutputProperties</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SccFolderCustomModuleCustomConfigCustomOutputProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputProperties">SccFolderCustomModuleCustomConfigCustomOutputProperties</a>]]

---


### SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference <a name="SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_folder_custom_module

sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression">put_value_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression">reset_value_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value_expression` <a name="put_value_expression" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression"></a>

```python
def put_value_expression(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#expression SccFolderCustomModule#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.description"></a>

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#description SccFolderCustomModule#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#location SccFolderCustomModule#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#title SccFolderCustomModule#title}

---

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value_expression` <a name="reset_value_expression" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression"></a>

```python
def reset_value_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression">value_expression</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput">value_expression_input</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputProperties">SccFolderCustomModuleCustomConfigCustomOutputProperties</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_expression`<sup>Required</sup> <a name="value_expression" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression"></a>

```python
value_expression: SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_expression_input`<sup>Optional</sup> <a name="value_expression_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput"></a>

```python
value_expression_input: SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SccFolderCustomModuleCustomConfigCustomOutputProperties]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputProperties">SccFolderCustomModuleCustomConfigCustomOutputProperties</a>]

---


### SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference <a name="SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_folder_custom_module

sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue"></a>

```python
internal_value: SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---


### SccFolderCustomModuleCustomConfigOutputReference <a name="SccFolderCustomModuleCustomConfigOutputReference" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_folder_custom_module

sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.putCustomOutput">put_custom_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.putPredicate">put_predicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.putResourceSelector">put_resource_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.resetCustomOutput">reset_custom_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_output` <a name="put_custom_output" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.putCustomOutput"></a>

```python
def put_custom_output(
  properties: typing.Union[IResolvable, typing.List[SccFolderCustomModuleCustomConfigCustomOutputProperties]] = None
) -> None
```

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.putCustomOutput.parameter.properties"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputProperties">SccFolderCustomModuleCustomConfigCustomOutputProperties</a>]]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#properties SccFolderCustomModule#properties}

---

##### `put_predicate` <a name="put_predicate" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.putPredicate"></a>

```python
def put_predicate(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.putPredicate.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#expression SccFolderCustomModule#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.putPredicate.parameter.description"></a>

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#description SccFolderCustomModule#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.putPredicate.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#location SccFolderCustomModule#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.putPredicate.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#title SccFolderCustomModule#title}

---

##### `put_resource_selector` <a name="put_resource_selector" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.putResourceSelector"></a>

```python
def put_resource_selector(
  resource_types: typing.List[str]
) -> None
```

###### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.putResourceSelector.parameter.resourceTypes"></a>

- *Type:* typing.List[str]

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/scc_folder_custom_module#resource_types SccFolderCustomModule#resource_types}

---

##### `reset_custom_output` <a name="reset_custom_output" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.resetCustomOutput"></a>

```python
def reset_custom_output() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.customOutput">custom_output</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference">SccFolderCustomModuleCustomConfigCustomOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference">SccFolderCustomModuleCustomConfigPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.resourceSelector">resource_selector</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference">SccFolderCustomModuleCustomConfigResourceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.customOutputInput">custom_output_input</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutput">SccFolderCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.predicateInput">predicate_input</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate">SccFolderCustomModuleCustomConfigPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.recommendationInput">recommendation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.resourceSelectorInput">resource_selector_input</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelector">SccFolderCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.recommendation">recommendation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig">SccFolderCustomModuleCustomConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_output`<sup>Required</sup> <a name="custom_output" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.customOutput"></a>

```python
custom_output: SccFolderCustomModuleCustomConfigCustomOutputOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference">SccFolderCustomModuleCustomConfigCustomOutputOutputReference</a>

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.predicate"></a>

```python
predicate: SccFolderCustomModuleCustomConfigPredicateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference">SccFolderCustomModuleCustomConfigPredicateOutputReference</a>

---

##### `resource_selector`<sup>Required</sup> <a name="resource_selector" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.resourceSelector"></a>

```python
resource_selector: SccFolderCustomModuleCustomConfigResourceSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference">SccFolderCustomModuleCustomConfigResourceSelectorOutputReference</a>

---

##### `custom_output_input`<sup>Optional</sup> <a name="custom_output_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.customOutputInput"></a>

```python
custom_output_input: SccFolderCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutput">SccFolderCustomModuleCustomConfigCustomOutput</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `predicate_input`<sup>Optional</sup> <a name="predicate_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.predicateInput"></a>

```python
predicate_input: SccFolderCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate">SccFolderCustomModuleCustomConfigPredicate</a>

---

##### `recommendation_input`<sup>Optional</sup> <a name="recommendation_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.recommendationInput"></a>

```python
recommendation_input: str
```

- *Type:* str

---

##### `resource_selector_input`<sup>Optional</sup> <a name="resource_selector_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.resourceSelectorInput"></a>

```python
resource_selector_input: SccFolderCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelector">SccFolderCustomModuleCustomConfigResourceSelector</a>

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.recommendation"></a>

```python
recommendation: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.internalValue"></a>

```python
internal_value: SccFolderCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig">SccFolderCustomModuleCustomConfig</a>

---


### SccFolderCustomModuleCustomConfigPredicateOutputReference <a name="SccFolderCustomModuleCustomConfigPredicateOutputReference" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_folder_custom_module

sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate">SccFolderCustomModuleCustomConfigPredicate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.internalValue"></a>

```python
internal_value: SccFolderCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate">SccFolderCustomModuleCustomConfigPredicate</a>

---


### SccFolderCustomModuleCustomConfigResourceSelectorOutputReference <a name="SccFolderCustomModuleCustomConfigResourceSelectorOutputReference" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_folder_custom_module

sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput">resource_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelector">SccFolderCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_types_input`<sup>Optional</sup> <a name="resource_types_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput"></a>

```python
resource_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue"></a>

```python
internal_value: SccFolderCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelector">SccFolderCustomModuleCustomConfigResourceSelector</a>

---


### SccFolderCustomModuleTimeoutsOutputReference <a name="SccFolderCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_folder_custom_module

sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts">SccFolderCustomModuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SccFolderCustomModuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts">SccFolderCustomModuleTimeouts</a>]

---



