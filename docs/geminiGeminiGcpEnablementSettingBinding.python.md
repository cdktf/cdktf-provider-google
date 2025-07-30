# `geminiGeminiGcpEnablementSettingBinding` Submodule <a name="`geminiGeminiGcpEnablementSettingBinding` Submodule" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiGeminiGcpEnablementSettingBinding <a name="GeminiGeminiGcpEnablementSettingBinding" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding google_gemini_gemini_gcp_enablement_setting_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_gemini_gcp_enablement_setting_binding

geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gemini_gcp_enablement_setting_id: str,
  setting_binding_id: str,
  target: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  product: str = None,
  project: str = None,
  timeouts: GeminiGeminiGcpEnablementSettingBindingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.geminiGcpEnablementSettingId">gemini_gcp_enablement_setting_id</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.settingBindingId">setting_binding_id</a></code> | <code>str</code> | Id of the setting binding. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.target">target</a></code> | <code>str</code> | Target of the binding. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#id GeminiGeminiGcpEnablementSettingBinding#id}. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.product">product</a></code> | <code>str</code> | Product type of the setting binding. Values include GEMINI_IN_BIGQUERY, GEMINI_CLOUD_ASSIST, etc. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.dataSharingWithGoogleSettings.settingBindings) for a complete list. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#project GeminiGeminiGcpEnablementSettingBinding#project}. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeouts">GeminiGeminiGcpEnablementSettingBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gemini_gcp_enablement_setting_id`<sup>Required</sup> <a name="gemini_gcp_enablement_setting_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.geminiGcpEnablementSettingId"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#gemini_gcp_enablement_setting_id GeminiGeminiGcpEnablementSettingBinding#gemini_gcp_enablement_setting_id}

---

##### `setting_binding_id`<sup>Required</sup> <a name="setting_binding_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.settingBindingId"></a>

- *Type:* str

Id of the setting binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#setting_binding_id GeminiGeminiGcpEnablementSettingBinding#setting_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.target"></a>

- *Type:* str

Target of the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#target GeminiGeminiGcpEnablementSettingBinding#target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#id GeminiGeminiGcpEnablementSettingBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#labels GeminiGeminiGcpEnablementSettingBinding#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#location GeminiGeminiGcpEnablementSettingBinding#location}

---

##### `product`<sup>Optional</sup> <a name="product" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.product"></a>

- *Type:* str

Product type of the setting binding. Values include GEMINI_IN_BIGQUERY, GEMINI_CLOUD_ASSIST, etc. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.dataSharingWithGoogleSettings.settingBindings) for a complete list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#product GeminiGeminiGcpEnablementSettingBinding#product}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#project GeminiGeminiGcpEnablementSettingBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeouts">GeminiGeminiGcpEnablementSettingBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#timeouts GeminiGeminiGcpEnablementSettingBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.resetProduct">reset_product</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#create GeminiGeminiGcpEnablementSettingBinding#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#delete GeminiGeminiGcpEnablementSettingBinding#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#update GeminiGeminiGcpEnablementSettingBinding#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_product` <a name="reset_product" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.resetProduct"></a>

```python
def reset_product() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GeminiGeminiGcpEnablementSettingBinding resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import gemini_gemini_gcp_enablement_setting_binding

geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import gemini_gemini_gcp_enablement_setting_binding

geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import gemini_gemini_gcp_enablement_setting_binding

geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import gemini_gemini_gcp_enablement_setting_binding

geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GeminiGeminiGcpEnablementSettingBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GeminiGeminiGcpEnablementSettingBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GeminiGeminiGcpEnablementSettingBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GeminiGeminiGcpEnablementSettingBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference">GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.geminiGcpEnablementSettingIdInput">gemini_gcp_enablement_setting_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.productInput">product_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.settingBindingIdInput">setting_binding_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeouts">GeminiGeminiGcpEnablementSettingBindingTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.geminiGcpEnablementSettingId">gemini_gcp_enablement_setting_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.product">product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.settingBindingId">setting_binding_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.target">target</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.timeouts"></a>

```python
timeouts: GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference">GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `gemini_gcp_enablement_setting_id_input`<sup>Optional</sup> <a name="gemini_gcp_enablement_setting_id_input" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.geminiGcpEnablementSettingIdInput"></a>

```python
gemini_gcp_enablement_setting_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `product_input`<sup>Optional</sup> <a name="product_input" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.productInput"></a>

```python
product_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `setting_binding_id_input`<sup>Optional</sup> <a name="setting_binding_id_input" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.settingBindingIdInput"></a>

```python
setting_binding_id_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GeminiGeminiGcpEnablementSettingBindingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeouts">GeminiGeminiGcpEnablementSettingBindingTimeouts</a>]

---

##### `gemini_gcp_enablement_setting_id`<sup>Required</sup> <a name="gemini_gcp_enablement_setting_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.geminiGcpEnablementSettingId"></a>

```python
gemini_gcp_enablement_setting_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.product"></a>

```python
product: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `setting_binding_id`<sup>Required</sup> <a name="setting_binding_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.settingBindingId"></a>

```python
setting_binding_id: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.target"></a>

```python
target: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiGeminiGcpEnablementSettingBindingConfig <a name="GeminiGeminiGcpEnablementSettingBindingConfig" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_gemini_gcp_enablement_setting_binding

geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gemini_gcp_enablement_setting_id: str,
  setting_binding_id: str,
  target: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  product: str = None,
  project: str = None,
  timeouts: GeminiGeminiGcpEnablementSettingBindingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.geminiGcpEnablementSettingId">gemini_gcp_enablement_setting_id</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.settingBindingId">setting_binding_id</a></code> | <code>str</code> | Id of the setting binding. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.target">target</a></code> | <code>str</code> | Target of the binding. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#id GeminiGeminiGcpEnablementSettingBinding#id}. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.product">product</a></code> | <code>str</code> | Product type of the setting binding. Values include GEMINI_IN_BIGQUERY, GEMINI_CLOUD_ASSIST, etc. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.dataSharingWithGoogleSettings.settingBindings) for a complete list. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#project GeminiGeminiGcpEnablementSettingBinding#project}. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeouts">GeminiGeminiGcpEnablementSettingBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gemini_gcp_enablement_setting_id`<sup>Required</sup> <a name="gemini_gcp_enablement_setting_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.geminiGcpEnablementSettingId"></a>

```python
gemini_gcp_enablement_setting_id: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#gemini_gcp_enablement_setting_id GeminiGeminiGcpEnablementSettingBinding#gemini_gcp_enablement_setting_id}

---

##### `setting_binding_id`<sup>Required</sup> <a name="setting_binding_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.settingBindingId"></a>

```python
setting_binding_id: str
```

- *Type:* str

Id of the setting binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#setting_binding_id GeminiGeminiGcpEnablementSettingBinding#setting_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.target"></a>

```python
target: str
```

- *Type:* str

Target of the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#target GeminiGeminiGcpEnablementSettingBinding#target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#id GeminiGeminiGcpEnablementSettingBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#labels GeminiGeminiGcpEnablementSettingBinding#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#location GeminiGeminiGcpEnablementSettingBinding#location}

---

##### `product`<sup>Optional</sup> <a name="product" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.product"></a>

```python
product: str
```

- *Type:* str

Product type of the setting binding. Values include GEMINI_IN_BIGQUERY, GEMINI_CLOUD_ASSIST, etc. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.dataSharingWithGoogleSettings.settingBindings) for a complete list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#product GeminiGeminiGcpEnablementSettingBinding#product}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#project GeminiGeminiGcpEnablementSettingBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingConfig.property.timeouts"></a>

```python
timeouts: GeminiGeminiGcpEnablementSettingBindingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeouts">GeminiGeminiGcpEnablementSettingBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#timeouts GeminiGeminiGcpEnablementSettingBinding#timeouts}

---

### GeminiGeminiGcpEnablementSettingBindingTimeouts <a name="GeminiGeminiGcpEnablementSettingBindingTimeouts" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_gemini_gcp_enablement_setting_binding

geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#create GeminiGeminiGcpEnablementSettingBinding#create}. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#delete GeminiGeminiGcpEnablementSettingBinding#delete}. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#update GeminiGeminiGcpEnablementSettingBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#create GeminiGeminiGcpEnablementSettingBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#delete GeminiGeminiGcpEnablementSettingBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_gemini_gcp_enablement_setting_binding#update GeminiGeminiGcpEnablementSettingBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference <a name="GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_gemini_gcp_enablement_setting_binding

geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeouts">GeminiGeminiGcpEnablementSettingBindingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GeminiGeminiGcpEnablementSettingBindingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSettingBinding.GeminiGeminiGcpEnablementSettingBindingTimeouts">GeminiGeminiGcpEnablementSettingBindingTimeouts</a>]

---



