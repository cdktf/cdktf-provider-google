# `dialogflowCxWebhook` Submodule <a name="`dialogflowCxWebhook` Submodule" id="@cdktf/provider-google.dialogflowCxWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxWebhook <a name="DialogflowCxWebhook" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook google_dialogflow_cx_webhook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_webhook

dialogflowCxWebhook.DialogflowCxWebhook(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  disabled: typing.Union[bool, IResolvable] = None,
  enable_spell_correction: typing.Union[bool, IResolvable] = None,
  enable_stackdriver_logging: typing.Union[bool, IResolvable] = None,
  generic_web_service: DialogflowCxWebhookGenericWebService = None,
  id: str = None,
  parent: str = None,
  security_settings: str = None,
  service_directory: DialogflowCxWebhookServiceDirectory = None,
  timeout: str = None,
  timeouts: DialogflowCxWebhookTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the webhook, unique within the agent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the webhook is disabled. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.enableSpellCorrection">enable_spell_correction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Deprecated. Indicates if automatic spell correction is enabled in detect intent requests. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.enableStackdriverLogging">enable_stackdriver_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Deprecated. Determines whether this agent should log conversation queries. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.genericWebService">generic_web_service</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService">DialogflowCxWebhookGenericWebService</a></code> | generic_web_service block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#id DialogflowCxWebhook#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The agent to create a webhook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.securitySettings">security_settings</a></code> | <code>str</code> | Deprecated. Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.serviceDirectory">service_directory</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory">DialogflowCxWebhookServiceDirectory</a></code> | service_directory block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.timeout">timeout</a></code> | <code>str</code> | Webhook execution timeout. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts">DialogflowCxWebhookTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.displayName"></a>

- *Type:* str

The human-readable name of the webhook, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#display_name DialogflowCxWebhook#display_name}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the webhook is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#disabled DialogflowCxWebhook#disabled}

---

##### `enable_spell_correction`<sup>Optional</sup> <a name="enable_spell_correction" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.enableSpellCorrection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Deprecated. Indicates if automatic spell correction is enabled in detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#enable_spell_correction DialogflowCxWebhook#enable_spell_correction}

---

##### `enable_stackdriver_logging`<sup>Optional</sup> <a name="enable_stackdriver_logging" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.enableStackdriverLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Deprecated. Determines whether this agent should log conversation queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#enable_stackdriver_logging DialogflowCxWebhook#enable_stackdriver_logging}

---

##### `generic_web_service`<sup>Optional</sup> <a name="generic_web_service" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.genericWebService"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService">DialogflowCxWebhookGenericWebService</a>

generic_web_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#generic_web_service DialogflowCxWebhook#generic_web_service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#id DialogflowCxWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.parent"></a>

- *Type:* str

The agent to create a webhook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#parent DialogflowCxWebhook#parent}

---

##### `security_settings`<sup>Optional</sup> <a name="security_settings" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.securitySettings"></a>

- *Type:* str

Deprecated. Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#security_settings DialogflowCxWebhook#security_settings}

---

##### `service_directory`<sup>Optional</sup> <a name="service_directory" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.serviceDirectory"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory">DialogflowCxWebhookServiceDirectory</a>

service_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#service_directory DialogflowCxWebhook#service_directory}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.timeout"></a>

- *Type:* str

Webhook execution timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#timeout DialogflowCxWebhook#timeout}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts">DialogflowCxWebhookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#timeouts DialogflowCxWebhook#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putGenericWebService">put_generic_web_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putServiceDirectory">put_service_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetEnableSpellCorrection">reset_enable_spell_correction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetEnableStackdriverLogging">reset_enable_stackdriver_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetGenericWebService">reset_generic_web_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetParent">reset_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetSecuritySettings">reset_security_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetServiceDirectory">reset_service_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_generic_web_service` <a name="put_generic_web_service" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putGenericWebService"></a>

```python
def put_generic_web_service(
  uri: str,
  allowed_ca_certs: typing.List[str] = None,
  http_method: str = None,
  oauth_config: DialogflowCxWebhookGenericWebServiceOauthConfig = None,
  parameter_mapping: typing.Mapping[str] = None,
  request_body: str = None,
  request_headers: typing.Mapping[str] = None,
  secret_version_for_username_password: str = None,
  secret_versions_for_request_headers: typing.Union[IResolvable, typing.List[DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders]] = None,
  service_agent_auth: str = None,
  webhook_type: str = None
) -> None
```

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putGenericWebService.parameter.uri"></a>

- *Type:* str

The webhook URI for receiving POST requests. It must use https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#uri DialogflowCxWebhook#uri}

---

###### `allowed_ca_certs`<sup>Optional</sup> <a name="allowed_ca_certs" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putGenericWebService.parameter.allowedCaCerts"></a>

- *Type:* typing.List[str]

Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store. If this
is empty or unspecified, Dialogflow will use Google's default trust store
to verify certificates.
N.B. Make sure the HTTPS server certificates are signed with "subject alt
name". For instance a certificate can be self-signed using the following
command,
openssl x509 -req -days 200 -in example.com.csr \
-signkey example.com.key \
-out example.com.crt \
-extfile <(printf "\nsubjectAltName='DNS:www.example.com'")

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#allowed_ca_certs DialogflowCxWebhook#allowed_ca_certs}

---

###### `http_method`<sup>Optional</sup> <a name="http_method" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putGenericWebService.parameter.httpMethod"></a>

- *Type:* str

HTTP method for the flexible webhook calls.

Standard webhook always uses
POST. Possible values: ["POST", "GET", "HEAD", "PUT", "DELETE", "PATCH", "OPTIONS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#http_method DialogflowCxWebhook#http_method}

---

###### `oauth_config`<sup>Optional</sup> <a name="oauth_config" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putGenericWebService.parameter.oauthConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig">DialogflowCxWebhookGenericWebServiceOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#oauth_config DialogflowCxWebhook#oauth_config}

---

###### `parameter_mapping`<sup>Optional</sup> <a name="parameter_mapping" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putGenericWebService.parameter.parameterMapping"></a>

- *Type:* typing.Mapping[str]

Maps the values extracted from specific fields of the flexible webhook response into session parameters.

* Key: session parameter name
* Value: field path in the webhook response

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#parameter_mapping DialogflowCxWebhook#parameter_mapping}

---

###### `request_body`<sup>Optional</sup> <a name="request_body" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putGenericWebService.parameter.requestBody"></a>

- *Type:* str

Defines a custom JSON object as request body to send to flexible webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#request_body DialogflowCxWebhook#request_body}

---

###### `request_headers`<sup>Optional</sup> <a name="request_headers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putGenericWebService.parameter.requestHeaders"></a>

- *Type:* typing.Mapping[str]

The HTTP request headers to send together with webhook requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#request_headers DialogflowCxWebhook#request_headers}

---

###### `secret_version_for_username_password`<sup>Optional</sup> <a name="secret_version_for_username_password" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putGenericWebService.parameter.secretVersionForUsernamePassword"></a>

- *Type:* str

The SecretManager secret version resource storing the username:password pair for HTTP Basic authentication. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#secret_version_for_username_password DialogflowCxWebhook#secret_version_for_username_password}

---

###### `secret_versions_for_request_headers`<sup>Optional</sup> <a name="secret_versions_for_request_headers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putGenericWebService.parameter.secretVersionsForRequestHeaders"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders">DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders</a>]]

secret_versions_for_request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#secret_versions_for_request_headers DialogflowCxWebhook#secret_versions_for_request_headers}

---

###### `service_agent_auth`<sup>Optional</sup> <a name="service_agent_auth" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putGenericWebService.parameter.serviceAgentAuth"></a>

- *Type:* str

Indicate the auth token type generated from the [Diglogflow service agent](https://cloud.google.com/iam/docs/service-agents#dialogflow-service-agent). The generated token is sent in the Authorization header. Possible values: ["NONE", "ID_TOKEN", "ACCESS_TOKEN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#service_agent_auth DialogflowCxWebhook#service_agent_auth}

---

###### `webhook_type`<sup>Optional</sup> <a name="webhook_type" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putGenericWebService.parameter.webhookType"></a>

- *Type:* str

Type of the webhook. Possible values: ["STANDARD", "FLEXIBLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#webhook_type DialogflowCxWebhook#webhook_type}

---

##### `put_service_directory` <a name="put_service_directory" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putServiceDirectory"></a>

```python
def put_service_directory(
  service: str,
  generic_web_service: DialogflowCxWebhookServiceDirectoryGenericWebService = None
) -> None
```

###### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putServiceDirectory.parameter.service"></a>

- *Type:* str

The name of Service Directory service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#service DialogflowCxWebhook#service}

---

###### `generic_web_service`<sup>Optional</sup> <a name="generic_web_service" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putServiceDirectory.parameter.genericWebService"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService">DialogflowCxWebhookServiceDirectoryGenericWebService</a>

generic_web_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#generic_web_service DialogflowCxWebhook#generic_web_service}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#create DialogflowCxWebhook#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#delete DialogflowCxWebhook#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#update DialogflowCxWebhook#update}.

---

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_enable_spell_correction` <a name="reset_enable_spell_correction" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetEnableSpellCorrection"></a>

```python
def reset_enable_spell_correction() -> None
```

##### `reset_enable_stackdriver_logging` <a name="reset_enable_stackdriver_logging" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetEnableStackdriverLogging"></a>

```python
def reset_enable_stackdriver_logging() -> None
```

##### `reset_generic_web_service` <a name="reset_generic_web_service" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetGenericWebService"></a>

```python
def reset_generic_web_service() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetParent"></a>

```python
def reset_parent() -> None
```

##### `reset_security_settings` <a name="reset_security_settings" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetSecuritySettings"></a>

```python
def reset_security_settings() -> None
```

##### `reset_service_directory` <a name="reset_service_directory" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetServiceDirectory"></a>

```python
def reset_service_directory() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DialogflowCxWebhook resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_webhook

dialogflowCxWebhook.DialogflowCxWebhook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_webhook

dialogflowCxWebhook.DialogflowCxWebhook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_webhook

dialogflowCxWebhook.DialogflowCxWebhook.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_webhook

dialogflowCxWebhook.DialogflowCxWebhook.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DialogflowCxWebhook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DialogflowCxWebhook to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DialogflowCxWebhook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DialogflowCxWebhook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.genericWebService">generic_web_service</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference">DialogflowCxWebhookGenericWebServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.serviceDirectory">service_directory</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference">DialogflowCxWebhookServiceDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.startFlow">start_flow</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference">DialogflowCxWebhookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.enableSpellCorrectionInput">enable_spell_correction_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.enableStackdriverLoggingInput">enable_stackdriver_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.genericWebServiceInput">generic_web_service_input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService">DialogflowCxWebhookGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.securitySettingsInput">security_settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.serviceDirectoryInput">service_directory_input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory">DialogflowCxWebhookServiceDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.timeoutInput">timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts">DialogflowCxWebhookTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.enableSpellCorrection">enable_spell_correction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.enableStackdriverLogging">enable_stackdriver_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.securitySettings">security_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.timeout">timeout</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `generic_web_service`<sup>Required</sup> <a name="generic_web_service" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.genericWebService"></a>

```python
generic_web_service: DialogflowCxWebhookGenericWebServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference">DialogflowCxWebhookGenericWebServiceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_directory`<sup>Required</sup> <a name="service_directory" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.serviceDirectory"></a>

```python
service_directory: DialogflowCxWebhookServiceDirectoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference">DialogflowCxWebhookServiceDirectoryOutputReference</a>

---

##### `start_flow`<sup>Required</sup> <a name="start_flow" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.startFlow"></a>

```python
start_flow: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.timeouts"></a>

```python
timeouts: DialogflowCxWebhookTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference">DialogflowCxWebhookTimeoutsOutputReference</a>

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enable_spell_correction_input`<sup>Optional</sup> <a name="enable_spell_correction_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.enableSpellCorrectionInput"></a>

```python
enable_spell_correction_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_stackdriver_logging_input`<sup>Optional</sup> <a name="enable_stackdriver_logging_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.enableStackdriverLoggingInput"></a>

```python
enable_stackdriver_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `generic_web_service_input`<sup>Optional</sup> <a name="generic_web_service_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.genericWebServiceInput"></a>

```python
generic_web_service_input: DialogflowCxWebhookGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService">DialogflowCxWebhookGenericWebService</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `security_settings_input`<sup>Optional</sup> <a name="security_settings_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.securitySettingsInput"></a>

```python
security_settings_input: str
```

- *Type:* str

---

##### `service_directory_input`<sup>Optional</sup> <a name="service_directory_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.serviceDirectoryInput"></a>

```python
service_directory_input: DialogflowCxWebhookServiceDirectory
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory">DialogflowCxWebhookServiceDirectory</a>

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.timeoutInput"></a>

```python
timeout_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DialogflowCxWebhookTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts">DialogflowCxWebhookTimeouts</a>]

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enable_spell_correction`<sup>Required</sup> <a name="enable_spell_correction" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.enableSpellCorrection"></a>

```python
enable_spell_correction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_stackdriver_logging`<sup>Required</sup> <a name="enable_stackdriver_logging" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.enableStackdriverLogging"></a>

```python
enable_stackdriver_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `security_settings`<sup>Required</sup> <a name="security_settings" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.securitySettings"></a>

```python
security_settings: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxWebhookConfig <a name="DialogflowCxWebhookConfig" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_webhook

dialogflowCxWebhook.DialogflowCxWebhookConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  disabled: typing.Union[bool, IResolvable] = None,
  enable_spell_correction: typing.Union[bool, IResolvable] = None,
  enable_stackdriver_logging: typing.Union[bool, IResolvable] = None,
  generic_web_service: DialogflowCxWebhookGenericWebService = None,
  id: str = None,
  parent: str = None,
  security_settings: str = None,
  service_directory: DialogflowCxWebhookServiceDirectory = None,
  timeout: str = None,
  timeouts: DialogflowCxWebhookTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the webhook, unique within the agent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the webhook is disabled. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.enableSpellCorrection">enable_spell_correction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Deprecated. Indicates if automatic spell correction is enabled in detect intent requests. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.enableStackdriverLogging">enable_stackdriver_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Deprecated. Determines whether this agent should log conversation queries. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.genericWebService">generic_web_service</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService">DialogflowCxWebhookGenericWebService</a></code> | generic_web_service block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#id DialogflowCxWebhook#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.parent">parent</a></code> | <code>str</code> | The agent to create a webhook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.securitySettings">security_settings</a></code> | <code>str</code> | Deprecated. Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.serviceDirectory">service_directory</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory">DialogflowCxWebhookServiceDirectory</a></code> | service_directory block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.timeout">timeout</a></code> | <code>str</code> | Webhook execution timeout. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts">DialogflowCxWebhookTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The human-readable name of the webhook, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#display_name DialogflowCxWebhook#display_name}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the webhook is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#disabled DialogflowCxWebhook#disabled}

---

##### `enable_spell_correction`<sup>Optional</sup> <a name="enable_spell_correction" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.enableSpellCorrection"></a>

```python
enable_spell_correction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Deprecated. Indicates if automatic spell correction is enabled in detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#enable_spell_correction DialogflowCxWebhook#enable_spell_correction}

---

##### `enable_stackdriver_logging`<sup>Optional</sup> <a name="enable_stackdriver_logging" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.enableStackdriverLogging"></a>

```python
enable_stackdriver_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Deprecated. Determines whether this agent should log conversation queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#enable_stackdriver_logging DialogflowCxWebhook#enable_stackdriver_logging}

---

##### `generic_web_service`<sup>Optional</sup> <a name="generic_web_service" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.genericWebService"></a>

```python
generic_web_service: DialogflowCxWebhookGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService">DialogflowCxWebhookGenericWebService</a>

generic_web_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#generic_web_service DialogflowCxWebhook#generic_web_service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#id DialogflowCxWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The agent to create a webhook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#parent DialogflowCxWebhook#parent}

---

##### `security_settings`<sup>Optional</sup> <a name="security_settings" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.securitySettings"></a>

```python
security_settings: str
```

- *Type:* str

Deprecated. Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#security_settings DialogflowCxWebhook#security_settings}

---

##### `service_directory`<sup>Optional</sup> <a name="service_directory" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.serviceDirectory"></a>

```python
service_directory: DialogflowCxWebhookServiceDirectory
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory">DialogflowCxWebhookServiceDirectory</a>

service_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#service_directory DialogflowCxWebhook#service_directory}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

Webhook execution timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#timeout DialogflowCxWebhook#timeout}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.timeouts"></a>

```python
timeouts: DialogflowCxWebhookTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts">DialogflowCxWebhookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#timeouts DialogflowCxWebhook#timeouts}

---

### DialogflowCxWebhookGenericWebService <a name="DialogflowCxWebhookGenericWebService" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_webhook

dialogflowCxWebhook.DialogflowCxWebhookGenericWebService(
  uri: str,
  allowed_ca_certs: typing.List[str] = None,
  http_method: str = None,
  oauth_config: DialogflowCxWebhookGenericWebServiceOauthConfig = None,
  parameter_mapping: typing.Mapping[str] = None,
  request_body: str = None,
  request_headers: typing.Mapping[str] = None,
  secret_version_for_username_password: str = None,
  secret_versions_for_request_headers: typing.Union[IResolvable, typing.List[DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders]] = None,
  service_agent_auth: str = None,
  webhook_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.uri">uri</a></code> | <code>str</code> | The webhook URI for receiving POST requests. It must use https protocol. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.allowedCaCerts">allowed_ca_certs</a></code> | <code>typing.List[str]</code> | Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.httpMethod">http_method</a></code> | <code>str</code> | HTTP method for the flexible webhook calls. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig">DialogflowCxWebhookGenericWebServiceOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.parameterMapping">parameter_mapping</a></code> | <code>typing.Mapping[str]</code> | Maps the values extracted from specific fields of the flexible webhook response into session parameters. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.requestBody">request_body</a></code> | <code>str</code> | Defines a custom JSON object as request body to send to flexible webhook. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.requestHeaders">request_headers</a></code> | <code>typing.Mapping[str]</code> | The HTTP request headers to send together with webhook requests. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.secretVersionForUsernamePassword">secret_version_for_username_password</a></code> | <code>str</code> | The SecretManager secret version resource storing the username:password pair for HTTP Basic authentication. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.secretVersionsForRequestHeaders">secret_versions_for_request_headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders">DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders</a>]]</code> | secret_versions_for_request_headers block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.serviceAgentAuth">service_agent_auth</a></code> | <code>str</code> | Indicate the auth token type generated from the [Diglogflow service agent](https://cloud.google.com/iam/docs/service-agents#dialogflow-service-agent). The generated token is sent in the Authorization header. Possible values: ["NONE", "ID_TOKEN", "ACCESS_TOKEN"]. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.webhookType">webhook_type</a></code> | <code>str</code> | Type of the webhook. Possible values: ["STANDARD", "FLEXIBLE"]. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.uri"></a>

```python
uri: str
```

- *Type:* str

The webhook URI for receiving POST requests. It must use https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#uri DialogflowCxWebhook#uri}

---

##### `allowed_ca_certs`<sup>Optional</sup> <a name="allowed_ca_certs" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.allowedCaCerts"></a>

```python
allowed_ca_certs: typing.List[str]
```

- *Type:* typing.List[str]

Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store. If this
is empty or unspecified, Dialogflow will use Google's default trust store
to verify certificates.
N.B. Make sure the HTTPS server certificates are signed with "subject alt
name". For instance a certificate can be self-signed using the following
command,
openssl x509 -req -days 200 -in example.com.csr \
-signkey example.com.key \
-out example.com.crt \
-extfile <(printf "\nsubjectAltName='DNS:www.example.com'")

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#allowed_ca_certs DialogflowCxWebhook#allowed_ca_certs}

---

##### `http_method`<sup>Optional</sup> <a name="http_method" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

HTTP method for the flexible webhook calls.

Standard webhook always uses
POST. Possible values: ["POST", "GET", "HEAD", "PUT", "DELETE", "PATCH", "OPTIONS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#http_method DialogflowCxWebhook#http_method}

---

##### `oauth_config`<sup>Optional</sup> <a name="oauth_config" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.oauthConfig"></a>

```python
oauth_config: DialogflowCxWebhookGenericWebServiceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig">DialogflowCxWebhookGenericWebServiceOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#oauth_config DialogflowCxWebhook#oauth_config}

---

##### `parameter_mapping`<sup>Optional</sup> <a name="parameter_mapping" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.parameterMapping"></a>

```python
parameter_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Maps the values extracted from specific fields of the flexible webhook response into session parameters.

* Key: session parameter name
* Value: field path in the webhook response

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#parameter_mapping DialogflowCxWebhook#parameter_mapping}

---

##### `request_body`<sup>Optional</sup> <a name="request_body" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.requestBody"></a>

```python
request_body: str
```

- *Type:* str

Defines a custom JSON object as request body to send to flexible webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#request_body DialogflowCxWebhook#request_body}

---

##### `request_headers`<sup>Optional</sup> <a name="request_headers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.requestHeaders"></a>

```python
request_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The HTTP request headers to send together with webhook requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#request_headers DialogflowCxWebhook#request_headers}

---

##### `secret_version_for_username_password`<sup>Optional</sup> <a name="secret_version_for_username_password" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.secretVersionForUsernamePassword"></a>

```python
secret_version_for_username_password: str
```

- *Type:* str

The SecretManager secret version resource storing the username:password pair for HTTP Basic authentication. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#secret_version_for_username_password DialogflowCxWebhook#secret_version_for_username_password}

---

##### `secret_versions_for_request_headers`<sup>Optional</sup> <a name="secret_versions_for_request_headers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.secretVersionsForRequestHeaders"></a>

```python
secret_versions_for_request_headers: typing.Union[IResolvable, typing.List[DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders">DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders</a>]]

secret_versions_for_request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#secret_versions_for_request_headers DialogflowCxWebhook#secret_versions_for_request_headers}

---

##### `service_agent_auth`<sup>Optional</sup> <a name="service_agent_auth" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.serviceAgentAuth"></a>

```python
service_agent_auth: str
```

- *Type:* str

Indicate the auth token type generated from the [Diglogflow service agent](https://cloud.google.com/iam/docs/service-agents#dialogflow-service-agent). The generated token is sent in the Authorization header. Possible values: ["NONE", "ID_TOKEN", "ACCESS_TOKEN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#service_agent_auth DialogflowCxWebhook#service_agent_auth}

---

##### `webhook_type`<sup>Optional</sup> <a name="webhook_type" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.webhookType"></a>

```python
webhook_type: str
```

- *Type:* str

Type of the webhook. Possible values: ["STANDARD", "FLEXIBLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#webhook_type DialogflowCxWebhook#webhook_type}

---

### DialogflowCxWebhookGenericWebServiceOauthConfig <a name="DialogflowCxWebhookGenericWebServiceOauthConfig" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_webhook

dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig(
  client_id: str,
  token_endpoint: str,
  client_secret: str = None,
  scopes: typing.List[str] = None,
  secret_version_for_client_secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.clientId">client_id</a></code> | <code>str</code> | The client ID provided by the 3rd party platform. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | The token endpoint provided by the 3rd party platform to exchange an access token. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | The client secret provided by the 3rd party platform.  If the 'secret_version_for_client_secret' field is set, this field will be ignored. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | The OAuth scopes to grant. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.secretVersionForClientSecret">secret_version_for_client_secret</a></code> | <code>str</code> | The name of the SecretManager secret version resource storing the client secret. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client ID provided by the 3rd party platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#client_id DialogflowCxWebhook#client_id}

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

The token endpoint provided by the 3rd party platform to exchange an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#token_endpoint DialogflowCxWebhook#token_endpoint}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The client secret provided by the 3rd party platform.  If the 'secret_version_for_client_secret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#client_secret DialogflowCxWebhook#client_secret}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#scopes DialogflowCxWebhook#scopes}

---

##### `secret_version_for_client_secret`<sup>Optional</sup> <a name="secret_version_for_client_secret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.secretVersionForClientSecret"></a>

```python
secret_version_for_client_secret: str
```

- *Type:* str

The name of the SecretManager secret version resource storing the client secret.

If this field is set, the 'client_secret' field will be
ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#secret_version_for_client_secret DialogflowCxWebhook#secret_version_for_client_secret}

---

### DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders <a name="DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_webhook

dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders(
  key: str,
  secret_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#key DialogflowCxWebhook#key}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders.property.secretVersion">secret_version</a></code> | <code>str</code> | The SecretManager secret version resource storing the header value. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#key DialogflowCxWebhook#key}.

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

The SecretManager secret version resource storing the header value. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#secret_version DialogflowCxWebhook#secret_version}

---

### DialogflowCxWebhookServiceDirectory <a name="DialogflowCxWebhookServiceDirectory" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_webhook

dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory(
  service: str,
  generic_web_service: DialogflowCxWebhookServiceDirectoryGenericWebService = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory.property.service">service</a></code> | <code>str</code> | The name of Service Directory service. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory.property.genericWebService">generic_web_service</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService">DialogflowCxWebhookServiceDirectoryGenericWebService</a></code> | generic_web_service block. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory.property.service"></a>

```python
service: str
```

- *Type:* str

The name of Service Directory service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#service DialogflowCxWebhook#service}

---

##### `generic_web_service`<sup>Optional</sup> <a name="generic_web_service" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory.property.genericWebService"></a>

```python
generic_web_service: DialogflowCxWebhookServiceDirectoryGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService">DialogflowCxWebhookServiceDirectoryGenericWebService</a>

generic_web_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#generic_web_service DialogflowCxWebhook#generic_web_service}

---

### DialogflowCxWebhookServiceDirectoryGenericWebService <a name="DialogflowCxWebhookServiceDirectoryGenericWebService" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_webhook

dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService(
  uri: str,
  allowed_ca_certs: typing.List[str] = None,
  http_method: str = None,
  oauth_config: DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig = None,
  parameter_mapping: typing.Mapping[str] = None,
  request_body: str = None,
  request_headers: typing.Mapping[str] = None,
  secret_version_for_username_password: str = None,
  secret_versions_for_request_headers: typing.Union[IResolvable, typing.List[DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders]] = None,
  service_agent_auth: str = None,
  webhook_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.uri">uri</a></code> | <code>str</code> | The webhook URI for receiving POST requests. It must use https protocol. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.allowedCaCerts">allowed_ca_certs</a></code> | <code>typing.List[str]</code> | Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.httpMethod">http_method</a></code> | <code>str</code> | HTTP method for the flexible webhook calls. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.parameterMapping">parameter_mapping</a></code> | <code>typing.Mapping[str]</code> | Maps the values extracted from specific fields of the flexible webhook response into session parameters. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.requestBody">request_body</a></code> | <code>str</code> | Defines a custom JSON object as request body to send to flexible webhook. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.requestHeaders">request_headers</a></code> | <code>typing.Mapping[str]</code> | The HTTP request headers to send together with webhook requests. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.secretVersionForUsernamePassword">secret_version_for_username_password</a></code> | <code>str</code> | The SecretManager secret version resource storing the username:password pair for HTTP Basic authentication. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.secretVersionsForRequestHeaders">secret_versions_for_request_headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders">DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders</a>]]</code> | secret_versions_for_request_headers block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.serviceAgentAuth">service_agent_auth</a></code> | <code>str</code> | Indicate the auth token type generated from the [Diglogflow service agent](https://cloud.google.com/iam/docs/service-agents#dialogflow-service-agent). The generated token is sent in the Authorization header. Possible values: ["NONE", "ID_TOKEN", "ACCESS_TOKEN"]. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.webhookType">webhook_type</a></code> | <code>str</code> | Type of the webhook. Possible values: ["STANDARD", "FLEXIBLE"]. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.uri"></a>

```python
uri: str
```

- *Type:* str

The webhook URI for receiving POST requests. It must use https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#uri DialogflowCxWebhook#uri}

---

##### `allowed_ca_certs`<sup>Optional</sup> <a name="allowed_ca_certs" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.allowedCaCerts"></a>

```python
allowed_ca_certs: typing.List[str]
```

- *Type:* typing.List[str]

Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store. If this
is empty or unspecified, Dialogflow will use Google's default trust store
to verify certificates.
N.B. Make sure the HTTPS server certificates are signed with "subject alt
name". For instance a certificate can be self-signed using the following
command,
openssl x509 -req -days 200 -in example.com.csr \
-signkey example.com.key \
-out example.com.crt \
-extfile <(printf "\nsubjectAltName='DNS:www.example.com'")

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#allowed_ca_certs DialogflowCxWebhook#allowed_ca_certs}

---

##### `http_method`<sup>Optional</sup> <a name="http_method" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

HTTP method for the flexible webhook calls.

Standard webhook always uses
POST. Possible values: ["POST", "GET", "HEAD", "PUT", "DELETE", "PATCH", "OPTIONS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#http_method DialogflowCxWebhook#http_method}

---

##### `oauth_config`<sup>Optional</sup> <a name="oauth_config" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.oauthConfig"></a>

```python
oauth_config: DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#oauth_config DialogflowCxWebhook#oauth_config}

---

##### `parameter_mapping`<sup>Optional</sup> <a name="parameter_mapping" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.parameterMapping"></a>

```python
parameter_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Maps the values extracted from specific fields of the flexible webhook response into session parameters.

* Key: session parameter name
* Value: field path in the webhook response

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#parameter_mapping DialogflowCxWebhook#parameter_mapping}

---

##### `request_body`<sup>Optional</sup> <a name="request_body" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.requestBody"></a>

```python
request_body: str
```

- *Type:* str

Defines a custom JSON object as request body to send to flexible webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#request_body DialogflowCxWebhook#request_body}

---

##### `request_headers`<sup>Optional</sup> <a name="request_headers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.requestHeaders"></a>

```python
request_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The HTTP request headers to send together with webhook requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#request_headers DialogflowCxWebhook#request_headers}

---

##### `secret_version_for_username_password`<sup>Optional</sup> <a name="secret_version_for_username_password" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.secretVersionForUsernamePassword"></a>

```python
secret_version_for_username_password: str
```

- *Type:* str

The SecretManager secret version resource storing the username:password pair for HTTP Basic authentication. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#secret_version_for_username_password DialogflowCxWebhook#secret_version_for_username_password}

---

##### `secret_versions_for_request_headers`<sup>Optional</sup> <a name="secret_versions_for_request_headers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.secretVersionsForRequestHeaders"></a>

```python
secret_versions_for_request_headers: typing.Union[IResolvable, typing.List[DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders">DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders</a>]]

secret_versions_for_request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#secret_versions_for_request_headers DialogflowCxWebhook#secret_versions_for_request_headers}

---

##### `service_agent_auth`<sup>Optional</sup> <a name="service_agent_auth" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.serviceAgentAuth"></a>

```python
service_agent_auth: str
```

- *Type:* str

Indicate the auth token type generated from the [Diglogflow service agent](https://cloud.google.com/iam/docs/service-agents#dialogflow-service-agent). The generated token is sent in the Authorization header. Possible values: ["NONE", "ID_TOKEN", "ACCESS_TOKEN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#service_agent_auth DialogflowCxWebhook#service_agent_auth}

---

##### `webhook_type`<sup>Optional</sup> <a name="webhook_type" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.webhookType"></a>

```python
webhook_type: str
```

- *Type:* str

Type of the webhook. Possible values: ["STANDARD", "FLEXIBLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#webhook_type DialogflowCxWebhook#webhook_type}

---

### DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig <a name="DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_webhook

dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig(
  client_id: str,
  token_endpoint: str,
  client_secret: str = None,
  scopes: typing.List[str] = None,
  secret_version_for_client_secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.clientId">client_id</a></code> | <code>str</code> | The client ID provided by the 3rd party platform. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | The token endpoint provided by the 3rd party platform to exchange an access token. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | The client secret provided by the 3rd party platform.  If the 'secret_version_for_client_secret' field is set, this field will be ignored. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | The OAuth scopes to grant. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.secretVersionForClientSecret">secret_version_for_client_secret</a></code> | <code>str</code> | The name of the SecretManager secret version resource storing the client secret. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client ID provided by the 3rd party platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#client_id DialogflowCxWebhook#client_id}

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

The token endpoint provided by the 3rd party platform to exchange an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#token_endpoint DialogflowCxWebhook#token_endpoint}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The client secret provided by the 3rd party platform.  If the 'secret_version_for_client_secret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#client_secret DialogflowCxWebhook#client_secret}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#scopes DialogflowCxWebhook#scopes}

---

##### `secret_version_for_client_secret`<sup>Optional</sup> <a name="secret_version_for_client_secret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.secretVersionForClientSecret"></a>

```python
secret_version_for_client_secret: str
```

- *Type:* str

The name of the SecretManager secret version resource storing the client secret.

If this field is set, the 'client_secret' field will be
ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#secret_version_for_client_secret DialogflowCxWebhook#secret_version_for_client_secret}

---

### DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders <a name="DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_webhook

dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders(
  key: str,
  secret_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#key DialogflowCxWebhook#key}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders.property.secretVersion">secret_version</a></code> | <code>str</code> | The SecretManager secret version resource storing the header value. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#key DialogflowCxWebhook#key}.

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

The SecretManager secret version resource storing the header value. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#secret_version DialogflowCxWebhook#secret_version}

---

### DialogflowCxWebhookTimeouts <a name="DialogflowCxWebhookTimeouts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_webhook

dialogflowCxWebhook.DialogflowCxWebhookTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#create DialogflowCxWebhook#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#delete DialogflowCxWebhook#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#update DialogflowCxWebhook#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#create DialogflowCxWebhook#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#delete DialogflowCxWebhook#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#update DialogflowCxWebhook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference <a name="DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_webhook

dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resetSecretVersionForClientSecret">reset_secret_version_for_client_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```

##### `reset_secret_version_for_client_secret` <a name="reset_secret_version_for_client_secret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resetSecretVersionForClientSecret"></a>

```python
def reset_secret_version_for_client_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecretInput">secret_version_for_client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.tokenEndpointInput">token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecret">secret_version_for_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig">DialogflowCxWebhookGenericWebServiceOauthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret_version_for_client_secret_input`<sup>Optional</sup> <a name="secret_version_for_client_secret_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecretInput"></a>

```python
secret_version_for_client_secret_input: str
```

- *Type:* str

---

##### `token_endpoint_input`<sup>Optional</sup> <a name="token_endpoint_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.tokenEndpointInput"></a>

```python
token_endpoint_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret_version_for_client_secret`<sup>Required</sup> <a name="secret_version_for_client_secret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecret"></a>

```python
secret_version_for_client_secret: str
```

- *Type:* str

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowCxWebhookGenericWebServiceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig">DialogflowCxWebhookGenericWebServiceOauthConfig</a>

---


### DialogflowCxWebhookGenericWebServiceOutputReference <a name="DialogflowCxWebhookGenericWebServiceOutputReference" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_webhook

dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.putOauthConfig">put_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.putSecretVersionsForRequestHeaders">put_secret_versions_for_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetAllowedCaCerts">reset_allowed_ca_certs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetHttpMethod">reset_http_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetOauthConfig">reset_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetParameterMapping">reset_parameter_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetRequestBody">reset_request_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetRequestHeaders">reset_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetSecretVersionForUsernamePassword">reset_secret_version_for_username_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetSecretVersionsForRequestHeaders">reset_secret_versions_for_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetServiceAgentAuth">reset_service_agent_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetWebhookType">reset_webhook_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_oauth_config` <a name="put_oauth_config" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.putOauthConfig"></a>

```python
def put_oauth_config(
  client_id: str,
  token_endpoint: str,
  client_secret: str = None,
  scopes: typing.List[str] = None,
  secret_version_for_client_secret: str = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.putOauthConfig.parameter.clientId"></a>

- *Type:* str

The client ID provided by the 3rd party platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#client_id DialogflowCxWebhook#client_id}

---

###### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.putOauthConfig.parameter.tokenEndpoint"></a>

- *Type:* str

The token endpoint provided by the 3rd party platform to exchange an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#token_endpoint DialogflowCxWebhook#token_endpoint}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.putOauthConfig.parameter.clientSecret"></a>

- *Type:* str

The client secret provided by the 3rd party platform.  If the 'secret_version_for_client_secret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#client_secret DialogflowCxWebhook#client_secret}

---

###### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.putOauthConfig.parameter.scopes"></a>

- *Type:* typing.List[str]

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#scopes DialogflowCxWebhook#scopes}

---

###### `secret_version_for_client_secret`<sup>Optional</sup> <a name="secret_version_for_client_secret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.putOauthConfig.parameter.secretVersionForClientSecret"></a>

- *Type:* str

The name of the SecretManager secret version resource storing the client secret.

If this field is set, the 'client_secret' field will be
ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#secret_version_for_client_secret DialogflowCxWebhook#secret_version_for_client_secret}

---

##### `put_secret_versions_for_request_headers` <a name="put_secret_versions_for_request_headers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.putSecretVersionsForRequestHeaders"></a>

```python
def put_secret_versions_for_request_headers(
  value: typing.Union[IResolvable, typing.List[DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.putSecretVersionsForRequestHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders">DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders</a>]]

---

##### `reset_allowed_ca_certs` <a name="reset_allowed_ca_certs" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetAllowedCaCerts"></a>

```python
def reset_allowed_ca_certs() -> None
```

##### `reset_http_method` <a name="reset_http_method" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetHttpMethod"></a>

```python
def reset_http_method() -> None
```

##### `reset_oauth_config` <a name="reset_oauth_config" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetOauthConfig"></a>

```python
def reset_oauth_config() -> None
```

##### `reset_parameter_mapping` <a name="reset_parameter_mapping" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetParameterMapping"></a>

```python
def reset_parameter_mapping() -> None
```

##### `reset_request_body` <a name="reset_request_body" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetRequestBody"></a>

```python
def reset_request_body() -> None
```

##### `reset_request_headers` <a name="reset_request_headers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetRequestHeaders"></a>

```python
def reset_request_headers() -> None
```

##### `reset_secret_version_for_username_password` <a name="reset_secret_version_for_username_password" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetSecretVersionForUsernamePassword"></a>

```python
def reset_secret_version_for_username_password() -> None
```

##### `reset_secret_versions_for_request_headers` <a name="reset_secret_versions_for_request_headers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetSecretVersionsForRequestHeaders"></a>

```python
def reset_secret_versions_for_request_headers() -> None
```

##### `reset_service_agent_auth` <a name="reset_service_agent_auth" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetServiceAgentAuth"></a>

```python
def reset_service_agent_auth() -> None
```

##### `reset_webhook_type` <a name="reset_webhook_type" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetWebhookType"></a>

```python
def reset_webhook_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference">DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionsForRequestHeaders">secret_versions_for_request_headers</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList">DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.allowedCaCertsInput">allowed_ca_certs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.httpMethodInput">http_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.oauthConfigInput">oauth_config_input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig">DialogflowCxWebhookGenericWebServiceOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.parameterMappingInput">parameter_mapping_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.requestBodyInput">request_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.requestHeadersInput">request_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionForUsernamePasswordInput">secret_version_for_username_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionsForRequestHeadersInput">secret_versions_for_request_headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders">DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.serviceAgentAuthInput">service_agent_auth_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.webhookTypeInput">webhook_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.allowedCaCerts">allowed_ca_certs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.httpMethod">http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.parameterMapping">parameter_mapping</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.requestBody">request_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.requestHeaders">request_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionForUsernamePassword">secret_version_for_username_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.serviceAgentAuth">service_agent_auth</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.webhookType">webhook_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService">DialogflowCxWebhookGenericWebService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oauth_config`<sup>Required</sup> <a name="oauth_config" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.oauthConfig"></a>

```python
oauth_config: DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference">DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference</a>

---

##### `secret_versions_for_request_headers`<sup>Required</sup> <a name="secret_versions_for_request_headers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionsForRequestHeaders"></a>

```python
secret_versions_for_request_headers: DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList">DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList</a>

---

##### `allowed_ca_certs_input`<sup>Optional</sup> <a name="allowed_ca_certs_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.allowedCaCertsInput"></a>

```python
allowed_ca_certs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `http_method_input`<sup>Optional</sup> <a name="http_method_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.httpMethodInput"></a>

```python
http_method_input: str
```

- *Type:* str

---

##### `oauth_config_input`<sup>Optional</sup> <a name="oauth_config_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.oauthConfigInput"></a>

```python
oauth_config_input: DialogflowCxWebhookGenericWebServiceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig">DialogflowCxWebhookGenericWebServiceOauthConfig</a>

---

##### `parameter_mapping_input`<sup>Optional</sup> <a name="parameter_mapping_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.parameterMappingInput"></a>

```python
parameter_mapping_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `request_body_input`<sup>Optional</sup> <a name="request_body_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.requestBodyInput"></a>

```python
request_body_input: str
```

- *Type:* str

---

##### `request_headers_input`<sup>Optional</sup> <a name="request_headers_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.requestHeadersInput"></a>

```python
request_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `secret_version_for_username_password_input`<sup>Optional</sup> <a name="secret_version_for_username_password_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionForUsernamePasswordInput"></a>

```python
secret_version_for_username_password_input: str
```

- *Type:* str

---

##### `secret_versions_for_request_headers_input`<sup>Optional</sup> <a name="secret_versions_for_request_headers_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionsForRequestHeadersInput"></a>

```python
secret_versions_for_request_headers_input: typing.Union[IResolvable, typing.List[DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders">DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders</a>]]

---

##### `service_agent_auth_input`<sup>Optional</sup> <a name="service_agent_auth_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.serviceAgentAuthInput"></a>

```python
service_agent_auth_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `webhook_type_input`<sup>Optional</sup> <a name="webhook_type_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.webhookTypeInput"></a>

```python
webhook_type_input: str
```

- *Type:* str

---

##### `allowed_ca_certs`<sup>Required</sup> <a name="allowed_ca_certs" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.allowedCaCerts"></a>

```python
allowed_ca_certs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

---

##### `parameter_mapping`<sup>Required</sup> <a name="parameter_mapping" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.parameterMapping"></a>

```python
parameter_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `request_body`<sup>Required</sup> <a name="request_body" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.requestBody"></a>

```python
request_body: str
```

- *Type:* str

---

##### `request_headers`<sup>Required</sup> <a name="request_headers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.requestHeaders"></a>

```python
request_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `secret_version_for_username_password`<sup>Required</sup> <a name="secret_version_for_username_password" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionForUsernamePassword"></a>

```python
secret_version_for_username_password: str
```

- *Type:* str

---

##### `service_agent_auth`<sup>Required</sup> <a name="service_agent_auth" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.serviceAgentAuth"></a>

```python
service_agent_auth: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `webhook_type`<sup>Required</sup> <a name="webhook_type" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.webhookType"></a>

```python
webhook_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowCxWebhookGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService">DialogflowCxWebhookGenericWebService</a>

---


### DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList <a name="DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_webhook

dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders">DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders">DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders</a>]]

---


### DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference <a name="DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_webhook

dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersionInput">secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersion">secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders">DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `secret_version_input`<sup>Optional</sup> <a name="secret_version_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersionInput"></a>

```python
secret_version_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders">DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders</a>]

---


### DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference <a name="DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_webhook

dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resetSecretVersionForClientSecret">reset_secret_version_for_client_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```

##### `reset_secret_version_for_client_secret` <a name="reset_secret_version_for_client_secret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resetSecretVersionForClientSecret"></a>

```python
def reset_secret_version_for_client_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecretInput">secret_version_for_client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.tokenEndpointInput">token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecret">secret_version_for_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret_version_for_client_secret_input`<sup>Optional</sup> <a name="secret_version_for_client_secret_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecretInput"></a>

```python
secret_version_for_client_secret_input: str
```

- *Type:* str

---

##### `token_endpoint_input`<sup>Optional</sup> <a name="token_endpoint_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.tokenEndpointInput"></a>

```python
token_endpoint_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret_version_for_client_secret`<sup>Required</sup> <a name="secret_version_for_client_secret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecret"></a>

```python
secret_version_for_client_secret: str
```

- *Type:* str

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a>

---


### DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference <a name="DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_webhook

dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putOauthConfig">put_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putSecretVersionsForRequestHeaders">put_secret_versions_for_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetAllowedCaCerts">reset_allowed_ca_certs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetHttpMethod">reset_http_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetOauthConfig">reset_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetParameterMapping">reset_parameter_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetRequestBody">reset_request_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetRequestHeaders">reset_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetSecretVersionForUsernamePassword">reset_secret_version_for_username_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetSecretVersionsForRequestHeaders">reset_secret_versions_for_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetServiceAgentAuth">reset_service_agent_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetWebhookType">reset_webhook_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_oauth_config` <a name="put_oauth_config" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putOauthConfig"></a>

```python
def put_oauth_config(
  client_id: str,
  token_endpoint: str,
  client_secret: str = None,
  scopes: typing.List[str] = None,
  secret_version_for_client_secret: str = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putOauthConfig.parameter.clientId"></a>

- *Type:* str

The client ID provided by the 3rd party platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#client_id DialogflowCxWebhook#client_id}

---

###### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putOauthConfig.parameter.tokenEndpoint"></a>

- *Type:* str

The token endpoint provided by the 3rd party platform to exchange an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#token_endpoint DialogflowCxWebhook#token_endpoint}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putOauthConfig.parameter.clientSecret"></a>

- *Type:* str

The client secret provided by the 3rd party platform.  If the 'secret_version_for_client_secret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#client_secret DialogflowCxWebhook#client_secret}

---

###### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putOauthConfig.parameter.scopes"></a>

- *Type:* typing.List[str]

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#scopes DialogflowCxWebhook#scopes}

---

###### `secret_version_for_client_secret`<sup>Optional</sup> <a name="secret_version_for_client_secret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putOauthConfig.parameter.secretVersionForClientSecret"></a>

- *Type:* str

The name of the SecretManager secret version resource storing the client secret.

If this field is set, the 'client_secret' field will be
ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#secret_version_for_client_secret DialogflowCxWebhook#secret_version_for_client_secret}

---

##### `put_secret_versions_for_request_headers` <a name="put_secret_versions_for_request_headers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putSecretVersionsForRequestHeaders"></a>

```python
def put_secret_versions_for_request_headers(
  value: typing.Union[IResolvable, typing.List[DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putSecretVersionsForRequestHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders">DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders</a>]]

---

##### `reset_allowed_ca_certs` <a name="reset_allowed_ca_certs" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetAllowedCaCerts"></a>

```python
def reset_allowed_ca_certs() -> None
```

##### `reset_http_method` <a name="reset_http_method" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetHttpMethod"></a>

```python
def reset_http_method() -> None
```

##### `reset_oauth_config` <a name="reset_oauth_config" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetOauthConfig"></a>

```python
def reset_oauth_config() -> None
```

##### `reset_parameter_mapping` <a name="reset_parameter_mapping" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetParameterMapping"></a>

```python
def reset_parameter_mapping() -> None
```

##### `reset_request_body` <a name="reset_request_body" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetRequestBody"></a>

```python
def reset_request_body() -> None
```

##### `reset_request_headers` <a name="reset_request_headers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetRequestHeaders"></a>

```python
def reset_request_headers() -> None
```

##### `reset_secret_version_for_username_password` <a name="reset_secret_version_for_username_password" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetSecretVersionForUsernamePassword"></a>

```python
def reset_secret_version_for_username_password() -> None
```

##### `reset_secret_versions_for_request_headers` <a name="reset_secret_versions_for_request_headers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetSecretVersionsForRequestHeaders"></a>

```python
def reset_secret_versions_for_request_headers() -> None
```

##### `reset_service_agent_auth` <a name="reset_service_agent_auth" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetServiceAgentAuth"></a>

```python
def reset_service_agent_auth() -> None
```

##### `reset_webhook_type` <a name="reset_webhook_type" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetWebhookType"></a>

```python
def reset_webhook_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionsForRequestHeaders">secret_versions_for_request_headers</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList">DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.allowedCaCertsInput">allowed_ca_certs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.httpMethodInput">http_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.oauthConfigInput">oauth_config_input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.parameterMappingInput">parameter_mapping_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestBodyInput">request_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestHeadersInput">request_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionForUsernamePasswordInput">secret_version_for_username_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionsForRequestHeadersInput">secret_versions_for_request_headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders">DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.serviceAgentAuthInput">service_agent_auth_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.webhookTypeInput">webhook_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.allowedCaCerts">allowed_ca_certs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.httpMethod">http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.parameterMapping">parameter_mapping</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestBody">request_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestHeaders">request_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionForUsernamePassword">secret_version_for_username_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.serviceAgentAuth">service_agent_auth</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.webhookType">webhook_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService">DialogflowCxWebhookServiceDirectoryGenericWebService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oauth_config`<sup>Required</sup> <a name="oauth_config" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.oauthConfig"></a>

```python
oauth_config: DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference</a>

---

##### `secret_versions_for_request_headers`<sup>Required</sup> <a name="secret_versions_for_request_headers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionsForRequestHeaders"></a>

```python
secret_versions_for_request_headers: DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList">DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList</a>

---

##### `allowed_ca_certs_input`<sup>Optional</sup> <a name="allowed_ca_certs_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.allowedCaCertsInput"></a>

```python
allowed_ca_certs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `http_method_input`<sup>Optional</sup> <a name="http_method_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.httpMethodInput"></a>

```python
http_method_input: str
```

- *Type:* str

---

##### `oauth_config_input`<sup>Optional</sup> <a name="oauth_config_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.oauthConfigInput"></a>

```python
oauth_config_input: DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a>

---

##### `parameter_mapping_input`<sup>Optional</sup> <a name="parameter_mapping_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.parameterMappingInput"></a>

```python
parameter_mapping_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `request_body_input`<sup>Optional</sup> <a name="request_body_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestBodyInput"></a>

```python
request_body_input: str
```

- *Type:* str

---

##### `request_headers_input`<sup>Optional</sup> <a name="request_headers_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestHeadersInput"></a>

```python
request_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `secret_version_for_username_password_input`<sup>Optional</sup> <a name="secret_version_for_username_password_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionForUsernamePasswordInput"></a>

```python
secret_version_for_username_password_input: str
```

- *Type:* str

---

##### `secret_versions_for_request_headers_input`<sup>Optional</sup> <a name="secret_versions_for_request_headers_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionsForRequestHeadersInput"></a>

```python
secret_versions_for_request_headers_input: typing.Union[IResolvable, typing.List[DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders">DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders</a>]]

---

##### `service_agent_auth_input`<sup>Optional</sup> <a name="service_agent_auth_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.serviceAgentAuthInput"></a>

```python
service_agent_auth_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `webhook_type_input`<sup>Optional</sup> <a name="webhook_type_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.webhookTypeInput"></a>

```python
webhook_type_input: str
```

- *Type:* str

---

##### `allowed_ca_certs`<sup>Required</sup> <a name="allowed_ca_certs" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.allowedCaCerts"></a>

```python
allowed_ca_certs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

---

##### `parameter_mapping`<sup>Required</sup> <a name="parameter_mapping" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.parameterMapping"></a>

```python
parameter_mapping: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `request_body`<sup>Required</sup> <a name="request_body" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestBody"></a>

```python
request_body: str
```

- *Type:* str

---

##### `request_headers`<sup>Required</sup> <a name="request_headers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestHeaders"></a>

```python
request_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `secret_version_for_username_password`<sup>Required</sup> <a name="secret_version_for_username_password" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionForUsernamePassword"></a>

```python
secret_version_for_username_password: str
```

- *Type:* str

---

##### `service_agent_auth`<sup>Required</sup> <a name="service_agent_auth" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.serviceAgentAuth"></a>

```python
service_agent_auth: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `webhook_type`<sup>Required</sup> <a name="webhook_type" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.webhookType"></a>

```python
webhook_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowCxWebhookServiceDirectoryGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService">DialogflowCxWebhookServiceDirectoryGenericWebService</a>

---


### DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList <a name="DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_webhook

dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders">DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders">DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders</a>]]

---


### DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference <a name="DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_webhook

dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersionInput">secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersion">secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders">DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `secret_version_input`<sup>Optional</sup> <a name="secret_version_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersionInput"></a>

```python
secret_version_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders">DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders</a>]

---


### DialogflowCxWebhookServiceDirectoryOutputReference <a name="DialogflowCxWebhookServiceDirectoryOutputReference" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_webhook

dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.putGenericWebService">put_generic_web_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.resetGenericWebService">reset_generic_web_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_generic_web_service` <a name="put_generic_web_service" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.putGenericWebService"></a>

```python
def put_generic_web_service(
  uri: str,
  allowed_ca_certs: typing.List[str] = None,
  http_method: str = None,
  oauth_config: DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig = None,
  parameter_mapping: typing.Mapping[str] = None,
  request_body: str = None,
  request_headers: typing.Mapping[str] = None,
  secret_version_for_username_password: str = None,
  secret_versions_for_request_headers: typing.Union[IResolvable, typing.List[DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders]] = None,
  service_agent_auth: str = None,
  webhook_type: str = None
) -> None
```

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.putGenericWebService.parameter.uri"></a>

- *Type:* str

The webhook URI for receiving POST requests. It must use https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#uri DialogflowCxWebhook#uri}

---

###### `allowed_ca_certs`<sup>Optional</sup> <a name="allowed_ca_certs" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.putGenericWebService.parameter.allowedCaCerts"></a>

- *Type:* typing.List[str]

Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store. If this
is empty or unspecified, Dialogflow will use Google's default trust store
to verify certificates.
N.B. Make sure the HTTPS server certificates are signed with "subject alt
name". For instance a certificate can be self-signed using the following
command,
openssl x509 -req -days 200 -in example.com.csr \
-signkey example.com.key \
-out example.com.crt \
-extfile <(printf "\nsubjectAltName='DNS:www.example.com'")

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#allowed_ca_certs DialogflowCxWebhook#allowed_ca_certs}

---

###### `http_method`<sup>Optional</sup> <a name="http_method" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.putGenericWebService.parameter.httpMethod"></a>

- *Type:* str

HTTP method for the flexible webhook calls.

Standard webhook always uses
POST. Possible values: ["POST", "GET", "HEAD", "PUT", "DELETE", "PATCH", "OPTIONS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#http_method DialogflowCxWebhook#http_method}

---

###### `oauth_config`<sup>Optional</sup> <a name="oauth_config" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.putGenericWebService.parameter.oauthConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#oauth_config DialogflowCxWebhook#oauth_config}

---

###### `parameter_mapping`<sup>Optional</sup> <a name="parameter_mapping" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.putGenericWebService.parameter.parameterMapping"></a>

- *Type:* typing.Mapping[str]

Maps the values extracted from specific fields of the flexible webhook response into session parameters.

* Key: session parameter name
* Value: field path in the webhook response

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#parameter_mapping DialogflowCxWebhook#parameter_mapping}

---

###### `request_body`<sup>Optional</sup> <a name="request_body" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.putGenericWebService.parameter.requestBody"></a>

- *Type:* str

Defines a custom JSON object as request body to send to flexible webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#request_body DialogflowCxWebhook#request_body}

---

###### `request_headers`<sup>Optional</sup> <a name="request_headers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.putGenericWebService.parameter.requestHeaders"></a>

- *Type:* typing.Mapping[str]

The HTTP request headers to send together with webhook requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#request_headers DialogflowCxWebhook#request_headers}

---

###### `secret_version_for_username_password`<sup>Optional</sup> <a name="secret_version_for_username_password" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.putGenericWebService.parameter.secretVersionForUsernamePassword"></a>

- *Type:* str

The SecretManager secret version resource storing the username:password pair for HTTP Basic authentication. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#secret_version_for_username_password DialogflowCxWebhook#secret_version_for_username_password}

---

###### `secret_versions_for_request_headers`<sup>Optional</sup> <a name="secret_versions_for_request_headers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.putGenericWebService.parameter.secretVersionsForRequestHeaders"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders">DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders</a>]]

secret_versions_for_request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#secret_versions_for_request_headers DialogflowCxWebhook#secret_versions_for_request_headers}

---

###### `service_agent_auth`<sup>Optional</sup> <a name="service_agent_auth" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.putGenericWebService.parameter.serviceAgentAuth"></a>

- *Type:* str

Indicate the auth token type generated from the [Diglogflow service agent](https://cloud.google.com/iam/docs/service-agents#dialogflow-service-agent). The generated token is sent in the Authorization header. Possible values: ["NONE", "ID_TOKEN", "ACCESS_TOKEN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#service_agent_auth DialogflowCxWebhook#service_agent_auth}

---

###### `webhook_type`<sup>Optional</sup> <a name="webhook_type" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.putGenericWebService.parameter.webhookType"></a>

- *Type:* str

Type of the webhook. Possible values: ["STANDARD", "FLEXIBLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dialogflow_cx_webhook#webhook_type DialogflowCxWebhook#webhook_type}

---

##### `reset_generic_web_service` <a name="reset_generic_web_service" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.resetGenericWebService"></a>

```python
def reset_generic_web_service() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.genericWebService">generic_web_service</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference">DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.genericWebServiceInput">generic_web_service_input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService">DialogflowCxWebhookServiceDirectoryGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory">DialogflowCxWebhookServiceDirectory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generic_web_service`<sup>Required</sup> <a name="generic_web_service" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.genericWebService"></a>

```python
generic_web_service: DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference">DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference</a>

---

##### `generic_web_service_input`<sup>Optional</sup> <a name="generic_web_service_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.genericWebServiceInput"></a>

```python
generic_web_service_input: DialogflowCxWebhookServiceDirectoryGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService">DialogflowCxWebhookServiceDirectoryGenericWebService</a>

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowCxWebhookServiceDirectory
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory">DialogflowCxWebhookServiceDirectory</a>

---


### DialogflowCxWebhookTimeoutsOutputReference <a name="DialogflowCxWebhookTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_webhook

dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts">DialogflowCxWebhookTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DialogflowCxWebhookTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts">DialogflowCxWebhookTimeouts</a>]

---



