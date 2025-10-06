# `dialogflowCxGenerator` Submodule <a name="`dialogflowCxGenerator` Submodule" id="@cdktf/provider-google.dialogflowCxGenerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxGenerator <a name="DialogflowCxGenerator" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator google_dialogflow_cx_generator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_generator

dialogflowCxGenerator.DialogflowCxGenerator(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  prompt_text: DialogflowCxGeneratorPromptText,
  id: str = None,
  language_code: str = None,
  llm_model_settings: DialogflowCxGeneratorLlmModelSettings = None,
  model_parameter: DialogflowCxGeneratorModelParameter = None,
  parent: str = None,
  placeholders: IResolvable | typing.List[DialogflowCxGeneratorPlaceholders] = None,
  timeouts: DialogflowCxGeneratorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the generator, unique within the agent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.promptText">prompt_text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText">DialogflowCxGeneratorPromptText</a></code> | prompt_text block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#id DialogflowCxGenerator#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.languageCode">language_code</a></code> | <code>str</code> | The language to create generators for the following fields: * Generator.prompt_text.text If not specified, the agent's default language is used. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.llmModelSettings">llm_model_settings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings">DialogflowCxGeneratorLlmModelSettings</a></code> | llm_model_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.modelParameter">model_parameter</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter">DialogflowCxGeneratorModelParameter</a></code> | model_parameter block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The agent to create a Generator for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.placeholders">placeholders</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>]</code> | placeholders block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts">DialogflowCxGeneratorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.displayName"></a>

- *Type:* str

The human-readable name of the generator, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#display_name DialogflowCxGenerator#display_name}

---

##### `prompt_text`<sup>Required</sup> <a name="prompt_text" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.promptText"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText">DialogflowCxGeneratorPromptText</a>

prompt_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#prompt_text DialogflowCxGenerator#prompt_text}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#id DialogflowCxGenerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `language_code`<sup>Optional</sup> <a name="language_code" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.languageCode"></a>

- *Type:* str

The language to create generators for the following fields: * Generator.prompt_text.text If not specified, the agent's default language is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#language_code DialogflowCxGenerator#language_code}

---

##### `llm_model_settings`<sup>Optional</sup> <a name="llm_model_settings" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.llmModelSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings">DialogflowCxGeneratorLlmModelSettings</a>

llm_model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#llm_model_settings DialogflowCxGenerator#llm_model_settings}

---

##### `model_parameter`<sup>Optional</sup> <a name="model_parameter" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.modelParameter"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter">DialogflowCxGeneratorModelParameter</a>

model_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#model_parameter DialogflowCxGenerator#model_parameter}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.parent"></a>

- *Type:* str

The agent to create a Generator for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#parent DialogflowCxGenerator#parent}

---

##### `placeholders`<sup>Optional</sup> <a name="placeholders" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.placeholders"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>]

placeholders block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#placeholders DialogflowCxGenerator#placeholders}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts">DialogflowCxGeneratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#timeouts DialogflowCxGenerator#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putLlmModelSettings">put_llm_model_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putModelParameter">put_model_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putPlaceholders">put_placeholders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putPromptText">put_prompt_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetLanguageCode">reset_language_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetLlmModelSettings">reset_llm_model_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetModelParameter">reset_model_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetParent">reset_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetPlaceholders">reset_placeholders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_llm_model_settings` <a name="put_llm_model_settings" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putLlmModelSettings"></a>

```python
def put_llm_model_settings(
  model: str = None,
  prompt_text: str = None
) -> None
```

###### `model`<sup>Optional</sup> <a name="model" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putLlmModelSettings.parameter.model"></a>

- *Type:* str

The selected LLM model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#model DialogflowCxGenerator#model}

---

###### `prompt_text`<sup>Optional</sup> <a name="prompt_text" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putLlmModelSettings.parameter.promptText"></a>

- *Type:* str

The custom prompt to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#prompt_text DialogflowCxGenerator#prompt_text}

---

##### `put_model_parameter` <a name="put_model_parameter" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putModelParameter"></a>

```python
def put_model_parameter(
  max_decode_steps: typing.Union[int, float] = None,
  temperature: typing.Union[int, float] = None,
  top_k: typing.Union[int, float] = None,
  top_p: typing.Union[int, float] = None
) -> None
```

###### `max_decode_steps`<sup>Optional</sup> <a name="max_decode_steps" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putModelParameter.parameter.maxDecodeSteps"></a>

- *Type:* typing.Union[int, float]

The maximum number of tokens to generate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#max_decode_steps DialogflowCxGenerator#max_decode_steps}

---

###### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putModelParameter.parameter.temperature"></a>

- *Type:* typing.Union[int, float]

The temperature used for sampling.

Temperature sampling occurs after both topP and topK have been applied.
Valid range: [0.0, 1.0] Low temperature = less random. High temperature = more random.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#temperature DialogflowCxGenerator#temperature}

---

###### `top_k`<sup>Optional</sup> <a name="top_k" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putModelParameter.parameter.topK"></a>

- *Type:* typing.Union[int, float]

If set, the sampling process in each step is limited to the topK tokens with highest probabilities.

Valid range: [1, 40] or 1000+. Small topK = less random. Large topK = more random.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#top_k DialogflowCxGenerator#top_k}

---

###### `top_p`<sup>Optional</sup> <a name="top_p" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putModelParameter.parameter.topP"></a>

- *Type:* typing.Union[int, float]

If set, only the tokens comprising the top topP probability mass are considered.

If both topP and topK are set, topP will be used for further refining candidates selected with topK.
Valid range: (0.0, 1.0]. Small topP = less random. Large topP = more random.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#top_p DialogflowCxGenerator#top_p}

---

##### `put_placeholders` <a name="put_placeholders" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putPlaceholders"></a>

```python
def put_placeholders(
  value: IResolvable | typing.List[DialogflowCxGeneratorPlaceholders]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putPlaceholders.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>]

---

##### `put_prompt_text` <a name="put_prompt_text" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putPromptText"></a>

```python
def put_prompt_text(
  text: str = None
) -> None
```

###### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putPromptText.parameter.text"></a>

- *Type:* str

Text input which can be used for prompt or banned phrases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#text DialogflowCxGenerator#text}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#create DialogflowCxGenerator#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#delete DialogflowCxGenerator#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#update DialogflowCxGenerator#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_language_code` <a name="reset_language_code" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetLanguageCode"></a>

```python
def reset_language_code() -> None
```

##### `reset_llm_model_settings` <a name="reset_llm_model_settings" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetLlmModelSettings"></a>

```python
def reset_llm_model_settings() -> None
```

##### `reset_model_parameter` <a name="reset_model_parameter" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetModelParameter"></a>

```python
def reset_model_parameter() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetParent"></a>

```python
def reset_parent() -> None
```

##### `reset_placeholders` <a name="reset_placeholders" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetPlaceholders"></a>

```python
def reset_placeholders() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DialogflowCxGenerator resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_generator

dialogflowCxGenerator.DialogflowCxGenerator.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_generator

dialogflowCxGenerator.DialogflowCxGenerator.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_generator

dialogflowCxGenerator.DialogflowCxGenerator.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_generator

dialogflowCxGenerator.DialogflowCxGenerator.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DialogflowCxGenerator resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DialogflowCxGenerator to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DialogflowCxGenerator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DialogflowCxGenerator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.llmModelSettings">llm_model_settings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference">DialogflowCxGeneratorLlmModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.modelParameter">model_parameter</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference">DialogflowCxGeneratorModelParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.placeholders">placeholders</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList">DialogflowCxGeneratorPlaceholdersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.promptText">prompt_text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference">DialogflowCxGeneratorPromptTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference">DialogflowCxGeneratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.languageCodeInput">language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.llmModelSettingsInput">llm_model_settings_input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings">DialogflowCxGeneratorLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.modelParameterInput">model_parameter_input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter">DialogflowCxGeneratorModelParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.placeholdersInput">placeholders_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.promptTextInput">prompt_text_input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText">DialogflowCxGeneratorPromptText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts">DialogflowCxGeneratorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `llm_model_settings`<sup>Required</sup> <a name="llm_model_settings" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.llmModelSettings"></a>

```python
llm_model_settings: DialogflowCxGeneratorLlmModelSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference">DialogflowCxGeneratorLlmModelSettingsOutputReference</a>

---

##### `model_parameter`<sup>Required</sup> <a name="model_parameter" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.modelParameter"></a>

```python
model_parameter: DialogflowCxGeneratorModelParameterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference">DialogflowCxGeneratorModelParameterOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `placeholders`<sup>Required</sup> <a name="placeholders" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.placeholders"></a>

```python
placeholders: DialogflowCxGeneratorPlaceholdersList
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList">DialogflowCxGeneratorPlaceholdersList</a>

---

##### `prompt_text`<sup>Required</sup> <a name="prompt_text" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.promptText"></a>

```python
prompt_text: DialogflowCxGeneratorPromptTextOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference">DialogflowCxGeneratorPromptTextOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.timeouts"></a>

```python
timeouts: DialogflowCxGeneratorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference">DialogflowCxGeneratorTimeoutsOutputReference</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `language_code_input`<sup>Optional</sup> <a name="language_code_input" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.languageCodeInput"></a>

```python
language_code_input: str
```

- *Type:* str

---

##### `llm_model_settings_input`<sup>Optional</sup> <a name="llm_model_settings_input" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.llmModelSettingsInput"></a>

```python
llm_model_settings_input: DialogflowCxGeneratorLlmModelSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings">DialogflowCxGeneratorLlmModelSettings</a>

---

##### `model_parameter_input`<sup>Optional</sup> <a name="model_parameter_input" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.modelParameterInput"></a>

```python
model_parameter_input: DialogflowCxGeneratorModelParameter
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter">DialogflowCxGeneratorModelParameter</a>

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `placeholders_input`<sup>Optional</sup> <a name="placeholders_input" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.placeholdersInput"></a>

```python
placeholders_input: IResolvable | typing.List[DialogflowCxGeneratorPlaceholders]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>]

---

##### `prompt_text_input`<sup>Optional</sup> <a name="prompt_text_input" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.promptTextInput"></a>

```python
prompt_text_input: DialogflowCxGeneratorPromptText
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText">DialogflowCxGeneratorPromptText</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DialogflowCxGeneratorTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts">DialogflowCxGeneratorTimeouts</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGenerator.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxGeneratorConfig <a name="DialogflowCxGeneratorConfig" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_generator

dialogflowCxGenerator.DialogflowCxGeneratorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  prompt_text: DialogflowCxGeneratorPromptText,
  id: str = None,
  language_code: str = None,
  llm_model_settings: DialogflowCxGeneratorLlmModelSettings = None,
  model_parameter: DialogflowCxGeneratorModelParameter = None,
  parent: str = None,
  placeholders: IResolvable | typing.List[DialogflowCxGeneratorPlaceholders] = None,
  timeouts: DialogflowCxGeneratorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the generator, unique within the agent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.promptText">prompt_text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText">DialogflowCxGeneratorPromptText</a></code> | prompt_text block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#id DialogflowCxGenerator#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.languageCode">language_code</a></code> | <code>str</code> | The language to create generators for the following fields: * Generator.prompt_text.text If not specified, the agent's default language is used. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.llmModelSettings">llm_model_settings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings">DialogflowCxGeneratorLlmModelSettings</a></code> | llm_model_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.modelParameter">model_parameter</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter">DialogflowCxGeneratorModelParameter</a></code> | model_parameter block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.parent">parent</a></code> | <code>str</code> | The agent to create a Generator for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.placeholders">placeholders</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>]</code> | placeholders block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts">DialogflowCxGeneratorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The human-readable name of the generator, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#display_name DialogflowCxGenerator#display_name}

---

##### `prompt_text`<sup>Required</sup> <a name="prompt_text" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.promptText"></a>

```python
prompt_text: DialogflowCxGeneratorPromptText
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText">DialogflowCxGeneratorPromptText</a>

prompt_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#prompt_text DialogflowCxGenerator#prompt_text}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#id DialogflowCxGenerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `language_code`<sup>Optional</sup> <a name="language_code" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

The language to create generators for the following fields: * Generator.prompt_text.text If not specified, the agent's default language is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#language_code DialogflowCxGenerator#language_code}

---

##### `llm_model_settings`<sup>Optional</sup> <a name="llm_model_settings" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.llmModelSettings"></a>

```python
llm_model_settings: DialogflowCxGeneratorLlmModelSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings">DialogflowCxGeneratorLlmModelSettings</a>

llm_model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#llm_model_settings DialogflowCxGenerator#llm_model_settings}

---

##### `model_parameter`<sup>Optional</sup> <a name="model_parameter" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.modelParameter"></a>

```python
model_parameter: DialogflowCxGeneratorModelParameter
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter">DialogflowCxGeneratorModelParameter</a>

model_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#model_parameter DialogflowCxGenerator#model_parameter}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The agent to create a Generator for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#parent DialogflowCxGenerator#parent}

---

##### `placeholders`<sup>Optional</sup> <a name="placeholders" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.placeholders"></a>

```python
placeholders: IResolvable | typing.List[DialogflowCxGeneratorPlaceholders]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>]

placeholders block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#placeholders DialogflowCxGenerator#placeholders}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorConfig.property.timeouts"></a>

```python
timeouts: DialogflowCxGeneratorTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts">DialogflowCxGeneratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#timeouts DialogflowCxGenerator#timeouts}

---

### DialogflowCxGeneratorLlmModelSettings <a name="DialogflowCxGeneratorLlmModelSettings" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_generator

dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings(
  model: str = None,
  prompt_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings.property.model">model</a></code> | <code>str</code> | The selected LLM model. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings.property.promptText">prompt_text</a></code> | <code>str</code> | The custom prompt to use. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings.property.model"></a>

```python
model: str
```

- *Type:* str

The selected LLM model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#model DialogflowCxGenerator#model}

---

##### `prompt_text`<sup>Optional</sup> <a name="prompt_text" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings.property.promptText"></a>

```python
prompt_text: str
```

- *Type:* str

The custom prompt to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#prompt_text DialogflowCxGenerator#prompt_text}

---

### DialogflowCxGeneratorModelParameter <a name="DialogflowCxGeneratorModelParameter" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_generator

dialogflowCxGenerator.DialogflowCxGeneratorModelParameter(
  max_decode_steps: typing.Union[int, float] = None,
  temperature: typing.Union[int, float] = None,
  top_k: typing.Union[int, float] = None,
  top_p: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.property.maxDecodeSteps">max_decode_steps</a></code> | <code>typing.Union[int, float]</code> | The maximum number of tokens to generate. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | The temperature used for sampling. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.property.topK">top_k</a></code> | <code>typing.Union[int, float]</code> | If set, the sampling process in each step is limited to the topK tokens with highest probabilities. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.property.topP">top_p</a></code> | <code>typing.Union[int, float]</code> | If set, only the tokens comprising the top topP probability mass are considered. |

---

##### `max_decode_steps`<sup>Optional</sup> <a name="max_decode_steps" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.property.maxDecodeSteps"></a>

```python
max_decode_steps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of tokens to generate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#max_decode_steps DialogflowCxGenerator#max_decode_steps}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The temperature used for sampling.

Temperature sampling occurs after both topP and topK have been applied.
Valid range: [0.0, 1.0] Low temperature = less random. High temperature = more random.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#temperature DialogflowCxGenerator#temperature}

---

##### `top_k`<sup>Optional</sup> <a name="top_k" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.property.topK"></a>

```python
top_k: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If set, the sampling process in each step is limited to the topK tokens with highest probabilities.

Valid range: [1, 40] or 1000+. Small topK = less random. Large topK = more random.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#top_k DialogflowCxGenerator#top_k}

---

##### `top_p`<sup>Optional</sup> <a name="top_p" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter.property.topP"></a>

```python
top_p: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If set, only the tokens comprising the top topP probability mass are considered.

If both topP and topK are set, topP will be used for further refining candidates selected with topK.
Valid range: (0.0, 1.0]. Small topP = less random. Large topP = more random.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#top_p DialogflowCxGenerator#top_p}

---

### DialogflowCxGeneratorPlaceholders <a name="DialogflowCxGeneratorPlaceholders" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_generator

dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders(
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders.property.id">id</a></code> | <code>str</code> | Unique ID used to map custom placeholder to parameters in fulfillment. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders.property.name">name</a></code> | <code>str</code> | Custom placeholder value in the prompt text. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders.property.id"></a>

```python
id: str
```

- *Type:* str

Unique ID used to map custom placeholder to parameters in fulfillment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#id DialogflowCxGenerator#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders.property.name"></a>

```python
name: str
```

- *Type:* str

Custom placeholder value in the prompt text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#name DialogflowCxGenerator#name}

---

### DialogflowCxGeneratorPromptText <a name="DialogflowCxGeneratorPromptText" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_generator

dialogflowCxGenerator.DialogflowCxGeneratorPromptText(
  text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText.property.text">text</a></code> | <code>str</code> | Text input which can be used for prompt or banned phrases. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText.property.text"></a>

```python
text: str
```

- *Type:* str

Text input which can be used for prompt or banned phrases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#text DialogflowCxGenerator#text}

---

### DialogflowCxGeneratorTimeouts <a name="DialogflowCxGeneratorTimeouts" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_generator

dialogflowCxGenerator.DialogflowCxGeneratorTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#create DialogflowCxGenerator#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#delete DialogflowCxGenerator#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#update DialogflowCxGenerator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#create DialogflowCxGenerator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#delete DialogflowCxGenerator#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dialogflow_cx_generator#update DialogflowCxGenerator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxGeneratorLlmModelSettingsOutputReference <a name="DialogflowCxGeneratorLlmModelSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_generator

dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.resetModel">reset_model</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.resetPromptText">reset_prompt_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_model` <a name="reset_model" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.resetModel"></a>

```python
def reset_model() -> None
```

##### `reset_prompt_text` <a name="reset_prompt_text" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.resetPromptText"></a>

```python
def reset_prompt_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.modelInput">model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.promptTextInput">prompt_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.promptText">prompt_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings">DialogflowCxGeneratorLlmModelSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.modelInput"></a>

```python
model_input: str
```

- *Type:* str

---

##### `prompt_text_input`<sup>Optional</sup> <a name="prompt_text_input" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.promptTextInput"></a>

```python
prompt_text_input: str
```

- *Type:* str

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `prompt_text`<sup>Required</sup> <a name="prompt_text" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.promptText"></a>

```python
prompt_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowCxGeneratorLlmModelSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorLlmModelSettings">DialogflowCxGeneratorLlmModelSettings</a>

---


### DialogflowCxGeneratorModelParameterOutputReference <a name="DialogflowCxGeneratorModelParameterOutputReference" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_generator

dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resetMaxDecodeSteps">reset_max_decode_steps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resetTemperature">reset_temperature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resetTopK">reset_top_k</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resetTopP">reset_top_p</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_decode_steps` <a name="reset_max_decode_steps" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resetMaxDecodeSteps"></a>

```python
def reset_max_decode_steps() -> None
```

##### `reset_temperature` <a name="reset_temperature" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resetTemperature"></a>

```python
def reset_temperature() -> None
```

##### `reset_top_k` <a name="reset_top_k" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resetTopK"></a>

```python
def reset_top_k() -> None
```

##### `reset_top_p` <a name="reset_top_p" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.resetTopP"></a>

```python
def reset_top_p() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.maxDecodeStepsInput">max_decode_steps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.temperatureInput">temperature_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.topKInput">top_k_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.topPInput">top_p_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.maxDecodeSteps">max_decode_steps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.topK">top_k</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.topP">top_p</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter">DialogflowCxGeneratorModelParameter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_decode_steps_input`<sup>Optional</sup> <a name="max_decode_steps_input" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.maxDecodeStepsInput"></a>

```python
max_decode_steps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `temperature_input`<sup>Optional</sup> <a name="temperature_input" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.temperatureInput"></a>

```python
temperature_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_k_input`<sup>Optional</sup> <a name="top_k_input" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.topKInput"></a>

```python
top_k_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_p_input`<sup>Optional</sup> <a name="top_p_input" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.topPInput"></a>

```python
top_p_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_decode_steps`<sup>Required</sup> <a name="max_decode_steps" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.maxDecodeSteps"></a>

```python
max_decode_steps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_k`<sup>Required</sup> <a name="top_k" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.topK"></a>

```python
top_k: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `top_p`<sup>Required</sup> <a name="top_p" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.topP"></a>

```python
top_p: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameterOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowCxGeneratorModelParameter
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorModelParameter">DialogflowCxGeneratorModelParameter</a>

---


### DialogflowCxGeneratorPlaceholdersList <a name="DialogflowCxGeneratorPlaceholdersList" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_generator

dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DialogflowCxGeneratorPlaceholdersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DialogflowCxGeneratorPlaceholders]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>]

---


### DialogflowCxGeneratorPlaceholdersOutputReference <a name="DialogflowCxGeneratorPlaceholdersOutputReference" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_generator

dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholdersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DialogflowCxGeneratorPlaceholders
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPlaceholders">DialogflowCxGeneratorPlaceholders</a>

---


### DialogflowCxGeneratorPromptTextOutputReference <a name="DialogflowCxGeneratorPromptTextOutputReference" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_generator

dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_text` <a name="reset_text" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText">DialogflowCxGeneratorPromptText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptTextOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowCxGeneratorPromptText
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorPromptText">DialogflowCxGeneratorPromptText</a>

---


### DialogflowCxGeneratorTimeoutsOutputReference <a name="DialogflowCxGeneratorTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_generator

dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts">DialogflowCxGeneratorTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DialogflowCxGeneratorTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxGenerator.DialogflowCxGeneratorTimeouts">DialogflowCxGeneratorTimeouts</a>

---



