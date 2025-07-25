# `geminiGeminiGcpEnablementSetting` Submodule <a name="`geminiGeminiGcpEnablementSetting` Submodule" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiGeminiGcpEnablementSetting <a name="GeminiGeminiGcpEnablementSetting" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting google_gemini_gemini_gcp_enablement_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_gemini_gcp_enablement_setting

geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting(
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
  location: str,
  disable_web_grounding: typing.Union[bool, IResolvable] = None,
  enable_customer_data_sharing: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GeminiGeminiGcpEnablementSettingTimeouts = None,
  web_grounding_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.geminiGcpEnablementSettingId">gemini_gcp_enablement_setting_id</a></code> | <code>str</code> | Id of the Gemini Gcp Enablement setting. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.disableWebGrounding">disable_web_grounding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether web grounding should be disabled. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.enableCustomerDataSharing">enable_customer_data_sharing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether customer data sharing should be enabled. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#id GeminiGeminiGcpEnablementSetting#id}. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#project GeminiGeminiGcpEnablementSetting#project}. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts">GeminiGeminiGcpEnablementSettingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.webGroundingType">web_grounding_type</a></code> | <code>str</code> | Web grounding type. Possible values: GROUNDING_WITH_GOOGLE_SEARCH WEB_GROUNDING_FOR_ENTERPRISE. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gemini_gcp_enablement_setting_id`<sup>Required</sup> <a name="gemini_gcp_enablement_setting_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.geminiGcpEnablementSettingId"></a>

- *Type:* str

Id of the Gemini Gcp Enablement setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#gemini_gcp_enablement_setting_id GeminiGeminiGcpEnablementSetting#gemini_gcp_enablement_setting_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#location GeminiGeminiGcpEnablementSetting#location}

---

##### `disable_web_grounding`<sup>Optional</sup> <a name="disable_web_grounding" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.disableWebGrounding"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether web grounding should be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#disable_web_grounding GeminiGeminiGcpEnablementSetting#disable_web_grounding}

---

##### `enable_customer_data_sharing`<sup>Optional</sup> <a name="enable_customer_data_sharing" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.enableCustomerDataSharing"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether customer data sharing should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#enable_customer_data_sharing GeminiGeminiGcpEnablementSetting#enable_customer_data_sharing}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#id GeminiGeminiGcpEnablementSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#labels GeminiGeminiGcpEnablementSetting#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#project GeminiGeminiGcpEnablementSetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts">GeminiGeminiGcpEnablementSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#timeouts GeminiGeminiGcpEnablementSetting#timeouts}

---

##### `web_grounding_type`<sup>Optional</sup> <a name="web_grounding_type" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.webGroundingType"></a>

- *Type:* str

Web grounding type. Possible values: GROUNDING_WITH_GOOGLE_SEARCH WEB_GROUNDING_FOR_ENTERPRISE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#web_grounding_type GeminiGeminiGcpEnablementSetting#web_grounding_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetDisableWebGrounding">reset_disable_web_grounding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetEnableCustomerDataSharing">reset_enable_customer_data_sharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetWebGroundingType">reset_web_grounding_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#create GeminiGeminiGcpEnablementSetting#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#delete GeminiGeminiGcpEnablementSetting#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#update GeminiGeminiGcpEnablementSetting#update}.

---

##### `reset_disable_web_grounding` <a name="reset_disable_web_grounding" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetDisableWebGrounding"></a>

```python
def reset_disable_web_grounding() -> None
```

##### `reset_enable_customer_data_sharing` <a name="reset_enable_customer_data_sharing" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetEnableCustomerDataSharing"></a>

```python
def reset_enable_customer_data_sharing() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_web_grounding_type` <a name="reset_web_grounding_type" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetWebGroundingType"></a>

```python
def reset_web_grounding_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GeminiGeminiGcpEnablementSetting resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import gemini_gemini_gcp_enablement_setting

geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import gemini_gemini_gcp_enablement_setting

geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import gemini_gemini_gcp_enablement_setting

geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import gemini_gemini_gcp_enablement_setting

geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GeminiGeminiGcpEnablementSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GeminiGeminiGcpEnablementSetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GeminiGeminiGcpEnablementSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GeminiGeminiGcpEnablementSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference">GeminiGeminiGcpEnablementSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.disableWebGroundingInput">disable_web_grounding_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharingInput">enable_customer_data_sharing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingIdInput">gemini_gcp_enablement_setting_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts">GeminiGeminiGcpEnablementSettingTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.webGroundingTypeInput">web_grounding_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.disableWebGrounding">disable_web_grounding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharing">enable_customer_data_sharing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingId">gemini_gcp_enablement_setting_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.webGroundingType">web_grounding_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.timeouts"></a>

```python
timeouts: GeminiGeminiGcpEnablementSettingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference">GeminiGeminiGcpEnablementSettingTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `disable_web_grounding_input`<sup>Optional</sup> <a name="disable_web_grounding_input" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.disableWebGroundingInput"></a>

```python
disable_web_grounding_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_customer_data_sharing_input`<sup>Optional</sup> <a name="enable_customer_data_sharing_input" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharingInput"></a>

```python
enable_customer_data_sharing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gemini_gcp_enablement_setting_id_input`<sup>Optional</sup> <a name="gemini_gcp_enablement_setting_id_input" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingIdInput"></a>

```python
gemini_gcp_enablement_setting_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GeminiGeminiGcpEnablementSettingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts">GeminiGeminiGcpEnablementSettingTimeouts</a>]

---

##### `web_grounding_type_input`<sup>Optional</sup> <a name="web_grounding_type_input" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.webGroundingTypeInput"></a>

```python
web_grounding_type_input: str
```

- *Type:* str

---

##### `disable_web_grounding`<sup>Required</sup> <a name="disable_web_grounding" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.disableWebGrounding"></a>

```python
disable_web_grounding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_customer_data_sharing`<sup>Required</sup> <a name="enable_customer_data_sharing" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharing"></a>

```python
enable_customer_data_sharing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gemini_gcp_enablement_setting_id`<sup>Required</sup> <a name="gemini_gcp_enablement_setting_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingId"></a>

```python
gemini_gcp_enablement_setting_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `web_grounding_type`<sup>Required</sup> <a name="web_grounding_type" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.webGroundingType"></a>

```python
web_grounding_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiGeminiGcpEnablementSettingConfig <a name="GeminiGeminiGcpEnablementSettingConfig" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_gemini_gcp_enablement_setting

geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gemini_gcp_enablement_setting_id: str,
  location: str,
  disable_web_grounding: typing.Union[bool, IResolvable] = None,
  enable_customer_data_sharing: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GeminiGeminiGcpEnablementSettingTimeouts = None,
  web_grounding_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.geminiGcpEnablementSettingId">gemini_gcp_enablement_setting_id</a></code> | <code>str</code> | Id of the Gemini Gcp Enablement setting. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.disableWebGrounding">disable_web_grounding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether web grounding should be disabled. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.enableCustomerDataSharing">enable_customer_data_sharing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether customer data sharing should be enabled. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#id GeminiGeminiGcpEnablementSetting#id}. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#project GeminiGeminiGcpEnablementSetting#project}. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts">GeminiGeminiGcpEnablementSettingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.webGroundingType">web_grounding_type</a></code> | <code>str</code> | Web grounding type. Possible values: GROUNDING_WITH_GOOGLE_SEARCH WEB_GROUNDING_FOR_ENTERPRISE. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gemini_gcp_enablement_setting_id`<sup>Required</sup> <a name="gemini_gcp_enablement_setting_id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.geminiGcpEnablementSettingId"></a>

```python
gemini_gcp_enablement_setting_id: str
```

- *Type:* str

Id of the Gemini Gcp Enablement setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#gemini_gcp_enablement_setting_id GeminiGeminiGcpEnablementSetting#gemini_gcp_enablement_setting_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#location GeminiGeminiGcpEnablementSetting#location}

---

##### `disable_web_grounding`<sup>Optional</sup> <a name="disable_web_grounding" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.disableWebGrounding"></a>

```python
disable_web_grounding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether web grounding should be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#disable_web_grounding GeminiGeminiGcpEnablementSetting#disable_web_grounding}

---

##### `enable_customer_data_sharing`<sup>Optional</sup> <a name="enable_customer_data_sharing" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.enableCustomerDataSharing"></a>

```python
enable_customer_data_sharing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether customer data sharing should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#enable_customer_data_sharing GeminiGeminiGcpEnablementSetting#enable_customer_data_sharing}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#id GeminiGeminiGcpEnablementSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#labels GeminiGeminiGcpEnablementSetting#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#project GeminiGeminiGcpEnablementSetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.timeouts"></a>

```python
timeouts: GeminiGeminiGcpEnablementSettingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts">GeminiGeminiGcpEnablementSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#timeouts GeminiGeminiGcpEnablementSetting#timeouts}

---

##### `web_grounding_type`<sup>Optional</sup> <a name="web_grounding_type" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.webGroundingType"></a>

```python
web_grounding_type: str
```

- *Type:* str

Web grounding type. Possible values: GROUNDING_WITH_GOOGLE_SEARCH WEB_GROUNDING_FOR_ENTERPRISE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#web_grounding_type GeminiGeminiGcpEnablementSetting#web_grounding_type}

---

### GeminiGeminiGcpEnablementSettingTimeouts <a name="GeminiGeminiGcpEnablementSettingTimeouts" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_gemini_gcp_enablement_setting

geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#create GeminiGeminiGcpEnablementSetting#create}. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#delete GeminiGeminiGcpEnablementSetting#delete}. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#update GeminiGeminiGcpEnablementSetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#create GeminiGeminiGcpEnablementSetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#delete GeminiGeminiGcpEnablementSetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#update GeminiGeminiGcpEnablementSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiGeminiGcpEnablementSettingTimeoutsOutputReference <a name="GeminiGeminiGcpEnablementSettingTimeoutsOutputReference" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_gemini_gcp_enablement_setting

geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts">GeminiGeminiGcpEnablementSettingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GeminiGeminiGcpEnablementSettingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts">GeminiGeminiGcpEnablementSettingTimeouts</a>]

---



