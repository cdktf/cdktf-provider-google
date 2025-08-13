# `sccManagementFolderSecurityHealthAnalyticsCustomModule` Submodule <a name="`sccManagementFolderSecurityHealthAnalyticsCustomModule` Submodule" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccManagementFolderSecurityHealthAnalyticsCustomModule <a name="SccManagementFolderSecurityHealthAnalyticsCustomModule" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module google_scc_management_folder_security_health_analytics_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_folder_security_health_analytics_custom_module

sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  folder: str,
  custom_config: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig = None,
  display_name: str = None,
  enablement_state: str = None,
  id: str = None,
  location: str = None,
  timeouts: SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.folder">folder</a></code> | <code>str</code> | Numerical ID of the parent folder. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.customConfig">custom_config</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.enablementState">enablement_state</a></code> | <code>str</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#id SccManagementFolderSecurityHealthAnalyticsCustomModule#id}. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.location">location</a></code> | <code>str</code> | Location ID of the parent organization. If not provided, 'global' will be used as the default location. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.folder"></a>

- *Type:* str

Numerical ID of the parent folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#folder SccManagementFolderSecurityHealthAnalyticsCustomModule#folder}

---

##### `custom_config`<sup>Optional</sup> <a name="custom_config" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.customConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#custom_config SccManagementFolderSecurityHealthAnalyticsCustomModule#custom_config}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#display_name SccManagementFolderSecurityHealthAnalyticsCustomModule#display_name}

---

##### `enablement_state`<sup>Optional</sup> <a name="enablement_state" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.enablementState"></a>

- *Type:* str

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#enablement_state SccManagementFolderSecurityHealthAnalyticsCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#id SccManagementFolderSecurityHealthAnalyticsCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.location"></a>

- *Type:* str

Location ID of the parent organization. If not provided, 'global' will be used as the default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#location SccManagementFolderSecurityHealthAnalyticsCustomModule#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#timeouts SccManagementFolderSecurityHealthAnalyticsCustomModule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.putCustomConfig">put_custom_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetCustomConfig">reset_custom_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetEnablementState">reset_enablement_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_config` <a name="put_custom_config" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.putCustomConfig"></a>

```python
def put_custom_config(
  custom_output: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput = None,
  description: str = None,
  predicate: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate = None,
  recommendation: str = None,
  resource_selector: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector = None,
  severity: str = None
) -> None
```

###### `custom_output`<sup>Optional</sup> <a name="custom_output" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.customOutput"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#custom_output SccManagementFolderSecurityHealthAnalyticsCustomModule#custom_output}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.description"></a>

- *Type:* str

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#description SccManagementFolderSecurityHealthAnalyticsCustomModule#description}

---

###### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.predicate"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#predicate SccManagementFolderSecurityHealthAnalyticsCustomModule#predicate}

---

###### `recommendation`<sup>Optional</sup> <a name="recommendation" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.recommendation"></a>

- *Type:* str

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#recommendation SccManagementFolderSecurityHealthAnalyticsCustomModule#recommendation}

---

###### `resource_selector`<sup>Optional</sup> <a name="resource_selector" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.resourceSelector"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#resource_selector SccManagementFolderSecurityHealthAnalyticsCustomModule#resource_selector}

---

###### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.severity"></a>

- *Type:* str

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#severity SccManagementFolderSecurityHealthAnalyticsCustomModule#severity}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#create SccManagementFolderSecurityHealthAnalyticsCustomModule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#delete SccManagementFolderSecurityHealthAnalyticsCustomModule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#update SccManagementFolderSecurityHealthAnalyticsCustomModule#update}.

---

##### `reset_custom_config` <a name="reset_custom_config" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetCustomConfig"></a>

```python
def reset_custom_config() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_enablement_state` <a name="reset_enablement_state" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetEnablementState"></a>

```python
def reset_enablement_state() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SccManagementFolderSecurityHealthAnalyticsCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import scc_management_folder_security_health_analytics_custom_module

sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import scc_management_folder_security_health_analytics_custom_module

sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import scc_management_folder_security_health_analytics_custom_module

sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import scc_management_folder_security_health_analytics_custom_module

sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SccManagementFolderSecurityHealthAnalyticsCustomModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SccManagementFolderSecurityHealthAnalyticsCustomModule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SccManagementFolderSecurityHealthAnalyticsCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SccManagementFolderSecurityHealthAnalyticsCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.ancestorModule">ancestor_module</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.customConfig">custom_config</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.lastEditor">last_editor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.customConfigInput">custom_config_input</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.enablementStateInput">enablement_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.enablementState">enablement_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.location">location</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ancestor_module`<sup>Required</sup> <a name="ancestor_module" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.ancestorModule"></a>

```python
ancestor_module: str
```

- *Type:* str

---

##### `custom_config`<sup>Required</sup> <a name="custom_config" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.customConfig"></a>

```python
custom_config: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference</a>

---

##### `last_editor`<sup>Required</sup> <a name="last_editor" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.lastEditor"></a>

```python
last_editor: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.timeouts"></a>

```python
timeouts: SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `custom_config_input`<sup>Optional</sup> <a name="custom_config_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.customConfigInput"></a>

```python
custom_config_input: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enablement_state_input`<sup>Optional</sup> <a name="enablement_state_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.enablementStateInput"></a>

```python
enablement_state_input: str
```

- *Type:* str

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enablement_state`<sup>Required</sup> <a name="enablement_state" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.enablementState"></a>

```python
enablement_state: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.location"></a>

```python
location: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_folder_security_health_analytics_custom_module

sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  folder: str,
  custom_config: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig = None,
  display_name: str = None,
  enablement_state: str = None,
  id: str = None,
  location: str = None,
  timeouts: SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.folder">folder</a></code> | <code>str</code> | Numerical ID of the parent folder. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.customConfig">custom_config</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.enablementState">enablement_state</a></code> | <code>str</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#id SccManagementFolderSecurityHealthAnalyticsCustomModule#id}. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.location">location</a></code> | <code>str</code> | Location ID of the parent organization. If not provided, 'global' will be used as the default location. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

Numerical ID of the parent folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#folder SccManagementFolderSecurityHealthAnalyticsCustomModule#folder}

---

##### `custom_config`<sup>Optional</sup> <a name="custom_config" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.customConfig"></a>

```python
custom_config: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#custom_config SccManagementFolderSecurityHealthAnalyticsCustomModule#custom_config}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.displayName"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#display_name SccManagementFolderSecurityHealthAnalyticsCustomModule#display_name}

---

##### `enablement_state`<sup>Optional</sup> <a name="enablement_state" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.enablementState"></a>

```python
enablement_state: str
```

- *Type:* str

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#enablement_state SccManagementFolderSecurityHealthAnalyticsCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#id SccManagementFolderSecurityHealthAnalyticsCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location ID of the parent organization. If not provided, 'global' will be used as the default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#location SccManagementFolderSecurityHealthAnalyticsCustomModule#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.timeouts"></a>

```python
timeouts: SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#timeouts SccManagementFolderSecurityHealthAnalyticsCustomModule#timeouts}

---

### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_folder_security_health_analytics_custom_module

sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig(
  custom_output: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput = None,
  description: str = None,
  predicate: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate = None,
  recommendation: str = None,
  resource_selector: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector = None,
  severity: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.customOutput">custom_output</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | custom_output block. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.description">description</a></code> | <code>str</code> | Text that describes the vulnerability or misconfiguration that the custom module detects. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.recommendation">recommendation</a></code> | <code>str</code> | An explanation of the recommended steps that security teams can take to resolve the detected issue. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.resourceSelector">resource_selector</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | resource_selector block. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.severity">severity</a></code> | <code>str</code> | The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"]. |

---

##### `custom_output`<sup>Optional</sup> <a name="custom_output" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.customOutput"></a>

```python
custom_output: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#custom_output SccManagementFolderSecurityHealthAnalyticsCustomModule#custom_output}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#description SccManagementFolderSecurityHealthAnalyticsCustomModule#description}

---

##### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.predicate"></a>

```python
predicate: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#predicate SccManagementFolderSecurityHealthAnalyticsCustomModule#predicate}

---

##### `recommendation`<sup>Optional</sup> <a name="recommendation" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.recommendation"></a>

```python
recommendation: str
```

- *Type:* str

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#recommendation SccManagementFolderSecurityHealthAnalyticsCustomModule#recommendation}

---

##### `resource_selector`<sup>Optional</sup> <a name="resource_selector" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.resourceSelector"></a>

```python
resource_selector: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#resource_selector SccManagementFolderSecurityHealthAnalyticsCustomModule#resource_selector}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.severity"></a>

```python
severity: str
```

- *Type:* str

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#severity SccManagementFolderSecurityHealthAnalyticsCustomModule#severity}

---

### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_folder_security_health_analytics_custom_module

sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput(
  properties: typing.Union[IResolvable, typing.List[SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.property.properties">properties</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]</code> | properties block. |

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.property.properties"></a>

```python
properties: typing.Union[IResolvable, typing.List[SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#properties SccManagementFolderSecurityHealthAnalyticsCustomModule#properties}

---

### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_folder_security_health_analytics_custom_module

sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties(
  name: str = None,
  value_expression: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.name">name</a></code> | <code>str</code> | Name of the property for the custom output. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.valueExpression">value_expression</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | value_expression block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the property for the custom output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#name SccManagementFolderSecurityHealthAnalyticsCustomModule#name}

---

##### `value_expression`<sup>Optional</sup> <a name="value_expression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.valueExpression"></a>

```python
value_expression: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

value_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#value_expression SccManagementFolderSecurityHealthAnalyticsCustomModule#value_expression}

---

### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_folder_security_health_analytics_custom_module

sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#expression SccManagementFolderSecurityHealthAnalyticsCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#description SccManagementFolderSecurityHealthAnalyticsCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#location SccManagementFolderSecurityHealthAnalyticsCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#title SccManagementFolderSecurityHealthAnalyticsCustomModule#title}

---

### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_folder_security_health_analytics_custom_module

sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#expression SccManagementFolderSecurityHealthAnalyticsCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#description SccManagementFolderSecurityHealthAnalyticsCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#location SccManagementFolderSecurityHealthAnalyticsCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#title SccManagementFolderSecurityHealthAnalyticsCustomModule#title}

---

### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_folder_security_health_analytics_custom_module

sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector(
  resource_types: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | The resource types to run the detector on. |

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#resource_types SccManagementFolderSecurityHealthAnalyticsCustomModule#resource_types}

---

### SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_folder_security_health_analytics_custom_module

sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#create SccManagementFolderSecurityHealthAnalyticsCustomModule#create}. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#delete SccManagementFolderSecurityHealthAnalyticsCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#update SccManagementFolderSecurityHealthAnalyticsCustomModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#create SccManagementFolderSecurityHealthAnalyticsCustomModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#delete SccManagementFolderSecurityHealthAnalyticsCustomModule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#update SccManagementFolderSecurityHealthAnalyticsCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_folder_security_health_analytics_custom_module

sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resetProperties">reset_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_properties` <a name="put_properties" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties"></a>

```python
def put_properties(
  value: typing.Union[IResolvable, typing.List[SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]

---

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.properties"></a>

```python
properties: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList</a>

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Union[IResolvable, typing.List[SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue"></a>

```python
internal_value: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---


### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_folder_security_health_analytics_custom_module

sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]

---


### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_folder_security_health_analytics_custom_module

sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression">put_value_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression">reset_value_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value_expression` <a name="put_value_expression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression"></a>

```python
def put_value_expression(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#expression SccManagementFolderSecurityHealthAnalyticsCustomModule#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.description"></a>

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#description SccManagementFolderSecurityHealthAnalyticsCustomModule#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#location SccManagementFolderSecurityHealthAnalyticsCustomModule#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#title SccManagementFolderSecurityHealthAnalyticsCustomModule#title}

---

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value_expression` <a name="reset_value_expression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression"></a>

```python
def reset_value_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression">value_expression</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput">value_expression_input</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_expression`<sup>Required</sup> <a name="value_expression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression"></a>

```python
value_expression: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_expression_input`<sup>Optional</sup> <a name="value_expression_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput"></a>

```python
value_expression_input: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]

---


### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_folder_security_health_analytics_custom_module

sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue"></a>

```python
internal_value: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---


### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_folder_security_health_analytics_custom_module

sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput">put_custom_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate">put_predicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector">put_resource_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetCustomOutput">reset_custom_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetPredicate">reset_predicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetRecommendation">reset_recommendation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetResourceSelector">reset_resource_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetSeverity">reset_severity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_output` <a name="put_custom_output" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput"></a>

```python
def put_custom_output(
  properties: typing.Union[IResolvable, typing.List[SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]] = None
) -> None
```

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput.parameter.properties"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#properties SccManagementFolderSecurityHealthAnalyticsCustomModule#properties}

---

##### `put_predicate` <a name="put_predicate" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate"></a>

```python
def put_predicate(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#expression SccManagementFolderSecurityHealthAnalyticsCustomModule#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate.parameter.description"></a>

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#description SccManagementFolderSecurityHealthAnalyticsCustomModule#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#location SccManagementFolderSecurityHealthAnalyticsCustomModule#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#title SccManagementFolderSecurityHealthAnalyticsCustomModule#title}

---

##### `put_resource_selector` <a name="put_resource_selector" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector"></a>

```python
def put_resource_selector(
  resource_types: typing.List[str]
) -> None
```

###### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector.parameter.resourceTypes"></a>

- *Type:* typing.List[str]

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#resource_types SccManagementFolderSecurityHealthAnalyticsCustomModule#resource_types}

---

##### `reset_custom_output` <a name="reset_custom_output" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetCustomOutput"></a>

```python
def reset_custom_output() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_predicate` <a name="reset_predicate" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetPredicate"></a>

```python
def reset_predicate() -> None
```

##### `reset_recommendation` <a name="reset_recommendation" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetRecommendation"></a>

```python
def reset_recommendation() -> None
```

##### `reset_resource_selector` <a name="reset_resource_selector" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetResourceSelector"></a>

```python
def reset_resource_selector() -> None
```

##### `reset_severity` <a name="reset_severity" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetSeverity"></a>

```python
def reset_severity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutput">custom_output</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelector">resource_selector</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutputInput">custom_output_input</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicateInput">predicate_input</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendationInput">recommendation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelectorInput">resource_selector_input</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendation">recommendation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_output`<sup>Required</sup> <a name="custom_output" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutput"></a>

```python
custom_output: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference</a>

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicate"></a>

```python
predicate: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference</a>

---

##### `resource_selector`<sup>Required</sup> <a name="resource_selector" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelector"></a>

```python
resource_selector: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference</a>

---

##### `custom_output_input`<sup>Optional</sup> <a name="custom_output_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutputInput"></a>

```python
custom_output_input: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `predicate_input`<sup>Optional</sup> <a name="predicate_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicateInput"></a>

```python
predicate_input: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---

##### `recommendation_input`<sup>Optional</sup> <a name="recommendation_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendationInput"></a>

```python
recommendation_input: str
```

- *Type:* str

---

##### `resource_selector_input`<sup>Optional</sup> <a name="resource_selector_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelectorInput"></a>

```python
resource_selector_input: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendation"></a>

```python
recommendation: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.internalValue"></a>

```python
internal_value: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---


### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_folder_security_health_analytics_custom_module

sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.internalValue"></a>

```python
internal_value: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---


### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_folder_security_health_analytics_custom_module

sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput">resource_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_types_input`<sup>Optional</sup> <a name="resource_types_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput"></a>

```python
resource_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue"></a>

```python
internal_value: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---


### SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_folder_security_health_analytics_custom_module

sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a>]

---



