# `sccManagementProjectSecurityHealthAnalyticsCustomModule` Submodule <a name="`sccManagementProjectSecurityHealthAnalyticsCustomModule` Submodule" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccManagementProjectSecurityHealthAnalyticsCustomModule <a name="SccManagementProjectSecurityHealthAnalyticsCustomModule" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module google_scc_management_project_security_health_analytics_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_project_security_health_analytics_custom_module

sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_config: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig = None,
  display_name: str = None,
  enablement_state: str = None,
  id: str = None,
  location: str = None,
  project: str = None,
  timeouts: SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.customConfig">custom_config</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.enablementState">enablement_state</a></code> | <code>str</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#id SccManagementProjectSecurityHealthAnalyticsCustomModule#id}. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.location">location</a></code> | <code>str</code> | Location ID of the parent organization. If not provided, 'global' will be used as the default location. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#project SccManagementProjectSecurityHealthAnalyticsCustomModule#project}. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_config`<sup>Optional</sup> <a name="custom_config" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.customConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#custom_config SccManagementProjectSecurityHealthAnalyticsCustomModule#custom_config}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#display_name SccManagementProjectSecurityHealthAnalyticsCustomModule#display_name}

---

##### `enablement_state`<sup>Optional</sup> <a name="enablement_state" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.enablementState"></a>

- *Type:* str

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#enablement_state SccManagementProjectSecurityHealthAnalyticsCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#id SccManagementProjectSecurityHealthAnalyticsCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.location"></a>

- *Type:* str

Location ID of the parent organization. If not provided, 'global' will be used as the default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#location SccManagementProjectSecurityHealthAnalyticsCustomModule#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#project SccManagementProjectSecurityHealthAnalyticsCustomModule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#timeouts SccManagementProjectSecurityHealthAnalyticsCustomModule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.putCustomConfig">put_custom_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetCustomConfig">reset_custom_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetEnablementState">reset_enablement_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_config` <a name="put_custom_config" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.putCustomConfig"></a>

```python
def put_custom_config(
  predicate: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate,
  recommendation: str,
  resource_selector: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector,
  severity: str,
  custom_output: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput = None,
  description: str = None
) -> None
```

###### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.predicate"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#predicate SccManagementProjectSecurityHealthAnalyticsCustomModule#predicate}

---

###### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.recommendation"></a>

- *Type:* str

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#recommendation SccManagementProjectSecurityHealthAnalyticsCustomModule#recommendation}

---

###### `resource_selector`<sup>Required</sup> <a name="resource_selector" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.resourceSelector"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#resource_selector SccManagementProjectSecurityHealthAnalyticsCustomModule#resource_selector}

---

###### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.severity"></a>

- *Type:* str

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#severity SccManagementProjectSecurityHealthAnalyticsCustomModule#severity}

---

###### `custom_output`<sup>Optional</sup> <a name="custom_output" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.customOutput"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#custom_output SccManagementProjectSecurityHealthAnalyticsCustomModule#custom_output}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.description"></a>

- *Type:* str

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#description SccManagementProjectSecurityHealthAnalyticsCustomModule#description}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#create SccManagementProjectSecurityHealthAnalyticsCustomModule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#delete SccManagementProjectSecurityHealthAnalyticsCustomModule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#update SccManagementProjectSecurityHealthAnalyticsCustomModule#update}.

---

##### `reset_custom_config` <a name="reset_custom_config" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetCustomConfig"></a>

```python
def reset_custom_config() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_enablement_state` <a name="reset_enablement_state" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetEnablementState"></a>

```python
def reset_enablement_state() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SccManagementProjectSecurityHealthAnalyticsCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import scc_management_project_security_health_analytics_custom_module

sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import scc_management_project_security_health_analytics_custom_module

sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import scc_management_project_security_health_analytics_custom_module

sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import scc_management_project_security_health_analytics_custom_module

sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SccManagementProjectSecurityHealthAnalyticsCustomModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SccManagementProjectSecurityHealthAnalyticsCustomModule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SccManagementProjectSecurityHealthAnalyticsCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SccManagementProjectSecurityHealthAnalyticsCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.ancestorModule">ancestor_module</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.customConfig">custom_config</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.lastEditor">last_editor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference">SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.customConfigInput">custom_config_input</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.enablementStateInput">enablement_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.enablementState">enablement_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ancestor_module`<sup>Required</sup> <a name="ancestor_module" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.ancestorModule"></a>

```python
ancestor_module: str
```

- *Type:* str

---

##### `custom_config`<sup>Required</sup> <a name="custom_config" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.customConfig"></a>

```python
custom_config: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference</a>

---

##### `last_editor`<sup>Required</sup> <a name="last_editor" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.lastEditor"></a>

```python
last_editor: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.timeouts"></a>

```python
timeouts: SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference">SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `custom_config_input`<sup>Optional</sup> <a name="custom_config_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.customConfigInput"></a>

```python
custom_config_input: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enablement_state_input`<sup>Optional</sup> <a name="enablement_state_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.enablementStateInput"></a>

```python
enablement_state_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enablement_state`<sup>Required</sup> <a name="enablement_state" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.enablementState"></a>

```python
enablement_state: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_project_security_health_analytics_custom_module

sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_config: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig = None,
  display_name: str = None,
  enablement_state: str = None,
  id: str = None,
  location: str = None,
  project: str = None,
  timeouts: SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.customConfig">custom_config</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.enablementState">enablement_state</a></code> | <code>str</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#id SccManagementProjectSecurityHealthAnalyticsCustomModule#id}. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.location">location</a></code> | <code>str</code> | Location ID of the parent organization. If not provided, 'global' will be used as the default location. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#project SccManagementProjectSecurityHealthAnalyticsCustomModule#project}. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_config`<sup>Optional</sup> <a name="custom_config" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.customConfig"></a>

```python
custom_config: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#custom_config SccManagementProjectSecurityHealthAnalyticsCustomModule#custom_config}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.displayName"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#display_name SccManagementProjectSecurityHealthAnalyticsCustomModule#display_name}

---

##### `enablement_state`<sup>Optional</sup> <a name="enablement_state" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.enablementState"></a>

```python
enablement_state: str
```

- *Type:* str

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#enablement_state SccManagementProjectSecurityHealthAnalyticsCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#id SccManagementProjectSecurityHealthAnalyticsCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location ID of the parent organization. If not provided, 'global' will be used as the default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#location SccManagementProjectSecurityHealthAnalyticsCustomModule#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#project SccManagementProjectSecurityHealthAnalyticsCustomModule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig.property.timeouts"></a>

```python
timeouts: SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#timeouts SccManagementProjectSecurityHealthAnalyticsCustomModule#timeouts}

---

### SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_project_security_health_analytics_custom_module

sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig(
  predicate: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate,
  recommendation: str,
  resource_selector: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector,
  severity: str,
  custom_output: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.recommendation">recommendation</a></code> | <code>str</code> | An explanation of the recommended steps that security teams can take to resolve the detected issue. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.resourceSelector">resource_selector</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | resource_selector block. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.severity">severity</a></code> | <code>str</code> | The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"]. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.customOutput">custom_output</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | custom_output block. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.description">description</a></code> | <code>str</code> | Text that describes the vulnerability or misconfiguration that the custom module detects. |

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.predicate"></a>

```python
predicate: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#predicate SccManagementProjectSecurityHealthAnalyticsCustomModule#predicate}

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.recommendation"></a>

```python
recommendation: str
```

- *Type:* str

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#recommendation SccManagementProjectSecurityHealthAnalyticsCustomModule#recommendation}

---

##### `resource_selector`<sup>Required</sup> <a name="resource_selector" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.resourceSelector"></a>

```python
resource_selector: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#resource_selector SccManagementProjectSecurityHealthAnalyticsCustomModule#resource_selector}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.severity"></a>

```python
severity: str
```

- *Type:* str

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#severity SccManagementProjectSecurityHealthAnalyticsCustomModule#severity}

---

##### `custom_output`<sup>Optional</sup> <a name="custom_output" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.customOutput"></a>

```python
custom_output: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#custom_output SccManagementProjectSecurityHealthAnalyticsCustomModule#custom_output}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#description SccManagementProjectSecurityHealthAnalyticsCustomModule#description}

---

### SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_project_security_health_analytics_custom_module

sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput(
  properties: typing.Union[IResolvable, typing.List[SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.property.properties">properties</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]</code> | properties block. |

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.property.properties"></a>

```python
properties: typing.Union[IResolvable, typing.List[SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#properties SccManagementProjectSecurityHealthAnalyticsCustomModule#properties}

---

### SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_project_security_health_analytics_custom_module

sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties(
  name: str = None,
  value_expression: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.name">name</a></code> | <code>str</code> | Name of the property for the custom output. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.valueExpression">value_expression</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | value_expression block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the property for the custom output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#name SccManagementProjectSecurityHealthAnalyticsCustomModule#name}

---

##### `value_expression`<sup>Optional</sup> <a name="value_expression" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.valueExpression"></a>

```python
value_expression: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

value_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#value_expression SccManagementProjectSecurityHealthAnalyticsCustomModule#value_expression}

---

### SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_project_security_health_analytics_custom_module

sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#expression SccManagementProjectSecurityHealthAnalyticsCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#description SccManagementProjectSecurityHealthAnalyticsCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#location SccManagementProjectSecurityHealthAnalyticsCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#title SccManagementProjectSecurityHealthAnalyticsCustomModule#title}

---

### SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_project_security_health_analytics_custom_module

sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#expression SccManagementProjectSecurityHealthAnalyticsCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#description SccManagementProjectSecurityHealthAnalyticsCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#location SccManagementProjectSecurityHealthAnalyticsCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#title SccManagementProjectSecurityHealthAnalyticsCustomModule#title}

---

### SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_project_security_health_analytics_custom_module

sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector(
  resource_types: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | The resource types to run the detector on. |

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#resource_types SccManagementProjectSecurityHealthAnalyticsCustomModule#resource_types}

---

### SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_project_security_health_analytics_custom_module

sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#create SccManagementProjectSecurityHealthAnalyticsCustomModule#create}. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#delete SccManagementProjectSecurityHealthAnalyticsCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#update SccManagementProjectSecurityHealthAnalyticsCustomModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#create SccManagementProjectSecurityHealthAnalyticsCustomModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#delete SccManagementProjectSecurityHealthAnalyticsCustomModule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#update SccManagementProjectSecurityHealthAnalyticsCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_project_security_health_analytics_custom_module

sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resetProperties">reset_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_properties` <a name="put_properties" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties"></a>

```python
def put_properties(
  value: typing.Union[IResolvable, typing.List[SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]

---

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.properties"></a>

```python
properties: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList</a>

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Union[IResolvable, typing.List[SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue"></a>

```python
internal_value: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---


### SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_project_security_health_analytics_custom_module

sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]

---


### SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_project_security_health_analytics_custom_module

sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression">put_value_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression">reset_value_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value_expression` <a name="put_value_expression" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression"></a>

```python
def put_value_expression(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#expression SccManagementProjectSecurityHealthAnalyticsCustomModule#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.description"></a>

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#description SccManagementProjectSecurityHealthAnalyticsCustomModule#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#location SccManagementProjectSecurityHealthAnalyticsCustomModule#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#title SccManagementProjectSecurityHealthAnalyticsCustomModule#title}

---

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value_expression` <a name="reset_value_expression" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression"></a>

```python
def reset_value_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression">value_expression</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput">value_expression_input</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_expression`<sup>Required</sup> <a name="value_expression" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression"></a>

```python
value_expression: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_expression_input`<sup>Optional</sup> <a name="value_expression_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput"></a>

```python
value_expression_input: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]

---


### SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_project_security_health_analytics_custom_module

sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue"></a>

```python
internal_value: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---


### SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_project_security_health_analytics_custom_module

sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput">put_custom_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate">put_predicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector">put_resource_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetCustomOutput">reset_custom_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_output` <a name="put_custom_output" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput"></a>

```python
def put_custom_output(
  properties: typing.Union[IResolvable, typing.List[SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties]] = None
) -> None
```

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput.parameter.properties"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>]]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#properties SccManagementProjectSecurityHealthAnalyticsCustomModule#properties}

---

##### `put_predicate` <a name="put_predicate" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate"></a>

```python
def put_predicate(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#expression SccManagementProjectSecurityHealthAnalyticsCustomModule#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate.parameter.description"></a>

- *Type:* str

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#description SccManagementProjectSecurityHealthAnalyticsCustomModule#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#location SccManagementProjectSecurityHealthAnalyticsCustomModule#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#title SccManagementProjectSecurityHealthAnalyticsCustomModule#title}

---

##### `put_resource_selector` <a name="put_resource_selector" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector"></a>

```python
def put_resource_selector(
  resource_types: typing.List[str]
) -> None
```

###### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector.parameter.resourceTypes"></a>

- *Type:* typing.List[str]

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_management_project_security_health_analytics_custom_module#resource_types SccManagementProjectSecurityHealthAnalyticsCustomModule#resource_types}

---

##### `reset_custom_output` <a name="reset_custom_output" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetCustomOutput"></a>

```python
def reset_custom_output() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutput">custom_output</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelector">resource_selector</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutputInput">custom_output_input</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicateInput">predicate_input</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendationInput">recommendation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelectorInput">resource_selector_input</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendation">recommendation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_output`<sup>Required</sup> <a name="custom_output" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutput"></a>

```python
custom_output: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference</a>

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicate"></a>

```python
predicate: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference</a>

---

##### `resource_selector`<sup>Required</sup> <a name="resource_selector" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelector"></a>

```python
resource_selector: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference</a>

---

##### `custom_output_input`<sup>Optional</sup> <a name="custom_output_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutputInput"></a>

```python
custom_output_input: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `predicate_input`<sup>Optional</sup> <a name="predicate_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicateInput"></a>

```python
predicate_input: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---

##### `recommendation_input`<sup>Optional</sup> <a name="recommendation_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendationInput"></a>

```python
recommendation_input: str
```

- *Type:* str

---

##### `resource_selector_input`<sup>Optional</sup> <a name="resource_selector_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelectorInput"></a>

```python
resource_selector_input: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendation"></a>

```python
recommendation: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.internalValue"></a>

```python
internal_value: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---


### SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_project_security_health_analytics_custom_module

sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.internalValue"></a>

```python
internal_value: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---


### SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_project_security_health_analytics_custom_module

sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput">resource_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_types_input`<sup>Optional</sup> <a name="resource_types_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput"></a>

```python
resource_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue"></a>

```python
internal_value: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---


### SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference <a name="SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_management_project_security_health_analytics_custom_module

sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccManagementProjectSecurityHealthAnalyticsCustomModule.SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts</a>]

---



