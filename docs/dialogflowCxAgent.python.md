# `dialogflowCxAgent` Submodule <a name="`dialogflowCxAgent` Submodule" id="@cdktf/provider-google.dialogflowCxAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxAgent <a name="DialogflowCxAgent" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent google_dialogflow_cx_agent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_agent

dialogflowCxAgent.DialogflowCxAgent(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_language_code: str,
  display_name: str,
  location: str,
  time_zone: str,
  advanced_settings: DialogflowCxAgentAdvancedSettings = None,
  avatar_uri: str = None,
  description: str = None,
  enable_spell_correction: typing.Union[bool, IResolvable] = None,
  enable_stackdriver_logging: typing.Union[bool, IResolvable] = None,
  git_integration_settings: DialogflowCxAgentGitIntegrationSettings = None,
  id: str = None,
  project: str = None,
  security_settings: str = None,
  speech_to_text_settings: DialogflowCxAgentSpeechToTextSettings = None,
  supported_language_codes: typing.List[str] = None,
  text_to_speech_settings: DialogflowCxAgentTextToSpeechSettings = None,
  timeouts: DialogflowCxAgentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.defaultLanguageCode">default_language_code</a></code> | <code>str</code> | The default language of the agent as a language tag. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the agent, unique within the location. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.location">location</a></code> | <code>str</code> | The name of the location this agent is located in. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.advancedSettings">advanced_settings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings">DialogflowCxAgentAdvancedSettings</a></code> | advanced_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.avatarUri">avatar_uri</a></code> | <code>str</code> | The URI of the agent's avatar. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.enableSpellCorrection">enable_spell_correction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if automatic spell correction is enabled in detect intent requests. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.enableStackdriverLogging">enable_stackdriver_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether this agent should log conversation queries. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.gitIntegrationSettings">git_integration_settings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings">DialogflowCxAgentGitIntegrationSettings</a></code> | git_integration_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#id DialogflowCxAgent#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#project DialogflowCxAgent#project}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.securitySettings">security_settings</a></code> | <code>str</code> | Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.speechToTextSettings">speech_to_text_settings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings">DialogflowCxAgentSpeechToTextSettings</a></code> | speech_to_text_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.supportedLanguageCodes">supported_language_codes</a></code> | <code>typing.List[str]</code> | The list of all languages supported by this agent (except for the default_language_code). |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.textToSpeechSettings">text_to_speech_settings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings">DialogflowCxAgentTextToSpeechSettings</a></code> | text_to_speech_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts">DialogflowCxAgentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_language_code`<sup>Required</sup> <a name="default_language_code" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.defaultLanguageCode"></a>

- *Type:* str

The default language of the agent as a language tag.

[See Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language)
for a list of the currently supported language codes. This field cannot be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#default_language_code DialogflowCxAgent#default_language_code}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.displayName"></a>

- *Type:* str

The human-readable name of the agent, unique within the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#display_name DialogflowCxAgent#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.location"></a>

- *Type:* str

The name of the location this agent is located in.

~> **Note:** The first time you are deploying an Agent in your project you must configure location settings.
This is a one time step but at the moment you can only [configure location settings](https://cloud.google.com/dialogflow/cx/docs/concept/region#location-settings) via the Dialogflow CX console.
Another options is to use global location so you don't need to manually configure location settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#location DialogflowCxAgent#location}

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.timeZone"></a>

- *Type:* str

The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#time_zone DialogflowCxAgent#time_zone}

---

##### `advanced_settings`<sup>Optional</sup> <a name="advanced_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.advancedSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings">DialogflowCxAgentAdvancedSettings</a>

advanced_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#advanced_settings DialogflowCxAgent#advanced_settings}

---

##### `avatar_uri`<sup>Optional</sup> <a name="avatar_uri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.avatarUri"></a>

- *Type:* str

The URI of the agent's avatar.

Avatars are used throughout the Dialogflow console and in the self-hosted Web Demo integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#avatar_uri DialogflowCxAgent#avatar_uri}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.description"></a>

- *Type:* str

The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#description DialogflowCxAgent#description}

---

##### `enable_spell_correction`<sup>Optional</sup> <a name="enable_spell_correction" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.enableSpellCorrection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if automatic spell correction is enabled in detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#enable_spell_correction DialogflowCxAgent#enable_spell_correction}

---

##### `enable_stackdriver_logging`<sup>Optional</sup> <a name="enable_stackdriver_logging" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.enableStackdriverLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether this agent should log conversation queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#enable_stackdriver_logging DialogflowCxAgent#enable_stackdriver_logging}

---

##### `git_integration_settings`<sup>Optional</sup> <a name="git_integration_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.gitIntegrationSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings">DialogflowCxAgentGitIntegrationSettings</a>

git_integration_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#git_integration_settings DialogflowCxAgent#git_integration_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#id DialogflowCxAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#project DialogflowCxAgent#project}.

---

##### `security_settings`<sup>Optional</sup> <a name="security_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.securitySettings"></a>

- *Type:* str

Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#security_settings DialogflowCxAgent#security_settings}

---

##### `speech_to_text_settings`<sup>Optional</sup> <a name="speech_to_text_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.speechToTextSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings">DialogflowCxAgentSpeechToTextSettings</a>

speech_to_text_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#speech_to_text_settings DialogflowCxAgent#speech_to_text_settings}

---

##### `supported_language_codes`<sup>Optional</sup> <a name="supported_language_codes" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.supportedLanguageCodes"></a>

- *Type:* typing.List[str]

The list of all languages supported by this agent (except for the default_language_code).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#supported_language_codes DialogflowCxAgent#supported_language_codes}

---

##### `text_to_speech_settings`<sup>Optional</sup> <a name="text_to_speech_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.textToSpeechSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings">DialogflowCxAgentTextToSpeechSettings</a>

text_to_speech_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#text_to_speech_settings DialogflowCxAgent#text_to_speech_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts">DialogflowCxAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#timeouts DialogflowCxAgent#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putAdvancedSettings">put_advanced_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putGitIntegrationSettings">put_git_integration_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putSpeechToTextSettings">put_speech_to_text_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putTextToSpeechSettings">put_text_to_speech_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetAdvancedSettings">reset_advanced_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetAvatarUri">reset_avatar_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetEnableSpellCorrection">reset_enable_spell_correction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetEnableStackdriverLogging">reset_enable_stackdriver_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetGitIntegrationSettings">reset_git_integration_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetSecuritySettings">reset_security_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetSpeechToTextSettings">reset_speech_to_text_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetSupportedLanguageCodes">reset_supported_language_codes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetTextToSpeechSettings">reset_text_to_speech_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_advanced_settings` <a name="put_advanced_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putAdvancedSettings"></a>

```python
def put_advanced_settings(
  audio_export_gcs_destination: DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination = None,
  dtmf_settings: DialogflowCxAgentAdvancedSettingsDtmfSettings = None
) -> None
```

###### `audio_export_gcs_destination`<sup>Optional</sup> <a name="audio_export_gcs_destination" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putAdvancedSettings.parameter.audioExportGcsDestination"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a>

audio_export_gcs_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#audio_export_gcs_destination DialogflowCxAgent#audio_export_gcs_destination}

---

###### `dtmf_settings`<sup>Optional</sup> <a name="dtmf_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putAdvancedSettings.parameter.dtmfSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings">DialogflowCxAgentAdvancedSettingsDtmfSettings</a>

dtmf_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#dtmf_settings DialogflowCxAgent#dtmf_settings}

---

##### `put_git_integration_settings` <a name="put_git_integration_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putGitIntegrationSettings"></a>

```python
def put_git_integration_settings(
  github_settings: DialogflowCxAgentGitIntegrationSettingsGithubSettings = None
) -> None
```

###### `github_settings`<sup>Optional</sup> <a name="github_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putGitIntegrationSettings.parameter.githubSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings">DialogflowCxAgentGitIntegrationSettingsGithubSettings</a>

github_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#github_settings DialogflowCxAgent#github_settings}

---

##### `put_speech_to_text_settings` <a name="put_speech_to_text_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putSpeechToTextSettings"></a>

```python
def put_speech_to_text_settings(
  enable_speech_adaptation: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_speech_adaptation`<sup>Optional</sup> <a name="enable_speech_adaptation" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putSpeechToTextSettings.parameter.enableSpeechAdaptation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to use speech adaptation for speech recognition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#enable_speech_adaptation DialogflowCxAgent#enable_speech_adaptation}

---

##### `put_text_to_speech_settings` <a name="put_text_to_speech_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putTextToSpeechSettings"></a>

```python
def put_text_to_speech_settings(
  synthesize_speech_configs: str = None
) -> None
```

###### `synthesize_speech_configs`<sup>Optional</sup> <a name="synthesize_speech_configs" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putTextToSpeechSettings.parameter.synthesizeSpeechConfigs"></a>

- *Type:* str

Configuration of how speech should be synthesized, mapping from [language](https://cloud.google.com/dialogflow/cx/docs/reference/language) to [SynthesizeSpeechConfig](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents#synthesizespeechconfig). These settings affect: * The phone gateway synthesize configuration set via Agent.text_to_speech_settings. * How speech is synthesized when invoking session APIs. 'Agent.text_to_speech_settings' only applies if 'OutputAudioConfig.synthesize_speech_config' is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#synthesize_speech_configs DialogflowCxAgent#synthesize_speech_configs}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#create DialogflowCxAgent#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#delete DialogflowCxAgent#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#update DialogflowCxAgent#update}.

---

##### `reset_advanced_settings` <a name="reset_advanced_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetAdvancedSettings"></a>

```python
def reset_advanced_settings() -> None
```

##### `reset_avatar_uri` <a name="reset_avatar_uri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetAvatarUri"></a>

```python
def reset_avatar_uri() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_spell_correction` <a name="reset_enable_spell_correction" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetEnableSpellCorrection"></a>

```python
def reset_enable_spell_correction() -> None
```

##### `reset_enable_stackdriver_logging` <a name="reset_enable_stackdriver_logging" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetEnableStackdriverLogging"></a>

```python
def reset_enable_stackdriver_logging() -> None
```

##### `reset_git_integration_settings` <a name="reset_git_integration_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetGitIntegrationSettings"></a>

```python
def reset_git_integration_settings() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_security_settings` <a name="reset_security_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetSecuritySettings"></a>

```python
def reset_security_settings() -> None
```

##### `reset_speech_to_text_settings` <a name="reset_speech_to_text_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetSpeechToTextSettings"></a>

```python
def reset_speech_to_text_settings() -> None
```

##### `reset_supported_language_codes` <a name="reset_supported_language_codes" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetSupportedLanguageCodes"></a>

```python
def reset_supported_language_codes() -> None
```

##### `reset_text_to_speech_settings` <a name="reset_text_to_speech_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetTextToSpeechSettings"></a>

```python
def reset_text_to_speech_settings() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DialogflowCxAgent resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_agent

dialogflowCxAgent.DialogflowCxAgent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_agent

dialogflowCxAgent.DialogflowCxAgent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_agent

dialogflowCxAgent.DialogflowCxAgent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_agent

dialogflowCxAgent.DialogflowCxAgent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DialogflowCxAgent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DialogflowCxAgent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DialogflowCxAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DialogflowCxAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.advancedSettings">advanced_settings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference">DialogflowCxAgentAdvancedSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.gitIntegrationSettings">git_integration_settings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference">DialogflowCxAgentGitIntegrationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.speechToTextSettings">speech_to_text_settings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference">DialogflowCxAgentSpeechToTextSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.startFlow">start_flow</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.textToSpeechSettings">text_to_speech_settings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference">DialogflowCxAgentTextToSpeechSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference">DialogflowCxAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.advancedSettingsInput">advanced_settings_input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings">DialogflowCxAgentAdvancedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.avatarUriInput">avatar_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.defaultLanguageCodeInput">default_language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.enableSpellCorrectionInput">enable_spell_correction_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.enableStackdriverLoggingInput">enable_stackdriver_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.gitIntegrationSettingsInput">git_integration_settings_input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings">DialogflowCxAgentGitIntegrationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.securitySettingsInput">security_settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.speechToTextSettingsInput">speech_to_text_settings_input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings">DialogflowCxAgentSpeechToTextSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.supportedLanguageCodesInput">supported_language_codes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.textToSpeechSettingsInput">text_to_speech_settings_input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings">DialogflowCxAgentTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts">DialogflowCxAgentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.avatarUri">avatar_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.defaultLanguageCode">default_language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.enableSpellCorrection">enable_spell_correction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.enableStackdriverLogging">enable_stackdriver_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.securitySettings">security_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.supportedLanguageCodes">supported_language_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `advanced_settings`<sup>Required</sup> <a name="advanced_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.advancedSettings"></a>

```python
advanced_settings: DialogflowCxAgentAdvancedSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference">DialogflowCxAgentAdvancedSettingsOutputReference</a>

---

##### `git_integration_settings`<sup>Required</sup> <a name="git_integration_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.gitIntegrationSettings"></a>

```python
git_integration_settings: DialogflowCxAgentGitIntegrationSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference">DialogflowCxAgentGitIntegrationSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `speech_to_text_settings`<sup>Required</sup> <a name="speech_to_text_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.speechToTextSettings"></a>

```python
speech_to_text_settings: DialogflowCxAgentSpeechToTextSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference">DialogflowCxAgentSpeechToTextSettingsOutputReference</a>

---

##### `start_flow`<sup>Required</sup> <a name="start_flow" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.startFlow"></a>

```python
start_flow: str
```

- *Type:* str

---

##### `text_to_speech_settings`<sup>Required</sup> <a name="text_to_speech_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.textToSpeechSettings"></a>

```python
text_to_speech_settings: DialogflowCxAgentTextToSpeechSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference">DialogflowCxAgentTextToSpeechSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.timeouts"></a>

```python
timeouts: DialogflowCxAgentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference">DialogflowCxAgentTimeoutsOutputReference</a>

---

##### `advanced_settings_input`<sup>Optional</sup> <a name="advanced_settings_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.advancedSettingsInput"></a>

```python
advanced_settings_input: DialogflowCxAgentAdvancedSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings">DialogflowCxAgentAdvancedSettings</a>

---

##### `avatar_uri_input`<sup>Optional</sup> <a name="avatar_uri_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.avatarUriInput"></a>

```python
avatar_uri_input: str
```

- *Type:* str

---

##### `default_language_code_input`<sup>Optional</sup> <a name="default_language_code_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.defaultLanguageCodeInput"></a>

```python
default_language_code_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enable_spell_correction_input`<sup>Optional</sup> <a name="enable_spell_correction_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.enableSpellCorrectionInput"></a>

```python
enable_spell_correction_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_stackdriver_logging_input`<sup>Optional</sup> <a name="enable_stackdriver_logging_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.enableStackdriverLoggingInput"></a>

```python
enable_stackdriver_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `git_integration_settings_input`<sup>Optional</sup> <a name="git_integration_settings_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.gitIntegrationSettingsInput"></a>

```python
git_integration_settings_input: DialogflowCxAgentGitIntegrationSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings">DialogflowCxAgentGitIntegrationSettings</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `security_settings_input`<sup>Optional</sup> <a name="security_settings_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.securitySettingsInput"></a>

```python
security_settings_input: str
```

- *Type:* str

---

##### `speech_to_text_settings_input`<sup>Optional</sup> <a name="speech_to_text_settings_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.speechToTextSettingsInput"></a>

```python
speech_to_text_settings_input: DialogflowCxAgentSpeechToTextSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings">DialogflowCxAgentSpeechToTextSettings</a>

---

##### `supported_language_codes_input`<sup>Optional</sup> <a name="supported_language_codes_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.supportedLanguageCodesInput"></a>

```python
supported_language_codes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `text_to_speech_settings_input`<sup>Optional</sup> <a name="text_to_speech_settings_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.textToSpeechSettingsInput"></a>

```python
text_to_speech_settings_input: DialogflowCxAgentTextToSpeechSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings">DialogflowCxAgentTextToSpeechSettings</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DialogflowCxAgentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts">DialogflowCxAgentTimeouts</a>]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `avatar_uri`<sup>Required</sup> <a name="avatar_uri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.avatarUri"></a>

```python
avatar_uri: str
```

- *Type:* str

---

##### `default_language_code`<sup>Required</sup> <a name="default_language_code" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.defaultLanguageCode"></a>

```python
default_language_code: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enable_spell_correction`<sup>Required</sup> <a name="enable_spell_correction" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.enableSpellCorrection"></a>

```python
enable_spell_correction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_stackdriver_logging`<sup>Required</sup> <a name="enable_stackdriver_logging" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.enableStackdriverLogging"></a>

```python
enable_stackdriver_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `security_settings`<sup>Required</sup> <a name="security_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.securitySettings"></a>

```python
security_settings: str
```

- *Type:* str

---

##### `supported_language_codes`<sup>Required</sup> <a name="supported_language_codes" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.supportedLanguageCodes"></a>

```python
supported_language_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxAgentAdvancedSettings <a name="DialogflowCxAgentAdvancedSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_agent

dialogflowCxAgent.DialogflowCxAgentAdvancedSettings(
  audio_export_gcs_destination: DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination = None,
  dtmf_settings: DialogflowCxAgentAdvancedSettingsDtmfSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings.property.audioExportGcsDestination">audio_export_gcs_destination</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a></code> | audio_export_gcs_destination block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings.property.dtmfSettings">dtmf_settings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings">DialogflowCxAgentAdvancedSettingsDtmfSettings</a></code> | dtmf_settings block. |

---

##### `audio_export_gcs_destination`<sup>Optional</sup> <a name="audio_export_gcs_destination" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings.property.audioExportGcsDestination"></a>

```python
audio_export_gcs_destination: DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a>

audio_export_gcs_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#audio_export_gcs_destination DialogflowCxAgent#audio_export_gcs_destination}

---

##### `dtmf_settings`<sup>Optional</sup> <a name="dtmf_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings.property.dtmfSettings"></a>

```python
dtmf_settings: DialogflowCxAgentAdvancedSettingsDtmfSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings">DialogflowCxAgentAdvancedSettingsDtmfSettings</a>

dtmf_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#dtmf_settings DialogflowCxAgent#dtmf_settings}

---

### DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination <a name="DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_agent

dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination(
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination.property.uri">uri</a></code> | <code>str</code> | The Google Cloud Storage URI for the exported objects. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination.property.uri"></a>

```python
uri: str
```

- *Type:* str

The Google Cloud Storage URI for the exported objects.

Whether a full object name, or just a prefix, its usage depends on the Dialogflow operation.
Format: gs://bucket/object-name-or-prefix

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#uri DialogflowCxAgent#uri}

---

### DialogflowCxAgentAdvancedSettingsDtmfSettings <a name="DialogflowCxAgentAdvancedSettingsDtmfSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_agent

dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings(
  enabled: typing.Union[bool, IResolvable] = None,
  finish_digit: str = None,
  max_digits: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, incoming audio is processed for DTMF (dual tone multi frequency) events. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings.property.finishDigit">finish_digit</a></code> | <code>str</code> | The digit that terminates a DTMF digit sequence. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings.property.maxDigits">max_digits</a></code> | <code>typing.Union[int, float]</code> | Max length of DTMF digits. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, incoming audio is processed for DTMF (dual tone multi frequency) events.

For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#enabled DialogflowCxAgent#enabled}

---

##### `finish_digit`<sup>Optional</sup> <a name="finish_digit" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings.property.finishDigit"></a>

```python
finish_digit: str
```

- *Type:* str

The digit that terminates a DTMF digit sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#finish_digit DialogflowCxAgent#finish_digit}

---

##### `max_digits`<sup>Optional</sup> <a name="max_digits" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings.property.maxDigits"></a>

```python
max_digits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max length of DTMF digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#max_digits DialogflowCxAgent#max_digits}

---

### DialogflowCxAgentConfig <a name="DialogflowCxAgentConfig" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_agent

dialogflowCxAgent.DialogflowCxAgentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_language_code: str,
  display_name: str,
  location: str,
  time_zone: str,
  advanced_settings: DialogflowCxAgentAdvancedSettings = None,
  avatar_uri: str = None,
  description: str = None,
  enable_spell_correction: typing.Union[bool, IResolvable] = None,
  enable_stackdriver_logging: typing.Union[bool, IResolvable] = None,
  git_integration_settings: DialogflowCxAgentGitIntegrationSettings = None,
  id: str = None,
  project: str = None,
  security_settings: str = None,
  speech_to_text_settings: DialogflowCxAgentSpeechToTextSettings = None,
  supported_language_codes: typing.List[str] = None,
  text_to_speech_settings: DialogflowCxAgentTextToSpeechSettings = None,
  timeouts: DialogflowCxAgentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.defaultLanguageCode">default_language_code</a></code> | <code>str</code> | The default language of the agent as a language tag. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the agent, unique within the location. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.location">location</a></code> | <code>str</code> | The name of the location this agent is located in. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.timeZone">time_zone</a></code> | <code>str</code> | The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.advancedSettings">advanced_settings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings">DialogflowCxAgentAdvancedSettings</a></code> | advanced_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.avatarUri">avatar_uri</a></code> | <code>str</code> | The URI of the agent's avatar. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.description">description</a></code> | <code>str</code> | The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.enableSpellCorrection">enable_spell_correction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if automatic spell correction is enabled in detect intent requests. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.enableStackdriverLogging">enable_stackdriver_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether this agent should log conversation queries. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.gitIntegrationSettings">git_integration_settings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings">DialogflowCxAgentGitIntegrationSettings</a></code> | git_integration_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#id DialogflowCxAgent#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#project DialogflowCxAgent#project}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.securitySettings">security_settings</a></code> | <code>str</code> | Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.speechToTextSettings">speech_to_text_settings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings">DialogflowCxAgentSpeechToTextSettings</a></code> | speech_to_text_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.supportedLanguageCodes">supported_language_codes</a></code> | <code>typing.List[str]</code> | The list of all languages supported by this agent (except for the default_language_code). |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.textToSpeechSettings">text_to_speech_settings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings">DialogflowCxAgentTextToSpeechSettings</a></code> | text_to_speech_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts">DialogflowCxAgentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_language_code`<sup>Required</sup> <a name="default_language_code" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.defaultLanguageCode"></a>

```python
default_language_code: str
```

- *Type:* str

The default language of the agent as a language tag.

[See Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language)
for a list of the currently supported language codes. This field cannot be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#default_language_code DialogflowCxAgent#default_language_code}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The human-readable name of the agent, unique within the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#display_name DialogflowCxAgent#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The name of the location this agent is located in.

~> **Note:** The first time you are deploying an Agent in your project you must configure location settings.
This is a one time step but at the moment you can only [configure location settings](https://cloud.google.com/dialogflow/cx/docs/concept/region#location-settings) via the Dialogflow CX console.
Another options is to use global location so you don't need to manually configure location settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#location DialogflowCxAgent#location}

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#time_zone DialogflowCxAgent#time_zone}

---

##### `advanced_settings`<sup>Optional</sup> <a name="advanced_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.advancedSettings"></a>

```python
advanced_settings: DialogflowCxAgentAdvancedSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings">DialogflowCxAgentAdvancedSettings</a>

advanced_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#advanced_settings DialogflowCxAgent#advanced_settings}

---

##### `avatar_uri`<sup>Optional</sup> <a name="avatar_uri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.avatarUri"></a>

```python
avatar_uri: str
```

- *Type:* str

The URI of the agent's avatar.

Avatars are used throughout the Dialogflow console and in the self-hosted Web Demo integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#avatar_uri DialogflowCxAgent#avatar_uri}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#description DialogflowCxAgent#description}

---

##### `enable_spell_correction`<sup>Optional</sup> <a name="enable_spell_correction" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.enableSpellCorrection"></a>

```python
enable_spell_correction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if automatic spell correction is enabled in detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#enable_spell_correction DialogflowCxAgent#enable_spell_correction}

---

##### `enable_stackdriver_logging`<sup>Optional</sup> <a name="enable_stackdriver_logging" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.enableStackdriverLogging"></a>

```python
enable_stackdriver_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether this agent should log conversation queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#enable_stackdriver_logging DialogflowCxAgent#enable_stackdriver_logging}

---

##### `git_integration_settings`<sup>Optional</sup> <a name="git_integration_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.gitIntegrationSettings"></a>

```python
git_integration_settings: DialogflowCxAgentGitIntegrationSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings">DialogflowCxAgentGitIntegrationSettings</a>

git_integration_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#git_integration_settings DialogflowCxAgent#git_integration_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#id DialogflowCxAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#project DialogflowCxAgent#project}.

---

##### `security_settings`<sup>Optional</sup> <a name="security_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.securitySettings"></a>

```python
security_settings: str
```

- *Type:* str

Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#security_settings DialogflowCxAgent#security_settings}

---

##### `speech_to_text_settings`<sup>Optional</sup> <a name="speech_to_text_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.speechToTextSettings"></a>

```python
speech_to_text_settings: DialogflowCxAgentSpeechToTextSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings">DialogflowCxAgentSpeechToTextSettings</a>

speech_to_text_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#speech_to_text_settings DialogflowCxAgent#speech_to_text_settings}

---

##### `supported_language_codes`<sup>Optional</sup> <a name="supported_language_codes" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.supportedLanguageCodes"></a>

```python
supported_language_codes: typing.List[str]
```

- *Type:* typing.List[str]

The list of all languages supported by this agent (except for the default_language_code).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#supported_language_codes DialogflowCxAgent#supported_language_codes}

---

##### `text_to_speech_settings`<sup>Optional</sup> <a name="text_to_speech_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.textToSpeechSettings"></a>

```python
text_to_speech_settings: DialogflowCxAgentTextToSpeechSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings">DialogflowCxAgentTextToSpeechSettings</a>

text_to_speech_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#text_to_speech_settings DialogflowCxAgent#text_to_speech_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.timeouts"></a>

```python
timeouts: DialogflowCxAgentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts">DialogflowCxAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#timeouts DialogflowCxAgent#timeouts}

---

### DialogflowCxAgentGitIntegrationSettings <a name="DialogflowCxAgentGitIntegrationSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_agent

dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings(
  github_settings: DialogflowCxAgentGitIntegrationSettingsGithubSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings.property.githubSettings">github_settings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings">DialogflowCxAgentGitIntegrationSettingsGithubSettings</a></code> | github_settings block. |

---

##### `github_settings`<sup>Optional</sup> <a name="github_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings.property.githubSettings"></a>

```python
github_settings: DialogflowCxAgentGitIntegrationSettingsGithubSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings">DialogflowCxAgentGitIntegrationSettingsGithubSettings</a>

github_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#github_settings DialogflowCxAgent#github_settings}

---

### DialogflowCxAgentGitIntegrationSettingsGithubSettings <a name="DialogflowCxAgentGitIntegrationSettingsGithubSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_agent

dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings(
  access_token: str = None,
  branches: typing.List[str] = None,
  display_name: str = None,
  repository_uri: str = None,
  tracking_branch: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.accessToken">access_token</a></code> | <code>str</code> | The access token used to authenticate the access to the GitHub repository. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.branches">branches</a></code> | <code>typing.List[str]</code> | A list of branches configured to be used from Dialogflow. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.displayName">display_name</a></code> | <code>str</code> | The unique repository display name for the GitHub repository. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.repositoryUri">repository_uri</a></code> | <code>str</code> | The GitHub repository URI related to the agent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.trackingBranch">tracking_branch</a></code> | <code>str</code> | The branch of the GitHub repository tracked for this agent. |

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

The access token used to authenticate the access to the GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#access_token DialogflowCxAgent#access_token}

---

##### `branches`<sup>Optional</sup> <a name="branches" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.branches"></a>

```python
branches: typing.List[str]
```

- *Type:* typing.List[str]

A list of branches configured to be used from Dialogflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#branches DialogflowCxAgent#branches}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The unique repository display name for the GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#display_name DialogflowCxAgent#display_name}

---

##### `repository_uri`<sup>Optional</sup> <a name="repository_uri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.repositoryUri"></a>

```python
repository_uri: str
```

- *Type:* str

The GitHub repository URI related to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#repository_uri DialogflowCxAgent#repository_uri}

---

##### `tracking_branch`<sup>Optional</sup> <a name="tracking_branch" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.trackingBranch"></a>

```python
tracking_branch: str
```

- *Type:* str

The branch of the GitHub repository tracked for this agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#tracking_branch DialogflowCxAgent#tracking_branch}

---

### DialogflowCxAgentSpeechToTextSettings <a name="DialogflowCxAgentSpeechToTextSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_agent

dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings(
  enable_speech_adaptation: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings.property.enableSpeechAdaptation">enable_speech_adaptation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to use speech adaptation for speech recognition. |

---

##### `enable_speech_adaptation`<sup>Optional</sup> <a name="enable_speech_adaptation" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings.property.enableSpeechAdaptation"></a>

```python
enable_speech_adaptation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to use speech adaptation for speech recognition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#enable_speech_adaptation DialogflowCxAgent#enable_speech_adaptation}

---

### DialogflowCxAgentTextToSpeechSettings <a name="DialogflowCxAgentTextToSpeechSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_agent

dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings(
  synthesize_speech_configs: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings.property.synthesizeSpeechConfigs">synthesize_speech_configs</a></code> | <code>str</code> | Configuration of how speech should be synthesized, mapping from [language](https://cloud.google.com/dialogflow/cx/docs/reference/language) to [SynthesizeSpeechConfig](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents#synthesizespeechconfig). These settings affect: * The phone gateway synthesize configuration set via Agent.text_to_speech_settings. * How speech is synthesized when invoking session APIs. 'Agent.text_to_speech_settings' only applies if 'OutputAudioConfig.synthesize_speech_config' is not specified. |

---

##### `synthesize_speech_configs`<sup>Optional</sup> <a name="synthesize_speech_configs" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings.property.synthesizeSpeechConfigs"></a>

```python
synthesize_speech_configs: str
```

- *Type:* str

Configuration of how speech should be synthesized, mapping from [language](https://cloud.google.com/dialogflow/cx/docs/reference/language) to [SynthesizeSpeechConfig](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents#synthesizespeechconfig). These settings affect: * The phone gateway synthesize configuration set via Agent.text_to_speech_settings. * How speech is synthesized when invoking session APIs. 'Agent.text_to_speech_settings' only applies if 'OutputAudioConfig.synthesize_speech_config' is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#synthesize_speech_configs DialogflowCxAgent#synthesize_speech_configs}

---

### DialogflowCxAgentTimeouts <a name="DialogflowCxAgentTimeouts" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_agent

dialogflowCxAgent.DialogflowCxAgentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#create DialogflowCxAgent#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#delete DialogflowCxAgent#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#update DialogflowCxAgent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#create DialogflowCxAgent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#delete DialogflowCxAgent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#update DialogflowCxAgent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference <a name="DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_agent

dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a>

---


### DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference <a name="DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_agent

dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetFinishDigit">reset_finish_digit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetMaxDigits">reset_max_digits</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_finish_digit` <a name="reset_finish_digit" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetFinishDigit"></a>

```python
def reset_finish_digit() -> None
```

##### `reset_max_digits` <a name="reset_max_digits" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetMaxDigits"></a>

```python
def reset_max_digits() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.finishDigitInput">finish_digit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.maxDigitsInput">max_digits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.finishDigit">finish_digit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.maxDigits">max_digits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings">DialogflowCxAgentAdvancedSettingsDtmfSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `finish_digit_input`<sup>Optional</sup> <a name="finish_digit_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.finishDigitInput"></a>

```python
finish_digit_input: str
```

- *Type:* str

---

##### `max_digits_input`<sup>Optional</sup> <a name="max_digits_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.maxDigitsInput"></a>

```python
max_digits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `finish_digit`<sup>Required</sup> <a name="finish_digit" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.finishDigit"></a>

```python
finish_digit: str
```

- *Type:* str

---

##### `max_digits`<sup>Required</sup> <a name="max_digits" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.maxDigits"></a>

```python
max_digits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowCxAgentAdvancedSettingsDtmfSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings">DialogflowCxAgentAdvancedSettingsDtmfSettings</a>

---


### DialogflowCxAgentAdvancedSettingsOutputReference <a name="DialogflowCxAgentAdvancedSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_agent

dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.putAudioExportGcsDestination">put_audio_export_gcs_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.putDtmfSettings">put_dtmf_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.resetAudioExportGcsDestination">reset_audio_export_gcs_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.resetDtmfSettings">reset_dtmf_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_audio_export_gcs_destination` <a name="put_audio_export_gcs_destination" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.putAudioExportGcsDestination"></a>

```python
def put_audio_export_gcs_destination(
  uri: str = None
) -> None
```

###### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.putAudioExportGcsDestination.parameter.uri"></a>

- *Type:* str

The Google Cloud Storage URI for the exported objects.

Whether a full object name, or just a prefix, its usage depends on the Dialogflow operation.
Format: gs://bucket/object-name-or-prefix

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#uri DialogflowCxAgent#uri}

---

##### `put_dtmf_settings` <a name="put_dtmf_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.putDtmfSettings"></a>

```python
def put_dtmf_settings(
  enabled: typing.Union[bool, IResolvable] = None,
  finish_digit: str = None,
  max_digits: typing.Union[int, float] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.putDtmfSettings.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, incoming audio is processed for DTMF (dual tone multi frequency) events.

For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#enabled DialogflowCxAgent#enabled}

---

###### `finish_digit`<sup>Optional</sup> <a name="finish_digit" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.putDtmfSettings.parameter.finishDigit"></a>

- *Type:* str

The digit that terminates a DTMF digit sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#finish_digit DialogflowCxAgent#finish_digit}

---

###### `max_digits`<sup>Optional</sup> <a name="max_digits" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.putDtmfSettings.parameter.maxDigits"></a>

- *Type:* typing.Union[int, float]

Max length of DTMF digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#max_digits DialogflowCxAgent#max_digits}

---

##### `reset_audio_export_gcs_destination` <a name="reset_audio_export_gcs_destination" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.resetAudioExportGcsDestination"></a>

```python
def reset_audio_export_gcs_destination() -> None
```

##### `reset_dtmf_settings` <a name="reset_dtmf_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.resetDtmfSettings"></a>

```python
def reset_dtmf_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.audioExportGcsDestination">audio_export_gcs_destination</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.dtmfSettings">dtmf_settings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference">DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.audioExportGcsDestinationInput">audio_export_gcs_destination_input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.dtmfSettingsInput">dtmf_settings_input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings">DialogflowCxAgentAdvancedSettingsDtmfSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings">DialogflowCxAgentAdvancedSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audio_export_gcs_destination`<sup>Required</sup> <a name="audio_export_gcs_destination" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.audioExportGcsDestination"></a>

```python
audio_export_gcs_destination: DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference</a>

---

##### `dtmf_settings`<sup>Required</sup> <a name="dtmf_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.dtmfSettings"></a>

```python
dtmf_settings: DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference">DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference</a>

---

##### `audio_export_gcs_destination_input`<sup>Optional</sup> <a name="audio_export_gcs_destination_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.audioExportGcsDestinationInput"></a>

```python
audio_export_gcs_destination_input: DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a>

---

##### `dtmf_settings_input`<sup>Optional</sup> <a name="dtmf_settings_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.dtmfSettingsInput"></a>

```python
dtmf_settings_input: DialogflowCxAgentAdvancedSettingsDtmfSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings">DialogflowCxAgentAdvancedSettingsDtmfSettings</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowCxAgentAdvancedSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings">DialogflowCxAgentAdvancedSettings</a>

---


### DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference <a name="DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_agent

dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetAccessToken">reset_access_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetBranches">reset_branches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetRepositoryUri">reset_repository_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetTrackingBranch">reset_tracking_branch</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_token` <a name="reset_access_token" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetAccessToken"></a>

```python
def reset_access_token() -> None
```

##### `reset_branches` <a name="reset_branches" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetBranches"></a>

```python
def reset_branches() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_repository_uri` <a name="reset_repository_uri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetRepositoryUri"></a>

```python
def reset_repository_uri() -> None
```

##### `reset_tracking_branch` <a name="reset_tracking_branch" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetTrackingBranch"></a>

```python
def reset_tracking_branch() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.accessTokenInput">access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.branchesInput">branches_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.repositoryUriInput">repository_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.trackingBranchInput">tracking_branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.branches">branches</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.repositoryUri">repository_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.trackingBranch">tracking_branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings">DialogflowCxAgentGitIntegrationSettingsGithubSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_token_input`<sup>Optional</sup> <a name="access_token_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.accessTokenInput"></a>

```python
access_token_input: str
```

- *Type:* str

---

##### `branches_input`<sup>Optional</sup> <a name="branches_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.branchesInput"></a>

```python
branches_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `repository_uri_input`<sup>Optional</sup> <a name="repository_uri_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.repositoryUriInput"></a>

```python
repository_uri_input: str
```

- *Type:* str

---

##### `tracking_branch_input`<sup>Optional</sup> <a name="tracking_branch_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.trackingBranchInput"></a>

```python
tracking_branch_input: str
```

- *Type:* str

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.branches"></a>

```python
branches: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `repository_uri`<sup>Required</sup> <a name="repository_uri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.repositoryUri"></a>

```python
repository_uri: str
```

- *Type:* str

---

##### `tracking_branch`<sup>Required</sup> <a name="tracking_branch" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.trackingBranch"></a>

```python
tracking_branch: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowCxAgentGitIntegrationSettingsGithubSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings">DialogflowCxAgentGitIntegrationSettingsGithubSettings</a>

---


### DialogflowCxAgentGitIntegrationSettingsOutputReference <a name="DialogflowCxAgentGitIntegrationSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_agent

dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.putGithubSettings">put_github_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.resetGithubSettings">reset_github_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_github_settings` <a name="put_github_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.putGithubSettings"></a>

```python
def put_github_settings(
  access_token: str = None,
  branches: typing.List[str] = None,
  display_name: str = None,
  repository_uri: str = None,
  tracking_branch: str = None
) -> None
```

###### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.putGithubSettings.parameter.accessToken"></a>

- *Type:* str

The access token used to authenticate the access to the GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#access_token DialogflowCxAgent#access_token}

---

###### `branches`<sup>Optional</sup> <a name="branches" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.putGithubSettings.parameter.branches"></a>

- *Type:* typing.List[str]

A list of branches configured to be used from Dialogflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#branches DialogflowCxAgent#branches}

---

###### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.putGithubSettings.parameter.displayName"></a>

- *Type:* str

The unique repository display name for the GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#display_name DialogflowCxAgent#display_name}

---

###### `repository_uri`<sup>Optional</sup> <a name="repository_uri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.putGithubSettings.parameter.repositoryUri"></a>

- *Type:* str

The GitHub repository URI related to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#repository_uri DialogflowCxAgent#repository_uri}

---

###### `tracking_branch`<sup>Optional</sup> <a name="tracking_branch" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.putGithubSettings.parameter.trackingBranch"></a>

- *Type:* str

The branch of the GitHub repository tracked for this agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/dialogflow_cx_agent#tracking_branch DialogflowCxAgent#tracking_branch}

---

##### `reset_github_settings` <a name="reset_github_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.resetGithubSettings"></a>

```python
def reset_github_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.githubSettings">github_settings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference">DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.githubSettingsInput">github_settings_input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings">DialogflowCxAgentGitIntegrationSettingsGithubSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings">DialogflowCxAgentGitIntegrationSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `github_settings`<sup>Required</sup> <a name="github_settings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.githubSettings"></a>

```python
github_settings: DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference">DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference</a>

---

##### `github_settings_input`<sup>Optional</sup> <a name="github_settings_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.githubSettingsInput"></a>

```python
github_settings_input: DialogflowCxAgentGitIntegrationSettingsGithubSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings">DialogflowCxAgentGitIntegrationSettingsGithubSettings</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowCxAgentGitIntegrationSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings">DialogflowCxAgentGitIntegrationSettings</a>

---


### DialogflowCxAgentSpeechToTextSettingsOutputReference <a name="DialogflowCxAgentSpeechToTextSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_agent

dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.resetEnableSpeechAdaptation">reset_enable_speech_adaptation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_speech_adaptation` <a name="reset_enable_speech_adaptation" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.resetEnableSpeechAdaptation"></a>

```python
def reset_enable_speech_adaptation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.enableSpeechAdaptationInput">enable_speech_adaptation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.enableSpeechAdaptation">enable_speech_adaptation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings">DialogflowCxAgentSpeechToTextSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_speech_adaptation_input`<sup>Optional</sup> <a name="enable_speech_adaptation_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.enableSpeechAdaptationInput"></a>

```python
enable_speech_adaptation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_speech_adaptation`<sup>Required</sup> <a name="enable_speech_adaptation" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.enableSpeechAdaptation"></a>

```python
enable_speech_adaptation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowCxAgentSpeechToTextSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings">DialogflowCxAgentSpeechToTextSettings</a>

---


### DialogflowCxAgentTextToSpeechSettingsOutputReference <a name="DialogflowCxAgentTextToSpeechSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_agent

dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.resetSynthesizeSpeechConfigs">reset_synthesize_speech_configs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_synthesize_speech_configs` <a name="reset_synthesize_speech_configs" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.resetSynthesizeSpeechConfigs"></a>

```python
def reset_synthesize_speech_configs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigsInput">synthesize_speech_configs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigs">synthesize_speech_configs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings">DialogflowCxAgentTextToSpeechSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `synthesize_speech_configs_input`<sup>Optional</sup> <a name="synthesize_speech_configs_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigsInput"></a>

```python
synthesize_speech_configs_input: str
```

- *Type:* str

---

##### `synthesize_speech_configs`<sup>Required</sup> <a name="synthesize_speech_configs" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigs"></a>

```python
synthesize_speech_configs: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowCxAgentTextToSpeechSettings
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings">DialogflowCxAgentTextToSpeechSettings</a>

---


### DialogflowCxAgentTimeoutsOutputReference <a name="DialogflowCxAgentTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_cx_agent

dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts">DialogflowCxAgentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DialogflowCxAgentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts">DialogflowCxAgentTimeouts</a>]

---



