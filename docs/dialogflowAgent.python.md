# `google_dialogflow_agent`

Refer to the Terraform Registory for docs: [`google_dialogflow_agent`](https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent).

# `dialogflowAgent` Submodule <a name="`dialogflowAgent` Submodule" id="@cdktf/provider-google.dialogflowAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowAgent <a name="DialogflowAgent" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent google_dialogflow_agent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_agent

dialogflowAgent.DialogflowAgent(
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
  time_zone: str,
  api_version: str = None,
  avatar_uri: str = None,
  classification_threshold: typing.Union[int, float] = None,
  description: str = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  id: str = None,
  match_mode: str = None,
  project: str = None,
  supported_language_codes: typing.List[str] = None,
  tier: str = None,
  timeouts: DialogflowAgentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.defaultLanguageCode">default_language_code</a></code> | <code>str</code> | The default language of the agent as a language tag. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The name of this agent. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.apiVersion">api_version</a></code> | <code>str</code> | API version displayed in Dialogflow console. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.avatarUri">avatar_uri</a></code> | <code>str</code> | The URI of the agent's avatar, which are used throughout the Dialogflow console. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.classificationThreshold">classification_threshold</a></code> | <code>typing.Union[int, float]</code> | To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether this agent should log conversation queries. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#id DialogflowAgent#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.matchMode">match_mode</a></code> | <code>str</code> | Determines how intents are detected from user queries. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#project DialogflowAgent#project}. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.supportedLanguageCodes">supported_language_codes</a></code> | <code>typing.List[str]</code> | The list of all languages supported by this agent (except for the defaultLanguageCode). |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.tier">tier</a></code> | <code>str</code> | The agent tier. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts">DialogflowAgentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_language_code`<sup>Required</sup> <a name="default_language_code" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.defaultLanguageCode"></a>

- *Type:* str

The default language of the agent as a language tag.

[See Language Support](https://cloud.google.com/dialogflow/docs/reference/language)
for a list of the currently supported language codes. This field cannot be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#default_language_code DialogflowAgent#default_language_code}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.displayName"></a>

- *Type:* str

The name of this agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#display_name DialogflowAgent#display_name}

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.timeZone"></a>

- *Type:* str

The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#time_zone DialogflowAgent#time_zone}

---

##### `api_version`<sup>Optional</sup> <a name="api_version" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.apiVersion"></a>

- *Type:* str

API version displayed in Dialogflow console.

If not specified, V2 API is assumed. Clients are free to query
different service endpoints for different API versions. However, bots connectors and webhook calls will follow
the specified API version.
API_VERSION_V1: Legacy V1 API.
API_VERSION_V2: V2 API.
API_VERSION_V2_BETA_1: V2beta1 API. Possible values: ["API_VERSION_V1", "API_VERSION_V2", "API_VERSION_V2_BETA_1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#api_version DialogflowAgent#api_version}

---

##### `avatar_uri`<sup>Optional</sup> <a name="avatar_uri" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.avatarUri"></a>

- *Type:* str

The URI of the agent's avatar, which are used throughout the Dialogflow console.

When an image URL is entered
into this field, the Dialogflow will save the image in the backend. The address of the backend image returned
from the API will be shown in the [avatarUriBackend] field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#avatar_uri DialogflowAgent#avatar_uri}

---

##### `classification_threshold`<sup>Optional</sup> <a name="classification_threshold" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.classificationThreshold"></a>

- *Type:* typing.Union[int, float]

To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold.

If the returned score value is less than the threshold
value, then a fallback intent will be triggered or, if there are no fallback intents defined, no intent will be
triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the
default of 0.3 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#classification_threshold DialogflowAgent#classification_threshold}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.description"></a>

- *Type:* str

The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#description DialogflowAgent#description}

---

##### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.enableLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether this agent should log conversation queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#enable_logging DialogflowAgent#enable_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#id DialogflowAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `match_mode`<sup>Optional</sup> <a name="match_mode" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.matchMode"></a>

- *Type:* str

Determines how intents are detected from user queries.

MATCH_MODE_HYBRID: Best for agents with a small number of examples in intents and/or wide use of templates
syntax and composite entities.
MATCH_MODE_ML_ONLY: Can be used for agents with a large number of examples in intents, especially the ones
using @sys.any or very large developer entities. Possible values: ["MATCH_MODE_HYBRID", "MATCH_MODE_ML_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#match_mode DialogflowAgent#match_mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#project DialogflowAgent#project}.

---

##### `supported_language_codes`<sup>Optional</sup> <a name="supported_language_codes" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.supportedLanguageCodes"></a>

- *Type:* typing.List[str]

The list of all languages supported by this agent (except for the defaultLanguageCode).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#supported_language_codes DialogflowAgent#supported_language_codes}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.tier"></a>

- *Type:* str

The agent tier.

If not specified, TIER_STANDARD is assumed.
TIER_STANDARD: Standard tier.
TIER_ENTERPRISE: Enterprise tier (Essentials).
TIER_ENTERPRISE_PLUS: Enterprise tier (Plus).
NOTE: Due to consistency issues, the provider will not read this field from the API. Drift is possible between
the Terraform state and Dialogflow if the agent tier is changed outside of Terraform. Possible values: ["TIER_STANDARD", "TIER_ENTERPRISE", "TIER_ENTERPRISE_PLUS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#tier DialogflowAgent#tier}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts">DialogflowAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#timeouts DialogflowAgent#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetApiVersion">reset_api_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetAvatarUri">reset_avatar_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetClassificationThreshold">reset_classification_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetEnableLogging">reset_enable_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetMatchMode">reset_match_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetSupportedLanguageCodes">reset_supported_language_codes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetTier">reset_tier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#create DialogflowAgent#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#delete DialogflowAgent#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#update DialogflowAgent#update}.

---

##### `reset_api_version` <a name="reset_api_version" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetApiVersion"></a>

```python
def reset_api_version() -> None
```

##### `reset_avatar_uri` <a name="reset_avatar_uri" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetAvatarUri"></a>

```python
def reset_avatar_uri() -> None
```

##### `reset_classification_threshold` <a name="reset_classification_threshold" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetClassificationThreshold"></a>

```python
def reset_classification_threshold() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_logging` <a name="reset_enable_logging" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetEnableLogging"></a>

```python
def reset_enable_logging() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_match_mode` <a name="reset_match_mode" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetMatchMode"></a>

```python
def reset_match_mode() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_supported_language_codes` <a name="reset_supported_language_codes" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetSupportedLanguageCodes"></a>

```python
def reset_supported_language_codes() -> None
```

##### `reset_tier` <a name="reset_tier" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetTier"></a>

```python
def reset_tier() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_agent

dialogflowAgent.DialogflowAgent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_agent

dialogflowAgent.DialogflowAgent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_agent

dialogflowAgent.DialogflowAgent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.avatarUriBackend">avatar_uri_backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference">DialogflowAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.apiVersionInput">api_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.avatarUriInput">avatar_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.classificationThresholdInput">classification_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.defaultLanguageCodeInput">default_language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.enableLoggingInput">enable_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.matchModeInput">match_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.supportedLanguageCodesInput">supported_language_codes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.tierInput">tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts">DialogflowAgentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.apiVersion">api_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.avatarUri">avatar_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.classificationThreshold">classification_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.defaultLanguageCode">default_language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.matchMode">match_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.supportedLanguageCodes">supported_language_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.tier">tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `avatar_uri_backend`<sup>Required</sup> <a name="avatar_uri_backend" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.avatarUriBackend"></a>

```python
avatar_uri_backend: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.timeouts"></a>

```python
timeouts: DialogflowAgentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference">DialogflowAgentTimeoutsOutputReference</a>

---

##### `api_version_input`<sup>Optional</sup> <a name="api_version_input" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.apiVersionInput"></a>

```python
api_version_input: str
```

- *Type:* str

---

##### `avatar_uri_input`<sup>Optional</sup> <a name="avatar_uri_input" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.avatarUriInput"></a>

```python
avatar_uri_input: str
```

- *Type:* str

---

##### `classification_threshold_input`<sup>Optional</sup> <a name="classification_threshold_input" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.classificationThresholdInput"></a>

```python
classification_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_language_code_input`<sup>Optional</sup> <a name="default_language_code_input" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.defaultLanguageCodeInput"></a>

```python
default_language_code_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enable_logging_input`<sup>Optional</sup> <a name="enable_logging_input" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.enableLoggingInput"></a>

```python
enable_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `match_mode_input`<sup>Optional</sup> <a name="match_mode_input" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.matchModeInput"></a>

```python
match_mode_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `supported_language_codes_input`<sup>Optional</sup> <a name="supported_language_codes_input" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.supportedLanguageCodesInput"></a>

```python
supported_language_codes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tier_input`<sup>Optional</sup> <a name="tier_input" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.tierInput"></a>

```python
tier_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DialogflowAgentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts">DialogflowAgentTimeouts</a>]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `api_version`<sup>Required</sup> <a name="api_version" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.apiVersion"></a>

```python
api_version: str
```

- *Type:* str

---

##### `avatar_uri`<sup>Required</sup> <a name="avatar_uri" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.avatarUri"></a>

```python
avatar_uri: str
```

- *Type:* str

---

##### `classification_threshold`<sup>Required</sup> <a name="classification_threshold" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.classificationThreshold"></a>

```python
classification_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_language_code`<sup>Required</sup> <a name="default_language_code" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.defaultLanguageCode"></a>

```python
default_language_code: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enable_logging`<sup>Required</sup> <a name="enable_logging" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `match_mode`<sup>Required</sup> <a name="match_mode" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.matchMode"></a>

```python
match_mode: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `supported_language_codes`<sup>Required</sup> <a name="supported_language_codes" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.supportedLanguageCodes"></a>

```python
supported_language_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowAgentConfig <a name="DialogflowAgentConfig" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_agent

dialogflowAgent.DialogflowAgentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_language_code: str,
  display_name: str,
  time_zone: str,
  api_version: str = None,
  avatar_uri: str = None,
  classification_threshold: typing.Union[int, float] = None,
  description: str = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  id: str = None,
  match_mode: str = None,
  project: str = None,
  supported_language_codes: typing.List[str] = None,
  tier: str = None,
  timeouts: DialogflowAgentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.defaultLanguageCode">default_language_code</a></code> | <code>str</code> | The default language of the agent as a language tag. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.displayName">display_name</a></code> | <code>str</code> | The name of this agent. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.timeZone">time_zone</a></code> | <code>str</code> | The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.apiVersion">api_version</a></code> | <code>str</code> | API version displayed in Dialogflow console. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.avatarUri">avatar_uri</a></code> | <code>str</code> | The URI of the agent's avatar, which are used throughout the Dialogflow console. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.classificationThreshold">classification_threshold</a></code> | <code>typing.Union[int, float]</code> | To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.description">description</a></code> | <code>str</code> | The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether this agent should log conversation queries. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#id DialogflowAgent#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.matchMode">match_mode</a></code> | <code>str</code> | Determines how intents are detected from user queries. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#project DialogflowAgent#project}. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.supportedLanguageCodes">supported_language_codes</a></code> | <code>typing.List[str]</code> | The list of all languages supported by this agent (except for the defaultLanguageCode). |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.tier">tier</a></code> | <code>str</code> | The agent tier. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts">DialogflowAgentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_language_code`<sup>Required</sup> <a name="default_language_code" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.defaultLanguageCode"></a>

```python
default_language_code: str
```

- *Type:* str

The default language of the agent as a language tag.

[See Language Support](https://cloud.google.com/dialogflow/docs/reference/language)
for a list of the currently supported language codes. This field cannot be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#default_language_code DialogflowAgent#default_language_code}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The name of this agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#display_name DialogflowAgent#display_name}

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#time_zone DialogflowAgent#time_zone}

---

##### `api_version`<sup>Optional</sup> <a name="api_version" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.apiVersion"></a>

```python
api_version: str
```

- *Type:* str

API version displayed in Dialogflow console.

If not specified, V2 API is assumed. Clients are free to query
different service endpoints for different API versions. However, bots connectors and webhook calls will follow
the specified API version.
API_VERSION_V1: Legacy V1 API.
API_VERSION_V2: V2 API.
API_VERSION_V2_BETA_1: V2beta1 API. Possible values: ["API_VERSION_V1", "API_VERSION_V2", "API_VERSION_V2_BETA_1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#api_version DialogflowAgent#api_version}

---

##### `avatar_uri`<sup>Optional</sup> <a name="avatar_uri" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.avatarUri"></a>

```python
avatar_uri: str
```

- *Type:* str

The URI of the agent's avatar, which are used throughout the Dialogflow console.

When an image URL is entered
into this field, the Dialogflow will save the image in the backend. The address of the backend image returned
from the API will be shown in the [avatarUriBackend] field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#avatar_uri DialogflowAgent#avatar_uri}

---

##### `classification_threshold`<sup>Optional</sup> <a name="classification_threshold" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.classificationThreshold"></a>

```python
classification_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold.

If the returned score value is less than the threshold
value, then a fallback intent will be triggered or, if there are no fallback intents defined, no intent will be
triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the
default of 0.3 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#classification_threshold DialogflowAgent#classification_threshold}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#description DialogflowAgent#description}

---

##### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether this agent should log conversation queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#enable_logging DialogflowAgent#enable_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#id DialogflowAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `match_mode`<sup>Optional</sup> <a name="match_mode" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.matchMode"></a>

```python
match_mode: str
```

- *Type:* str

Determines how intents are detected from user queries.

MATCH_MODE_HYBRID: Best for agents with a small number of examples in intents and/or wide use of templates
syntax and composite entities.
MATCH_MODE_ML_ONLY: Can be used for agents with a large number of examples in intents, especially the ones
using @sys.any or very large developer entities. Possible values: ["MATCH_MODE_HYBRID", "MATCH_MODE_ML_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#match_mode DialogflowAgent#match_mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#project DialogflowAgent#project}.

---

##### `supported_language_codes`<sup>Optional</sup> <a name="supported_language_codes" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.supportedLanguageCodes"></a>

```python
supported_language_codes: typing.List[str]
```

- *Type:* typing.List[str]

The list of all languages supported by this agent (except for the defaultLanguageCode).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#supported_language_codes DialogflowAgent#supported_language_codes}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.tier"></a>

```python
tier: str
```

- *Type:* str

The agent tier.

If not specified, TIER_STANDARD is assumed.
TIER_STANDARD: Standard tier.
TIER_ENTERPRISE: Enterprise tier (Essentials).
TIER_ENTERPRISE_PLUS: Enterprise tier (Plus).
NOTE: Due to consistency issues, the provider will not read this field from the API. Drift is possible between
the Terraform state and Dialogflow if the agent tier is changed outside of Terraform. Possible values: ["TIER_STANDARD", "TIER_ENTERPRISE", "TIER_ENTERPRISE_PLUS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#tier DialogflowAgent#tier}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentConfig.property.timeouts"></a>

```python
timeouts: DialogflowAgentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts">DialogflowAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#timeouts DialogflowAgent#timeouts}

---

### DialogflowAgentTimeouts <a name="DialogflowAgentTimeouts" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_agent

dialogflowAgent.DialogflowAgentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#create DialogflowAgent#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#delete DialogflowAgent#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#update DialogflowAgent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#create DialogflowAgent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#delete DialogflowAgent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/dialogflow_agent#update DialogflowAgent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowAgentTimeoutsOutputReference <a name="DialogflowAgentTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_agent

dialogflowAgent.DialogflowAgentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts">DialogflowAgentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DialogflowAgentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowAgent.DialogflowAgentTimeouts">DialogflowAgentTimeouts</a>]

---



