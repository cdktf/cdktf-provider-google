# `geminiLoggingSettingBinding` Submodule <a name="`geminiLoggingSettingBinding` Submodule" id="@cdktf/provider-google.geminiLoggingSettingBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiLoggingSettingBinding <a name="GeminiLoggingSettingBinding" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding google_gemini_logging_setting_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_logging_setting_binding

geminiLoggingSettingBinding.GeminiLoggingSettingBinding(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  logging_setting_id: str,
  setting_binding_id: str,
  target: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  product: str = None,
  project: str = None,
  timeouts: GeminiLoggingSettingBindingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.loggingSettingId">logging_setting_id</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.settingBindingId">setting_binding_id</a></code> | <code>str</code> | Id of the setting binding. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.target">target</a></code> | <code>str</code> | Target of the binding. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#id GeminiLoggingSettingBinding#id}. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.product">product</a></code> | <code>str</code> | Product type of the setting binding. Possible values: ["GEMINI_CODE_ASSIST"]. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#project GeminiLoggingSettingBinding#project}. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts">GeminiLoggingSettingBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `logging_setting_id`<sup>Required</sup> <a name="logging_setting_id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.loggingSettingId"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#logging_setting_id GeminiLoggingSettingBinding#logging_setting_id}

---

##### `setting_binding_id`<sup>Required</sup> <a name="setting_binding_id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.settingBindingId"></a>

- *Type:* str

Id of the setting binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#setting_binding_id GeminiLoggingSettingBinding#setting_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.target"></a>

- *Type:* str

Target of the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#target GeminiLoggingSettingBinding#target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#id GeminiLoggingSettingBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#labels GeminiLoggingSettingBinding#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#location GeminiLoggingSettingBinding#location}

---

##### `product`<sup>Optional</sup> <a name="product" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.product"></a>

- *Type:* str

Product type of the setting binding. Possible values: ["GEMINI_CODE_ASSIST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#product GeminiLoggingSettingBinding#product}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#project GeminiLoggingSettingBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts">GeminiLoggingSettingBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#timeouts GeminiLoggingSettingBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetProduct">reset_product</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#create GeminiLoggingSettingBinding#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#delete GeminiLoggingSettingBinding#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#update GeminiLoggingSettingBinding#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_product` <a name="reset_product" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetProduct"></a>

```python
def reset_product() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GeminiLoggingSettingBinding resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import gemini_logging_setting_binding

geminiLoggingSettingBinding.GeminiLoggingSettingBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import gemini_logging_setting_binding

geminiLoggingSettingBinding.GeminiLoggingSettingBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import gemini_logging_setting_binding

geminiLoggingSettingBinding.GeminiLoggingSettingBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import gemini_logging_setting_binding

geminiLoggingSettingBinding.GeminiLoggingSettingBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GeminiLoggingSettingBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GeminiLoggingSettingBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GeminiLoggingSettingBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GeminiLoggingSettingBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference">GeminiLoggingSettingBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.loggingSettingIdInput">logging_setting_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.productInput">product_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.settingBindingIdInput">setting_binding_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts">GeminiLoggingSettingBindingTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.loggingSettingId">logging_setting_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.product">product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.settingBindingId">setting_binding_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.target">target</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.timeouts"></a>

```python
timeouts: GeminiLoggingSettingBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference">GeminiLoggingSettingBindingTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `logging_setting_id_input`<sup>Optional</sup> <a name="logging_setting_id_input" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.loggingSettingIdInput"></a>

```python
logging_setting_id_input: str
```

- *Type:* str

---

##### `product_input`<sup>Optional</sup> <a name="product_input" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.productInput"></a>

```python
product_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `setting_binding_id_input`<sup>Optional</sup> <a name="setting_binding_id_input" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.settingBindingIdInput"></a>

```python
setting_binding_id_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GeminiLoggingSettingBindingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts">GeminiLoggingSettingBindingTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `logging_setting_id`<sup>Required</sup> <a name="logging_setting_id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.loggingSettingId"></a>

```python
logging_setting_id: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.product"></a>

```python
product: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `setting_binding_id`<sup>Required</sup> <a name="setting_binding_id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.settingBindingId"></a>

```python
setting_binding_id: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.target"></a>

```python
target: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiLoggingSettingBindingConfig <a name="GeminiLoggingSettingBindingConfig" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_logging_setting_binding

geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  logging_setting_id: str,
  setting_binding_id: str,
  target: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  product: str = None,
  project: str = None,
  timeouts: GeminiLoggingSettingBindingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.loggingSettingId">logging_setting_id</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.settingBindingId">setting_binding_id</a></code> | <code>str</code> | Id of the setting binding. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.target">target</a></code> | <code>str</code> | Target of the binding. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#id GeminiLoggingSettingBinding#id}. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.product">product</a></code> | <code>str</code> | Product type of the setting binding. Possible values: ["GEMINI_CODE_ASSIST"]. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#project GeminiLoggingSettingBinding#project}. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts">GeminiLoggingSettingBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `logging_setting_id`<sup>Required</sup> <a name="logging_setting_id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.loggingSettingId"></a>

```python
logging_setting_id: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#logging_setting_id GeminiLoggingSettingBinding#logging_setting_id}

---

##### `setting_binding_id`<sup>Required</sup> <a name="setting_binding_id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.settingBindingId"></a>

```python
setting_binding_id: str
```

- *Type:* str

Id of the setting binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#setting_binding_id GeminiLoggingSettingBinding#setting_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.target"></a>

```python
target: str
```

- *Type:* str

Target of the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#target GeminiLoggingSettingBinding#target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#id GeminiLoggingSettingBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#labels GeminiLoggingSettingBinding#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#location GeminiLoggingSettingBinding#location}

---

##### `product`<sup>Optional</sup> <a name="product" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.product"></a>

```python
product: str
```

- *Type:* str

Product type of the setting binding. Possible values: ["GEMINI_CODE_ASSIST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#product GeminiLoggingSettingBinding#product}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#project GeminiLoggingSettingBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingConfig.property.timeouts"></a>

```python
timeouts: GeminiLoggingSettingBindingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts">GeminiLoggingSettingBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#timeouts GeminiLoggingSettingBinding#timeouts}

---

### GeminiLoggingSettingBindingTimeouts <a name="GeminiLoggingSettingBindingTimeouts" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_logging_setting_binding

geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#create GeminiLoggingSettingBinding#create}. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#delete GeminiLoggingSettingBinding#delete}. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#update GeminiLoggingSettingBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#create GeminiLoggingSettingBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#delete GeminiLoggingSettingBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_logging_setting_binding#update GeminiLoggingSettingBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiLoggingSettingBindingTimeoutsOutputReference <a name="GeminiLoggingSettingBindingTimeoutsOutputReference" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_logging_setting_binding

geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts">GeminiLoggingSettingBindingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GeminiLoggingSettingBindingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.geminiLoggingSettingBinding.GeminiLoggingSettingBindingTimeouts">GeminiLoggingSettingBindingTimeouts</a>]

---



