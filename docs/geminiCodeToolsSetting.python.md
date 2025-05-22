# `geminiCodeToolsSetting` Submodule <a name="`geminiCodeToolsSetting` Submodule" id="@cdktf/provider-google.geminiCodeToolsSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiCodeToolsSetting <a name="GeminiCodeToolsSetting" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting google_gemini_code_tools_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_code_tools_setting

geminiCodeToolsSetting.GeminiCodeToolsSetting(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  code_tools_setting_id: str,
  enabled_tool: typing.Union[IResolvable, typing.List[GeminiCodeToolsSettingEnabledTool]],
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  timeouts: GeminiCodeToolsSettingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.codeToolsSettingId">code_tools_setting_id</a></code> | <code>str</code> | Id of the Code Tools Setting. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.enabledTool">enabled_tool</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool">GeminiCodeToolsSettingEnabledTool</a>]]</code> | enabled_tool block. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#id GeminiCodeToolsSetting#id}. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#project GeminiCodeToolsSetting#project}. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts">GeminiCodeToolsSettingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `code_tools_setting_id`<sup>Required</sup> <a name="code_tools_setting_id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.codeToolsSettingId"></a>

- *Type:* str

Id of the Code Tools Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#code_tools_setting_id GeminiCodeToolsSetting#code_tools_setting_id}

---

##### `enabled_tool`<sup>Required</sup> <a name="enabled_tool" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.enabledTool"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool">GeminiCodeToolsSettingEnabledTool</a>]]

enabled_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#enabled_tool GeminiCodeToolsSetting#enabled_tool}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#id GeminiCodeToolsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#labels GeminiCodeToolsSetting#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#location GeminiCodeToolsSetting#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#project GeminiCodeToolsSetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts">GeminiCodeToolsSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#timeouts GeminiCodeToolsSetting#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.putEnabledTool">put_enabled_tool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_enabled_tool` <a name="put_enabled_tool" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.putEnabledTool"></a>

```python
def put_enabled_tool(
  value: typing.Union[IResolvable, typing.List[GeminiCodeToolsSettingEnabledTool]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.putEnabledTool.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool">GeminiCodeToolsSettingEnabledTool</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#create GeminiCodeToolsSetting#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#delete GeminiCodeToolsSetting#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#update GeminiCodeToolsSetting#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GeminiCodeToolsSetting resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import gemini_code_tools_setting

geminiCodeToolsSetting.GeminiCodeToolsSetting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import gemini_code_tools_setting

geminiCodeToolsSetting.GeminiCodeToolsSetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import gemini_code_tools_setting

geminiCodeToolsSetting.GeminiCodeToolsSetting.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import gemini_code_tools_setting

geminiCodeToolsSetting.GeminiCodeToolsSetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GeminiCodeToolsSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GeminiCodeToolsSetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GeminiCodeToolsSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GeminiCodeToolsSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.enabledTool">enabled_tool</a></code> | <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList">GeminiCodeToolsSettingEnabledToolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference">GeminiCodeToolsSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.codeToolsSettingIdInput">code_tools_setting_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.enabledToolInput">enabled_tool_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool">GeminiCodeToolsSettingEnabledTool</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts">GeminiCodeToolsSettingTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.codeToolsSettingId">code_tools_setting_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `enabled_tool`<sup>Required</sup> <a name="enabled_tool" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.enabledTool"></a>

```python
enabled_tool: GeminiCodeToolsSettingEnabledToolList
```

- *Type:* <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList">GeminiCodeToolsSettingEnabledToolList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.timeouts"></a>

```python
timeouts: GeminiCodeToolsSettingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference">GeminiCodeToolsSettingTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `code_tools_setting_id_input`<sup>Optional</sup> <a name="code_tools_setting_id_input" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.codeToolsSettingIdInput"></a>

```python
code_tools_setting_id_input: str
```

- *Type:* str

---

##### `enabled_tool_input`<sup>Optional</sup> <a name="enabled_tool_input" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.enabledToolInput"></a>

```python
enabled_tool_input: typing.Union[IResolvable, typing.List[GeminiCodeToolsSettingEnabledTool]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool">GeminiCodeToolsSettingEnabledTool</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GeminiCodeToolsSettingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts">GeminiCodeToolsSettingTimeouts</a>]

---

##### `code_tools_setting_id`<sup>Required</sup> <a name="code_tools_setting_id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.codeToolsSettingId"></a>

```python
code_tools_setting_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiCodeToolsSettingConfig <a name="GeminiCodeToolsSettingConfig" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_code_tools_setting

geminiCodeToolsSetting.GeminiCodeToolsSettingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  code_tools_setting_id: str,
  enabled_tool: typing.Union[IResolvable, typing.List[GeminiCodeToolsSettingEnabledTool]],
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  timeouts: GeminiCodeToolsSettingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.codeToolsSettingId">code_tools_setting_id</a></code> | <code>str</code> | Id of the Code Tools Setting. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.enabledTool">enabled_tool</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool">GeminiCodeToolsSettingEnabledTool</a>]]</code> | enabled_tool block. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#id GeminiCodeToolsSetting#id}. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#project GeminiCodeToolsSetting#project}. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts">GeminiCodeToolsSettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `code_tools_setting_id`<sup>Required</sup> <a name="code_tools_setting_id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.codeToolsSettingId"></a>

```python
code_tools_setting_id: str
```

- *Type:* str

Id of the Code Tools Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#code_tools_setting_id GeminiCodeToolsSetting#code_tools_setting_id}

---

##### `enabled_tool`<sup>Required</sup> <a name="enabled_tool" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.enabledTool"></a>

```python
enabled_tool: typing.Union[IResolvable, typing.List[GeminiCodeToolsSettingEnabledTool]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool">GeminiCodeToolsSettingEnabledTool</a>]]

enabled_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#enabled_tool GeminiCodeToolsSetting#enabled_tool}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#id GeminiCodeToolsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#labels GeminiCodeToolsSetting#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#location GeminiCodeToolsSetting#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#project GeminiCodeToolsSetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingConfig.property.timeouts"></a>

```python
timeouts: GeminiCodeToolsSettingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts">GeminiCodeToolsSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#timeouts GeminiCodeToolsSetting#timeouts}

---

### GeminiCodeToolsSettingEnabledTool <a name="GeminiCodeToolsSettingEnabledTool" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_code_tools_setting

geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool(
  handle: str,
  tool: str,
  account_connector: str = None,
  config: typing.Union[IResolvable, typing.List[GeminiCodeToolsSettingEnabledToolConfig]] = None,
  uri_override: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.handle">handle</a></code> | <code>str</code> | Handle used to invoke the tool. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.tool">tool</a></code> | <code>str</code> | Link to the Tool. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.accountConnector">account_connector</a></code> | <code>str</code> | Link to the Dev Connect Account Connector that holds the user credentials. projects/{project}/locations/{location}/accountConnectors/{account_connector_id}. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.config">config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig">GeminiCodeToolsSettingEnabledToolConfig</a>]]</code> | config block. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.uriOverride">uri_override</a></code> | <code>str</code> | Overridden URI, if allowed by Tool. |

---

##### `handle`<sup>Required</sup> <a name="handle" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.handle"></a>

```python
handle: str
```

- *Type:* str

Handle used to invoke the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#handle GeminiCodeToolsSetting#handle}

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.tool"></a>

```python
tool: str
```

- *Type:* str

Link to the Tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#tool GeminiCodeToolsSetting#tool}

---

##### `account_connector`<sup>Optional</sup> <a name="account_connector" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.accountConnector"></a>

```python
account_connector: str
```

- *Type:* str

Link to the Dev Connect Account Connector that holds the user credentials. projects/{project}/locations/{location}/accountConnectors/{account_connector_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#account_connector GeminiCodeToolsSetting#account_connector}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.config"></a>

```python
config: typing.Union[IResolvable, typing.List[GeminiCodeToolsSettingEnabledToolConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig">GeminiCodeToolsSettingEnabledToolConfig</a>]]

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#config GeminiCodeToolsSetting#config}

---

##### `uri_override`<sup>Optional</sup> <a name="uri_override" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool.property.uriOverride"></a>

```python
uri_override: str
```

- *Type:* str

Overridden URI, if allowed by Tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#uri_override GeminiCodeToolsSetting#uri_override}

---

### GeminiCodeToolsSettingEnabledToolConfig <a name="GeminiCodeToolsSettingEnabledToolConfig" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_code_tools_setting

geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig.property.key">key</a></code> | <code>str</code> | Key of the configuration item. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig.property.value">value</a></code> | <code>str</code> | Value of the configuration item. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig.property.key"></a>

```python
key: str
```

- *Type:* str

Key of the configuration item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#key GeminiCodeToolsSetting#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the configuration item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#value GeminiCodeToolsSetting#value}

---

### GeminiCodeToolsSettingTimeouts <a name="GeminiCodeToolsSettingTimeouts" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_code_tools_setting

geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#create GeminiCodeToolsSetting#create}. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#delete GeminiCodeToolsSetting#delete}. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#update GeminiCodeToolsSetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#create GeminiCodeToolsSetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#delete GeminiCodeToolsSetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gemini_code_tools_setting#update GeminiCodeToolsSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiCodeToolsSettingEnabledToolConfigList <a name="GeminiCodeToolsSettingEnabledToolConfigList" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_code_tools_setting

geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GeminiCodeToolsSettingEnabledToolConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig">GeminiCodeToolsSettingEnabledToolConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GeminiCodeToolsSettingEnabledToolConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig">GeminiCodeToolsSettingEnabledToolConfig</a>]]

---


### GeminiCodeToolsSettingEnabledToolConfigOutputReference <a name="GeminiCodeToolsSettingEnabledToolConfigOutputReference" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_code_tools_setting

geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig">GeminiCodeToolsSettingEnabledToolConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GeminiCodeToolsSettingEnabledToolConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig">GeminiCodeToolsSettingEnabledToolConfig</a>]

---


### GeminiCodeToolsSettingEnabledToolList <a name="GeminiCodeToolsSettingEnabledToolList" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_code_tools_setting

geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GeminiCodeToolsSettingEnabledToolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool">GeminiCodeToolsSettingEnabledTool</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GeminiCodeToolsSettingEnabledTool]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool">GeminiCodeToolsSettingEnabledTool</a>]]

---


### GeminiCodeToolsSettingEnabledToolOutputReference <a name="GeminiCodeToolsSettingEnabledToolOutputReference" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_code_tools_setting

geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resetAccountConnector">reset_account_connector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resetUriOverride">reset_uri_override</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_config` <a name="put_config" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.putConfig"></a>

```python
def put_config(
  value: typing.Union[IResolvable, typing.List[GeminiCodeToolsSettingEnabledToolConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.putConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig">GeminiCodeToolsSettingEnabledToolConfig</a>]]

---

##### `reset_account_connector` <a name="reset_account_connector" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resetAccountConnector"></a>

```python
def reset_account_connector() -> None
```

##### `reset_config` <a name="reset_config" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_uri_override` <a name="reset_uri_override" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.resetUriOverride"></a>

```python
def reset_uri_override() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList">GeminiCodeToolsSettingEnabledToolConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.accountConnectorInput">account_connector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.configInput">config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig">GeminiCodeToolsSettingEnabledToolConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.handleInput">handle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.toolInput">tool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.uriOverrideInput">uri_override_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.accountConnector">account_connector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.handle">handle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.tool">tool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.uriOverride">uri_override</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool">GeminiCodeToolsSettingEnabledTool</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.config"></a>

```python
config: GeminiCodeToolsSettingEnabledToolConfigList
```

- *Type:* <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfigList">GeminiCodeToolsSettingEnabledToolConfigList</a>

---

##### `account_connector_input`<sup>Optional</sup> <a name="account_connector_input" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.accountConnectorInput"></a>

```python
account_connector_input: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.configInput"></a>

```python
config_input: typing.Union[IResolvable, typing.List[GeminiCodeToolsSettingEnabledToolConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolConfig">GeminiCodeToolsSettingEnabledToolConfig</a>]]

---

##### `handle_input`<sup>Optional</sup> <a name="handle_input" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.handleInput"></a>

```python
handle_input: str
```

- *Type:* str

---

##### `tool_input`<sup>Optional</sup> <a name="tool_input" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.toolInput"></a>

```python
tool_input: str
```

- *Type:* str

---

##### `uri_override_input`<sup>Optional</sup> <a name="uri_override_input" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.uriOverrideInput"></a>

```python
uri_override_input: str
```

- *Type:* str

---

##### `account_connector`<sup>Required</sup> <a name="account_connector" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.accountConnector"></a>

```python
account_connector: str
```

- *Type:* str

---

##### `handle`<sup>Required</sup> <a name="handle" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.handle"></a>

```python
handle: str
```

- *Type:* str

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.tool"></a>

```python
tool: str
```

- *Type:* str

---

##### `uri_override`<sup>Required</sup> <a name="uri_override" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.uriOverride"></a>

```python
uri_override: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledToolOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GeminiCodeToolsSettingEnabledTool]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingEnabledTool">GeminiCodeToolsSettingEnabledTool</a>]

---


### GeminiCodeToolsSettingTimeoutsOutputReference <a name="GeminiCodeToolsSettingTimeoutsOutputReference" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_code_tools_setting

geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts">GeminiCodeToolsSettingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GeminiCodeToolsSettingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.geminiCodeToolsSetting.GeminiCodeToolsSettingTimeouts">GeminiCodeToolsSettingTimeouts</a>]

---



