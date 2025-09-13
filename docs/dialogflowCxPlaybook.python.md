# `dialogflowCxPlaybook` Submodule <a name="`dialogflowCxPlaybook` Submodule" id="@cdktf/provider-google.dialogflowCxPlaybook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxPlaybook <a name="DialogflowCxPlaybook" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook google_dialogflow_cx_playbook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_playbook

dialogflowCxPlaybook.DialogflowCxPlaybook(
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
  goal: str,
  id: str = None,
  instruction: DialogflowCxPlaybookInstruction = None,
  llm_model_settings: DialogflowCxPlaybookLlmModelSettings = None,
  parent: str = None,
  playbook_type: str = None,
  referenced_tools: typing.List[str] = None,
  timeouts: DialogflowCxPlaybookTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the playbook, unique within an agent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.goal">goal</a></code> | <code>str</code> | High level description of the goal the playbook intend to accomplish. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#id DialogflowCxPlaybook#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.instruction">instruction</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction">DialogflowCxPlaybookInstruction</a></code> | instruction block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.llmModelSettings">llm_model_settings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings">DialogflowCxPlaybookLlmModelSettings</a></code> | llm_model_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The agent to create a Playbook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.playbookType">playbook_type</a></code> | <code>str</code> | Type of the playbook. Possible values: ["PLAYBOOK_TYPE_UNSPECIFIED", "TASK", "ROUTINE"]. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.referencedTools">referenced_tools</a></code> | <code>typing.List[str]</code> | The resource name of tools referenced by the current playbook in the instructions. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts">DialogflowCxPlaybookTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.displayName"></a>

- *Type:* str

The human-readable name of the playbook, unique within an agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#display_name DialogflowCxPlaybook#display_name}

---

##### `goal`<sup>Required</sup> <a name="goal" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.goal"></a>

- *Type:* str

High level description of the goal the playbook intend to accomplish.

A goal should be concise since it's visible to other playbooks that may reference this playbook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#goal DialogflowCxPlaybook#goal}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#id DialogflowCxPlaybook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.instruction"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction">DialogflowCxPlaybookInstruction</a>

instruction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#instruction DialogflowCxPlaybook#instruction}

---

##### `llm_model_settings`<sup>Optional</sup> <a name="llm_model_settings" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.llmModelSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings">DialogflowCxPlaybookLlmModelSettings</a>

llm_model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#llm_model_settings DialogflowCxPlaybook#llm_model_settings}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.parent"></a>

- *Type:* str

The agent to create a Playbook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#parent DialogflowCxPlaybook#parent}

---

##### `playbook_type`<sup>Optional</sup> <a name="playbook_type" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.playbookType"></a>

- *Type:* str

Type of the playbook. Possible values: ["PLAYBOOK_TYPE_UNSPECIFIED", "TASK", "ROUTINE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#playbook_type DialogflowCxPlaybook#playbook_type}

---

##### `referenced_tools`<sup>Optional</sup> <a name="referenced_tools" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.referencedTools"></a>

- *Type:* typing.List[str]

The resource name of tools referenced by the current playbook in the instructions.

If not provided explicitly, they are will be implied using the tool being referenced in goal and steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#referenced_tools DialogflowCxPlaybook#referenced_tools}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts">DialogflowCxPlaybookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#timeouts DialogflowCxPlaybook#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putInstruction">put_instruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putLlmModelSettings">put_llm_model_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetInstruction">reset_instruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetLlmModelSettings">reset_llm_model_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetParent">reset_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetPlaybookType">reset_playbook_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetReferencedTools">reset_referenced_tools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_instruction` <a name="put_instruction" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putInstruction"></a>

```python
def put_instruction(
  guidelines: str = None,
  steps: typing.Union[IResolvable, typing.List[DialogflowCxPlaybookInstructionSteps]] = None
) -> None
```

###### `guidelines`<sup>Optional</sup> <a name="guidelines" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putInstruction.parameter.guidelines"></a>

- *Type:* str

General guidelines for the playbook.

These are unstructured instructions that are not directly part of the goal, e.g. "Always be polite". It's valid for this text to be long and used instead of steps altogether.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#guidelines DialogflowCxPlaybook#guidelines}

---

###### `steps`<sup>Optional</sup> <a name="steps" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putInstruction.parameter.steps"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps">DialogflowCxPlaybookInstructionSteps</a>]]

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#steps DialogflowCxPlaybook#steps}

---

##### `put_llm_model_settings` <a name="put_llm_model_settings" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putLlmModelSettings"></a>

```python
def put_llm_model_settings(
  model: str = None,
  prompt_text: str = None
) -> None
```

###### `model`<sup>Optional</sup> <a name="model" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putLlmModelSettings.parameter.model"></a>

- *Type:* str

The selected LLM model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#model DialogflowCxPlaybook#model}

---

###### `prompt_text`<sup>Optional</sup> <a name="prompt_text" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putLlmModelSettings.parameter.promptText"></a>

- *Type:* str

The custom prompt to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#prompt_text DialogflowCxPlaybook#prompt_text}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#create DialogflowCxPlaybook#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#delete DialogflowCxPlaybook#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#update DialogflowCxPlaybook#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instruction` <a name="reset_instruction" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetInstruction"></a>

```python
def reset_instruction() -> None
```

##### `reset_llm_model_settings` <a name="reset_llm_model_settings" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetLlmModelSettings"></a>

```python
def reset_llm_model_settings() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetParent"></a>

```python
def reset_parent() -> None
```

##### `reset_playbook_type` <a name="reset_playbook_type" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetPlaybookType"></a>

```python
def reset_playbook_type() -> None
```

##### `reset_referenced_tools` <a name="reset_referenced_tools" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetReferencedTools"></a>

```python
def reset_referenced_tools() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DialogflowCxPlaybook resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_playbook

dialogflowCxPlaybook.DialogflowCxPlaybook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_playbook

dialogflowCxPlaybook.DialogflowCxPlaybook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_playbook

dialogflowCxPlaybook.DialogflowCxPlaybook.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_playbook

dialogflowCxPlaybook.DialogflowCxPlaybook.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DialogflowCxPlaybook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DialogflowCxPlaybook to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DialogflowCxPlaybook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DialogflowCxPlaybook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.instruction">instruction</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference">DialogflowCxPlaybookInstructionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.llmModelSettings">llm_model_settings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference">DialogflowCxPlaybookLlmModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.referencedFlows">referenced_flows</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.referencedPlaybooks">referenced_playbooks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference">DialogflowCxPlaybookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.tokenCount">token_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.goalInput">goal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.instructionInput">instruction_input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction">DialogflowCxPlaybookInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.llmModelSettingsInput">llm_model_settings_input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings">DialogflowCxPlaybookLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.playbookTypeInput">playbook_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.referencedToolsInput">referenced_tools_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts">DialogflowCxPlaybookTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.goal">goal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.playbookType">playbook_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.referencedTools">referenced_tools</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.instruction"></a>

```python
instruction: DialogflowCxPlaybookInstructionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference">DialogflowCxPlaybookInstructionOutputReference</a>

---

##### `llm_model_settings`<sup>Required</sup> <a name="llm_model_settings" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.llmModelSettings"></a>

```python
llm_model_settings: DialogflowCxPlaybookLlmModelSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference">DialogflowCxPlaybookLlmModelSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `referenced_flows`<sup>Required</sup> <a name="referenced_flows" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.referencedFlows"></a>

```python
referenced_flows: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `referenced_playbooks`<sup>Required</sup> <a name="referenced_playbooks" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.referencedPlaybooks"></a>

```python
referenced_playbooks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.timeouts"></a>

```python
timeouts: DialogflowCxPlaybookTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference">DialogflowCxPlaybookTimeoutsOutputReference</a>

---

##### `token_count`<sup>Required</sup> <a name="token_count" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.tokenCount"></a>

```python
token_count: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `goal_input`<sup>Optional</sup> <a name="goal_input" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.goalInput"></a>

```python
goal_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instruction_input`<sup>Optional</sup> <a name="instruction_input" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.instructionInput"></a>

```python
instruction_input: DialogflowCxPlaybookInstruction
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction">DialogflowCxPlaybookInstruction</a>

---

##### `llm_model_settings_input`<sup>Optional</sup> <a name="llm_model_settings_input" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.llmModelSettingsInput"></a>

```python
llm_model_settings_input: DialogflowCxPlaybookLlmModelSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings">DialogflowCxPlaybookLlmModelSettings</a>

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `playbook_type_input`<sup>Optional</sup> <a name="playbook_type_input" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.playbookTypeInput"></a>

```python
playbook_type_input: str
```

- *Type:* str

---

##### `referenced_tools_input`<sup>Optional</sup> <a name="referenced_tools_input" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.referencedToolsInput"></a>

```python
referenced_tools_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DialogflowCxPlaybookTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts">DialogflowCxPlaybookTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `goal`<sup>Required</sup> <a name="goal" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.goal"></a>

```python
goal: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `playbook_type`<sup>Required</sup> <a name="playbook_type" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.playbookType"></a>

```python
playbook_type: str
```

- *Type:* str

---

##### `referenced_tools`<sup>Required</sup> <a name="referenced_tools" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.referencedTools"></a>

```python
referenced_tools: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxPlaybookConfig <a name="DialogflowCxPlaybookConfig" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_playbook

dialogflowCxPlaybook.DialogflowCxPlaybookConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  goal: str,
  id: str = None,
  instruction: DialogflowCxPlaybookInstruction = None,
  llm_model_settings: DialogflowCxPlaybookLlmModelSettings = None,
  parent: str = None,
  playbook_type: str = None,
  referenced_tools: typing.List[str] = None,
  timeouts: DialogflowCxPlaybookTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the playbook, unique within an agent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.goal">goal</a></code> | <code>str</code> | High level description of the goal the playbook intend to accomplish. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#id DialogflowCxPlaybook#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.instruction">instruction</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction">DialogflowCxPlaybookInstruction</a></code> | instruction block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.llmModelSettings">llm_model_settings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings">DialogflowCxPlaybookLlmModelSettings</a></code> | llm_model_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.parent">parent</a></code> | <code>str</code> | The agent to create a Playbook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.playbookType">playbook_type</a></code> | <code>str</code> | Type of the playbook. Possible values: ["PLAYBOOK_TYPE_UNSPECIFIED", "TASK", "ROUTINE"]. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.referencedTools">referenced_tools</a></code> | <code>typing.List[str]</code> | The resource name of tools referenced by the current playbook in the instructions. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts">DialogflowCxPlaybookTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The human-readable name of the playbook, unique within an agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#display_name DialogflowCxPlaybook#display_name}

---

##### `goal`<sup>Required</sup> <a name="goal" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.goal"></a>

```python
goal: str
```

- *Type:* str

High level description of the goal the playbook intend to accomplish.

A goal should be concise since it's visible to other playbooks that may reference this playbook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#goal DialogflowCxPlaybook#goal}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#id DialogflowCxPlaybook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.instruction"></a>

```python
instruction: DialogflowCxPlaybookInstruction
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction">DialogflowCxPlaybookInstruction</a>

instruction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#instruction DialogflowCxPlaybook#instruction}

---

##### `llm_model_settings`<sup>Optional</sup> <a name="llm_model_settings" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.llmModelSettings"></a>

```python
llm_model_settings: DialogflowCxPlaybookLlmModelSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings">DialogflowCxPlaybookLlmModelSettings</a>

llm_model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#llm_model_settings DialogflowCxPlaybook#llm_model_settings}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The agent to create a Playbook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#parent DialogflowCxPlaybook#parent}

---

##### `playbook_type`<sup>Optional</sup> <a name="playbook_type" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.playbookType"></a>

```python
playbook_type: str
```

- *Type:* str

Type of the playbook. Possible values: ["PLAYBOOK_TYPE_UNSPECIFIED", "TASK", "ROUTINE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#playbook_type DialogflowCxPlaybook#playbook_type}

---

##### `referenced_tools`<sup>Optional</sup> <a name="referenced_tools" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.referencedTools"></a>

```python
referenced_tools: typing.List[str]
```

- *Type:* typing.List[str]

The resource name of tools referenced by the current playbook in the instructions.

If not provided explicitly, they are will be implied using the tool being referenced in goal and steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#referenced_tools DialogflowCxPlaybook#referenced_tools}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.timeouts"></a>

```python
timeouts: DialogflowCxPlaybookTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts">DialogflowCxPlaybookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#timeouts DialogflowCxPlaybook#timeouts}

---

### DialogflowCxPlaybookInstruction <a name="DialogflowCxPlaybookInstruction" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_playbook

dialogflowCxPlaybook.DialogflowCxPlaybookInstruction(
  guidelines: str = None,
  steps: typing.Union[IResolvable, typing.List[DialogflowCxPlaybookInstructionSteps]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction.property.guidelines">guidelines</a></code> | <code>str</code> | General guidelines for the playbook. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction.property.steps">steps</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps">DialogflowCxPlaybookInstructionSteps</a>]]</code> | steps block. |

---

##### `guidelines`<sup>Optional</sup> <a name="guidelines" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction.property.guidelines"></a>

```python
guidelines: str
```

- *Type:* str

General guidelines for the playbook.

These are unstructured instructions that are not directly part of the goal, e.g. "Always be polite". It's valid for this text to be long and used instead of steps altogether.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#guidelines DialogflowCxPlaybook#guidelines}

---

##### `steps`<sup>Optional</sup> <a name="steps" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction.property.steps"></a>

```python
steps: typing.Union[IResolvable, typing.List[DialogflowCxPlaybookInstructionSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps">DialogflowCxPlaybookInstructionSteps</a>]]

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#steps DialogflowCxPlaybook#steps}

---

### DialogflowCxPlaybookInstructionSteps <a name="DialogflowCxPlaybookInstructionSteps" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_playbook

dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps(
  steps: str = None,
  text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps.property.steps">steps</a></code> | <code>str</code> | Sub-processing needed to execute the current step. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps.property.text">text</a></code> | <code>str</code> | Step instruction in text format. |

---

##### `steps`<sup>Optional</sup> <a name="steps" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps.property.steps"></a>

```python
steps: str
```

- *Type:* str

Sub-processing needed to execute the current step.

This field uses JSON data as a string. The value provided must be a valid JSON representation documented in [Step](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.playbooks#step).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#steps DialogflowCxPlaybook#steps}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps.property.text"></a>

```python
text: str
```

- *Type:* str

Step instruction in text format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#text DialogflowCxPlaybook#text}

---

### DialogflowCxPlaybookLlmModelSettings <a name="DialogflowCxPlaybookLlmModelSettings" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_playbook

dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings(
  model: str = None,
  prompt_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings.property.model">model</a></code> | <code>str</code> | The selected LLM model. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings.property.promptText">prompt_text</a></code> | <code>str</code> | The custom prompt to use. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings.property.model"></a>

```python
model: str
```

- *Type:* str

The selected LLM model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#model DialogflowCxPlaybook#model}

---

##### `prompt_text`<sup>Optional</sup> <a name="prompt_text" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings.property.promptText"></a>

```python
prompt_text: str
```

- *Type:* str

The custom prompt to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#prompt_text DialogflowCxPlaybook#prompt_text}

---

### DialogflowCxPlaybookTimeouts <a name="DialogflowCxPlaybookTimeouts" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_playbook

dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#create DialogflowCxPlaybook#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#delete DialogflowCxPlaybook#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#update DialogflowCxPlaybook#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#create DialogflowCxPlaybook#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#delete DialogflowCxPlaybook#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/dialogflow_cx_playbook#update DialogflowCxPlaybook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxPlaybookInstructionOutputReference <a name="DialogflowCxPlaybookInstructionOutputReference" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_playbook

dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.putSteps">put_steps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.resetGuidelines">reset_guidelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.resetSteps">reset_steps</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_steps` <a name="put_steps" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.putSteps"></a>

```python
def put_steps(
  value: typing.Union[IResolvable, typing.List[DialogflowCxPlaybookInstructionSteps]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.putSteps.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps">DialogflowCxPlaybookInstructionSteps</a>]]

---

##### `reset_guidelines` <a name="reset_guidelines" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.resetGuidelines"></a>

```python
def reset_guidelines() -> None
```

##### `reset_steps` <a name="reset_steps" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.resetSteps"></a>

```python
def reset_steps() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList">DialogflowCxPlaybookInstructionStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.guidelinesInput">guidelines_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.stepsInput">steps_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps">DialogflowCxPlaybookInstructionSteps</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.guidelines">guidelines</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction">DialogflowCxPlaybookInstruction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.steps"></a>

```python
steps: DialogflowCxPlaybookInstructionStepsList
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList">DialogflowCxPlaybookInstructionStepsList</a>

---

##### `guidelines_input`<sup>Optional</sup> <a name="guidelines_input" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.guidelinesInput"></a>

```python
guidelines_input: str
```

- *Type:* str

---

##### `steps_input`<sup>Optional</sup> <a name="steps_input" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.stepsInput"></a>

```python
steps_input: typing.Union[IResolvable, typing.List[DialogflowCxPlaybookInstructionSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps">DialogflowCxPlaybookInstructionSteps</a>]]

---

##### `guidelines`<sup>Required</sup> <a name="guidelines" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.guidelines"></a>

```python
guidelines: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowCxPlaybookInstruction
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction">DialogflowCxPlaybookInstruction</a>

---


### DialogflowCxPlaybookInstructionStepsList <a name="DialogflowCxPlaybookInstructionStepsList" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_playbook

dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DialogflowCxPlaybookInstructionStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps">DialogflowCxPlaybookInstructionSteps</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DialogflowCxPlaybookInstructionSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps">DialogflowCxPlaybookInstructionSteps</a>]]

---


### DialogflowCxPlaybookInstructionStepsOutputReference <a name="DialogflowCxPlaybookInstructionStepsOutputReference" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_playbook

dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.resetSteps">reset_steps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_steps` <a name="reset_steps" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.resetSteps"></a>

```python
def reset_steps() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.stepsInput">steps_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.steps">steps</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps">DialogflowCxPlaybookInstructionSteps</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `steps_input`<sup>Optional</sup> <a name="steps_input" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.stepsInput"></a>

```python
steps_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.steps"></a>

```python
steps: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DialogflowCxPlaybookInstructionSteps]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps">DialogflowCxPlaybookInstructionSteps</a>]

---


### DialogflowCxPlaybookLlmModelSettingsOutputReference <a name="DialogflowCxPlaybookLlmModelSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_playbook

dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.resetModel">reset_model</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.resetPromptText">reset_prompt_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_model` <a name="reset_model" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.resetModel"></a>

```python
def reset_model() -> None
```

##### `reset_prompt_text` <a name="reset_prompt_text" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.resetPromptText"></a>

```python
def reset_prompt_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.modelInput">model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptTextInput">prompt_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptText">prompt_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings">DialogflowCxPlaybookLlmModelSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.modelInput"></a>

```python
model_input: str
```

- *Type:* str

---

##### `prompt_text_input`<sup>Optional</sup> <a name="prompt_text_input" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptTextInput"></a>

```python
prompt_text_input: str
```

- *Type:* str

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `prompt_text`<sup>Required</sup> <a name="prompt_text" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptText"></a>

```python
prompt_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowCxPlaybookLlmModelSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings">DialogflowCxPlaybookLlmModelSettings</a>

---


### DialogflowCxPlaybookTimeoutsOutputReference <a name="DialogflowCxPlaybookTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_playbook

dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts">DialogflowCxPlaybookTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DialogflowCxPlaybookTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts">DialogflowCxPlaybookTimeouts</a>]

---



