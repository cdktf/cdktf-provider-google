# `contactCenterInsightsAnalysisRule` Submodule <a name="`contactCenterInsightsAnalysisRule` Submodule" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContactCenterInsightsAnalysisRule <a name="ContactCenterInsightsAnalysisRule" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule google_contact_center_insights_analysis_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import contact_center_insights_analysis_rule

contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  active: typing.Union[bool, IResolvable] = None,
  analysis_percentage: typing.Union[int, float] = None,
  annotator_selector: ContactCenterInsightsAnalysisRuleAnnotatorSelector = None,
  conversation_filter: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: ContactCenterInsightsAnalysisRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.location">location</a></code> | <code>str</code> | Location of the resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.analysisPercentage">analysis_percentage</a></code> | <code>typing.Union[int, float]</code> | Percentage of conversations that we should apply this analysis setting automatically, between [0, 1]. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.annotatorSelector">annotator_selector</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | annotator_selector block. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.conversationFilter">conversation_filter</a></code> | <code>str</code> | Filter for the conversations that should apply this analysis rule. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display Name of the analysis rule. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#id ContactCenterInsightsAnalysisRule#id}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#project ContactCenterInsightsAnalysisRule#project}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.location"></a>

- *Type:* str

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#location ContactCenterInsightsAnalysisRule#location}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.active"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#active ContactCenterInsightsAnalysisRule#active}

---

##### `analysis_percentage`<sup>Optional</sup> <a name="analysis_percentage" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.analysisPercentage"></a>

- *Type:* typing.Union[int, float]

Percentage of conversations that we should apply this analysis setting automatically, between [0, 1].

For example, 0.1 means 10%. Conversations
are sampled in a determenestic way. The original runtime_percentage &
upload percentage will be replaced by defining filters on the conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#analysis_percentage ContactCenterInsightsAnalysisRule#analysis_percentage}

---

##### `annotator_selector`<sup>Optional</sup> <a name="annotator_selector" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.annotatorSelector"></a>

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

annotator_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#annotator_selector ContactCenterInsightsAnalysisRule#annotator_selector}

---

##### `conversation_filter`<sup>Optional</sup> <a name="conversation_filter" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.conversationFilter"></a>

- *Type:* str

Filter for the conversations that should apply this analysis rule.

An empty filter means this analysis rule applies to all
conversations.
Refer to https://cloud.google.com/contact-center/insights/docs/filtering
for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#conversation_filter ContactCenterInsightsAnalysisRule#conversation_filter}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.displayName"></a>

- *Type:* str

Display Name of the analysis rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#display_name ContactCenterInsightsAnalysisRule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#id ContactCenterInsightsAnalysisRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#project ContactCenterInsightsAnalysisRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#timeouts ContactCenterInsightsAnalysisRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putAnnotatorSelector">put_annotator_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetActive">reset_active</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetAnalysisPercentage">reset_analysis_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetAnnotatorSelector">reset_annotator_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetConversationFilter">reset_conversation_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_annotator_selector` <a name="put_annotator_selector" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putAnnotatorSelector"></a>

```python
def put_annotator_selector(
  issue_models: typing.List[str] = None,
  phrase_matchers: typing.List[str] = None,
  qa_config: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig = None,
  run_entity_annotator: typing.Union[bool, IResolvable] = None,
  run_intent_annotator: typing.Union[bool, IResolvable] = None,
  run_interruption_annotator: typing.Union[bool, IResolvable] = None,
  run_issue_model_annotator: typing.Union[bool, IResolvable] = None,
  run_phrase_matcher_annotator: typing.Union[bool, IResolvable] = None,
  run_qa_annotator: typing.Union[bool, IResolvable] = None,
  run_sentiment_annotator: typing.Union[bool, IResolvable] = None,
  run_silence_annotator: typing.Union[bool, IResolvable] = None,
  run_summarization_annotator: typing.Union[bool, IResolvable] = None,
  summarization_config: ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig = None
) -> None
```

###### `issue_models`<sup>Optional</sup> <a name="issue_models" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.issueModels"></a>

- *Type:* typing.List[str]

The issue model to run.

If not provided, the most recently deployed topic
model will be used. The provided issue model will only be used for
inference if the issue model is deployed and if run_issue_model_annotator
is set to true. If more than one issue model is provided, only the first
provided issue model will be used for inference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#issue_models ContactCenterInsightsAnalysisRule#issue_models}

---

###### `phrase_matchers`<sup>Optional</sup> <a name="phrase_matchers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.phraseMatchers"></a>

- *Type:* typing.List[str]

The list of phrase matchers to run.

If not provided, all active phrase
matchers will be used. If inactive phrase matchers are provided, they will
not be used. Phrase matchers will be run only if
run_phrase_matcher_annotator is set to true. Format:
projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#phrase_matchers ContactCenterInsightsAnalysisRule#phrase_matchers}

---

###### `qa_config`<sup>Optional</sup> <a name="qa_config" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.qaConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

qa_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#qa_config ContactCenterInsightsAnalysisRule#qa_config}

---

###### `run_entity_annotator`<sup>Optional</sup> <a name="run_entity_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.runEntityAnnotator"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the entity annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_entity_annotator ContactCenterInsightsAnalysisRule#run_entity_annotator}

---

###### `run_intent_annotator`<sup>Optional</sup> <a name="run_intent_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.runIntentAnnotator"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the intent annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_intent_annotator ContactCenterInsightsAnalysisRule#run_intent_annotator}

---

###### `run_interruption_annotator`<sup>Optional</sup> <a name="run_interruption_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.runInterruptionAnnotator"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the interruption annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_interruption_annotator ContactCenterInsightsAnalysisRule#run_interruption_annotator}

---

###### `run_issue_model_annotator`<sup>Optional</sup> <a name="run_issue_model_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.runIssueModelAnnotator"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the issue model annotator. A model should have already been deployed for this to take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_issue_model_annotator ContactCenterInsightsAnalysisRule#run_issue_model_annotator}

---

###### `run_phrase_matcher_annotator`<sup>Optional</sup> <a name="run_phrase_matcher_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.runPhraseMatcherAnnotator"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the active phrase matcher annotator(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_phrase_matcher_annotator ContactCenterInsightsAnalysisRule#run_phrase_matcher_annotator}

---

###### `run_qa_annotator`<sup>Optional</sup> <a name="run_qa_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.runQaAnnotator"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the QA annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_qa_annotator ContactCenterInsightsAnalysisRule#run_qa_annotator}

---

###### `run_sentiment_annotator`<sup>Optional</sup> <a name="run_sentiment_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.runSentimentAnnotator"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the sentiment annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_sentiment_annotator ContactCenterInsightsAnalysisRule#run_sentiment_annotator}

---

###### `run_silence_annotator`<sup>Optional</sup> <a name="run_silence_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.runSilenceAnnotator"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the silence annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_silence_annotator ContactCenterInsightsAnalysisRule#run_silence_annotator}

---

###### `run_summarization_annotator`<sup>Optional</sup> <a name="run_summarization_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.runSummarizationAnnotator"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the summarization annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_summarization_annotator ContactCenterInsightsAnalysisRule#run_summarization_annotator}

---

###### `summarization_config`<sup>Optional</sup> <a name="summarization_config" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.summarizationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

summarization_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#summarization_config ContactCenterInsightsAnalysisRule#summarization_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#create ContactCenterInsightsAnalysisRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#delete ContactCenterInsightsAnalysisRule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#update ContactCenterInsightsAnalysisRule#update}.

---

##### `reset_active` <a name="reset_active" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetActive"></a>

```python
def reset_active() -> None
```

##### `reset_analysis_percentage` <a name="reset_analysis_percentage" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetAnalysisPercentage"></a>

```python
def reset_analysis_percentage() -> None
```

##### `reset_annotator_selector` <a name="reset_annotator_selector" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetAnnotatorSelector"></a>

```python
def reset_annotator_selector() -> None
```

##### `reset_conversation_filter` <a name="reset_conversation_filter" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetConversationFilter"></a>

```python
def reset_conversation_filter() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ContactCenterInsightsAnalysisRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import contact_center_insights_analysis_rule

contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import contact_center_insights_analysis_rule

contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import contact_center_insights_analysis_rule

contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import contact_center_insights_analysis_rule

contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ContactCenterInsightsAnalysisRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ContactCenterInsightsAnalysisRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ContactCenterInsightsAnalysisRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContactCenterInsightsAnalysisRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.annotatorSelector">annotator_selector</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference">ContactCenterInsightsAnalysisRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.activeInput">active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.analysisPercentageInput">analysis_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.annotatorSelectorInput">annotator_selector_input</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.conversationFilterInput">conversation_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.analysisPercentage">analysis_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.conversationFilter">conversation_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `annotator_selector`<sup>Required</sup> <a name="annotator_selector" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.annotatorSelector"></a>

```python
annotator_selector: ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.timeouts"></a>

```python
timeouts: ContactCenterInsightsAnalysisRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference">ContactCenterInsightsAnalysisRuleTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.activeInput"></a>

```python
active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `analysis_percentage_input`<sup>Optional</sup> <a name="analysis_percentage_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.analysisPercentageInput"></a>

```python
analysis_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `annotator_selector_input`<sup>Optional</sup> <a name="annotator_selector_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.annotatorSelectorInput"></a>

```python
annotator_selector_input: ContactCenterInsightsAnalysisRuleAnnotatorSelector
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

---

##### `conversation_filter_input`<sup>Optional</sup> <a name="conversation_filter_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.conversationFilterInput"></a>

```python
conversation_filter_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ContactCenterInsightsAnalysisRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a>]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `analysis_percentage`<sup>Required</sup> <a name="analysis_percentage" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.analysisPercentage"></a>

```python
analysis_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `conversation_filter`<sup>Required</sup> <a name="conversation_filter" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.conversationFilter"></a>

```python
conversation_filter: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContactCenterInsightsAnalysisRuleAnnotatorSelector <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelector" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_google import contact_center_insights_analysis_rule

contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector(
  issue_models: typing.List[str] = None,
  phrase_matchers: typing.List[str] = None,
  qa_config: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig = None,
  run_entity_annotator: typing.Union[bool, IResolvable] = None,
  run_intent_annotator: typing.Union[bool, IResolvable] = None,
  run_interruption_annotator: typing.Union[bool, IResolvable] = None,
  run_issue_model_annotator: typing.Union[bool, IResolvable] = None,
  run_phrase_matcher_annotator: typing.Union[bool, IResolvable] = None,
  run_qa_annotator: typing.Union[bool, IResolvable] = None,
  run_sentiment_annotator: typing.Union[bool, IResolvable] = None,
  run_silence_annotator: typing.Union[bool, IResolvable] = None,
  run_summarization_annotator: typing.Union[bool, IResolvable] = None,
  summarization_config: ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.issueModels">issue_models</a></code> | <code>typing.List[str]</code> | The issue model to run. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.phraseMatchers">phrase_matchers</a></code> | <code>typing.List[str]</code> | The list of phrase matchers to run. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.qaConfig">qa_config</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a></code> | qa_config block. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runEntityAnnotator">run_entity_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to run the entity annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIntentAnnotator">run_intent_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to run the intent annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runInterruptionAnnotator">run_interruption_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to run the interruption annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIssueModelAnnotator">run_issue_model_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to run the issue model annotator. A model should have already been deployed for this to take effect. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runPhraseMatcherAnnotator">run_phrase_matcher_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to run the active phrase matcher annotator(s). |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runQaAnnotator">run_qa_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to run the QA annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSentimentAnnotator">run_sentiment_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to run the sentiment annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSilenceAnnotator">run_silence_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to run the silence annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSummarizationAnnotator">run_summarization_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to run the summarization annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.summarizationConfig">summarization_config</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a></code> | summarization_config block. |

---

##### `issue_models`<sup>Optional</sup> <a name="issue_models" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.issueModels"></a>

```python
issue_models: typing.List[str]
```

- *Type:* typing.List[str]

The issue model to run.

If not provided, the most recently deployed topic
model will be used. The provided issue model will only be used for
inference if the issue model is deployed and if run_issue_model_annotator
is set to true. If more than one issue model is provided, only the first
provided issue model will be used for inference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#issue_models ContactCenterInsightsAnalysisRule#issue_models}

---

##### `phrase_matchers`<sup>Optional</sup> <a name="phrase_matchers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.phraseMatchers"></a>

```python
phrase_matchers: typing.List[str]
```

- *Type:* typing.List[str]

The list of phrase matchers to run.

If not provided, all active phrase
matchers will be used. If inactive phrase matchers are provided, they will
not be used. Phrase matchers will be run only if
run_phrase_matcher_annotator is set to true. Format:
projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#phrase_matchers ContactCenterInsightsAnalysisRule#phrase_matchers}

---

##### `qa_config`<sup>Optional</sup> <a name="qa_config" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.qaConfig"></a>

```python
qa_config: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

qa_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#qa_config ContactCenterInsightsAnalysisRule#qa_config}

---

##### `run_entity_annotator`<sup>Optional</sup> <a name="run_entity_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runEntityAnnotator"></a>

```python
run_entity_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the entity annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_entity_annotator ContactCenterInsightsAnalysisRule#run_entity_annotator}

---

##### `run_intent_annotator`<sup>Optional</sup> <a name="run_intent_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIntentAnnotator"></a>

```python
run_intent_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the intent annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_intent_annotator ContactCenterInsightsAnalysisRule#run_intent_annotator}

---

##### `run_interruption_annotator`<sup>Optional</sup> <a name="run_interruption_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runInterruptionAnnotator"></a>

```python
run_interruption_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the interruption annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_interruption_annotator ContactCenterInsightsAnalysisRule#run_interruption_annotator}

---

##### `run_issue_model_annotator`<sup>Optional</sup> <a name="run_issue_model_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIssueModelAnnotator"></a>

```python
run_issue_model_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the issue model annotator. A model should have already been deployed for this to take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_issue_model_annotator ContactCenterInsightsAnalysisRule#run_issue_model_annotator}

---

##### `run_phrase_matcher_annotator`<sup>Optional</sup> <a name="run_phrase_matcher_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runPhraseMatcherAnnotator"></a>

```python
run_phrase_matcher_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the active phrase matcher annotator(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_phrase_matcher_annotator ContactCenterInsightsAnalysisRule#run_phrase_matcher_annotator}

---

##### `run_qa_annotator`<sup>Optional</sup> <a name="run_qa_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runQaAnnotator"></a>

```python
run_qa_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the QA annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_qa_annotator ContactCenterInsightsAnalysisRule#run_qa_annotator}

---

##### `run_sentiment_annotator`<sup>Optional</sup> <a name="run_sentiment_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSentimentAnnotator"></a>

```python
run_sentiment_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the sentiment annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_sentiment_annotator ContactCenterInsightsAnalysisRule#run_sentiment_annotator}

---

##### `run_silence_annotator`<sup>Optional</sup> <a name="run_silence_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSilenceAnnotator"></a>

```python
run_silence_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the silence annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_silence_annotator ContactCenterInsightsAnalysisRule#run_silence_annotator}

---

##### `run_summarization_annotator`<sup>Optional</sup> <a name="run_summarization_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSummarizationAnnotator"></a>

```python
run_summarization_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the summarization annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_summarization_annotator ContactCenterInsightsAnalysisRule#run_summarization_annotator}

---

##### `summarization_config`<sup>Optional</sup> <a name="summarization_config" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.summarizationConfig"></a>

```python
summarization_config: ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

summarization_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#summarization_config ContactCenterInsightsAnalysisRule#summarization_config}

---

### ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import contact_center_insights_analysis_rule

contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig(
  scorecard_list: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig.property.scorecardList">scorecard_list</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a></code> | scorecard_list block. |

---

##### `scorecard_list`<sup>Optional</sup> <a name="scorecard_list" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig.property.scorecardList"></a>

```python
scorecard_list: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

scorecard_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#scorecard_list ContactCenterInsightsAnalysisRule#scorecard_list}

---

### ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_google import contact_center_insights_analysis_rule

contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct(
  qa_scorecard_revisions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct.property.qaScorecardRevisions">qa_scorecard_revisions</a></code> | <code>typing.List[str]</code> | List of QaScorecardRevisions. |

---

##### `qa_scorecard_revisions`<sup>Optional</sup> <a name="qa_scorecard_revisions" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct.property.qaScorecardRevisions"></a>

```python
qa_scorecard_revisions: typing.List[str]
```

- *Type:* typing.List[str]

List of QaScorecardRevisions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#qa_scorecard_revisions ContactCenterInsightsAnalysisRule#qa_scorecard_revisions}

---

### ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import contact_center_insights_analysis_rule

contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig(
  conversation_profile: str = None,
  summarization_model: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.conversationProfile">conversation_profile</a></code> | <code>str</code> | Resource name of the Dialogflow conversation profile. Format: projects/{project}/locations/{location}/conversationProfiles/{conversation_profile}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.summarizationModel">summarization_model</a></code> | <code>str</code> | Default summarization model to be used. Possible values: SUMMARIZATION_MODEL_UNSPECIFIED BASELINE_MODEL BASELINE_MODEL_V2_0 Possible values: ["BASELINE_MODEL", "BASELINE_MODEL_V2_0"]. |

---

##### `conversation_profile`<sup>Optional</sup> <a name="conversation_profile" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.conversationProfile"></a>

```python
conversation_profile: str
```

- *Type:* str

Resource name of the Dialogflow conversation profile. Format: projects/{project}/locations/{location}/conversationProfiles/{conversation_profile}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#conversation_profile ContactCenterInsightsAnalysisRule#conversation_profile}

---

##### `summarization_model`<sup>Optional</sup> <a name="summarization_model" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.summarizationModel"></a>

```python
summarization_model: str
```

- *Type:* str

Default summarization model to be used. Possible values: SUMMARIZATION_MODEL_UNSPECIFIED BASELINE_MODEL BASELINE_MODEL_V2_0 Possible values: ["BASELINE_MODEL", "BASELINE_MODEL_V2_0"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#summarization_model ContactCenterInsightsAnalysisRule#summarization_model}

---

### ContactCenterInsightsAnalysisRuleConfig <a name="ContactCenterInsightsAnalysisRuleConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import contact_center_insights_analysis_rule

contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  active: typing.Union[bool, IResolvable] = None,
  analysis_percentage: typing.Union[int, float] = None,
  annotator_selector: ContactCenterInsightsAnalysisRuleAnnotatorSelector = None,
  conversation_filter: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: ContactCenterInsightsAnalysisRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.location">location</a></code> | <code>str</code> | Location of the resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.analysisPercentage">analysis_percentage</a></code> | <code>typing.Union[int, float]</code> | Percentage of conversations that we should apply this analysis setting automatically, between [0, 1]. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.annotatorSelector">annotator_selector</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | annotator_selector block. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.conversationFilter">conversation_filter</a></code> | <code>str</code> | Filter for the conversations that should apply this analysis rule. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.displayName">display_name</a></code> | <code>str</code> | Display Name of the analysis rule. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#id ContactCenterInsightsAnalysisRule#id}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#project ContactCenterInsightsAnalysisRule#project}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#location ContactCenterInsightsAnalysisRule#location}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#active ContactCenterInsightsAnalysisRule#active}

---

##### `analysis_percentage`<sup>Optional</sup> <a name="analysis_percentage" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.analysisPercentage"></a>

```python
analysis_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Percentage of conversations that we should apply this analysis setting automatically, between [0, 1].

For example, 0.1 means 10%. Conversations
are sampled in a determenestic way. The original runtime_percentage &
upload percentage will be replaced by defining filters on the conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#analysis_percentage ContactCenterInsightsAnalysisRule#analysis_percentage}

---

##### `annotator_selector`<sup>Optional</sup> <a name="annotator_selector" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.annotatorSelector"></a>

```python
annotator_selector: ContactCenterInsightsAnalysisRuleAnnotatorSelector
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

annotator_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#annotator_selector ContactCenterInsightsAnalysisRule#annotator_selector}

---

##### `conversation_filter`<sup>Optional</sup> <a name="conversation_filter" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.conversationFilter"></a>

```python
conversation_filter: str
```

- *Type:* str

Filter for the conversations that should apply this analysis rule.

An empty filter means this analysis rule applies to all
conversations.
Refer to https://cloud.google.com/contact-center/insights/docs/filtering
for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#conversation_filter ContactCenterInsightsAnalysisRule#conversation_filter}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display Name of the analysis rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#display_name ContactCenterInsightsAnalysisRule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#id ContactCenterInsightsAnalysisRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#project ContactCenterInsightsAnalysisRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.timeouts"></a>

```python
timeouts: ContactCenterInsightsAnalysisRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#timeouts ContactCenterInsightsAnalysisRule#timeouts}

---

### ContactCenterInsightsAnalysisRuleTimeouts <a name="ContactCenterInsightsAnalysisRuleTimeouts" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import contact_center_insights_analysis_rule

contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#create ContactCenterInsightsAnalysisRule#create}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#delete ContactCenterInsightsAnalysisRule#delete}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#update ContactCenterInsightsAnalysisRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#create ContactCenterInsightsAnalysisRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#delete ContactCenterInsightsAnalysisRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#update ContactCenterInsightsAnalysisRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import contact_center_insights_analysis_rule

contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putQaConfig">put_qa_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putSummarizationConfig">put_summarization_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetIssueModels">reset_issue_models</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetPhraseMatchers">reset_phrase_matchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetQaConfig">reset_qa_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunEntityAnnotator">reset_run_entity_annotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIntentAnnotator">reset_run_intent_annotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunInterruptionAnnotator">reset_run_interruption_annotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIssueModelAnnotator">reset_run_issue_model_annotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunPhraseMatcherAnnotator">reset_run_phrase_matcher_annotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunQaAnnotator">reset_run_qa_annotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSentimentAnnotator">reset_run_sentiment_annotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSilenceAnnotator">reset_run_silence_annotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSummarizationAnnotator">reset_run_summarization_annotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetSummarizationConfig">reset_summarization_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_qa_config` <a name="put_qa_config" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putQaConfig"></a>

```python
def put_qa_config(
  scorecard_list: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct = None
) -> None
```

###### `scorecard_list`<sup>Optional</sup> <a name="scorecard_list" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putQaConfig.parameter.scorecardList"></a>

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

scorecard_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#scorecard_list ContactCenterInsightsAnalysisRule#scorecard_list}

---

##### `put_summarization_config` <a name="put_summarization_config" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putSummarizationConfig"></a>

```python
def put_summarization_config(
  conversation_profile: str = None,
  summarization_model: str = None
) -> None
```

###### `conversation_profile`<sup>Optional</sup> <a name="conversation_profile" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putSummarizationConfig.parameter.conversationProfile"></a>

- *Type:* str

Resource name of the Dialogflow conversation profile. Format: projects/{project}/locations/{location}/conversationProfiles/{conversation_profile}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#conversation_profile ContactCenterInsightsAnalysisRule#conversation_profile}

---

###### `summarization_model`<sup>Optional</sup> <a name="summarization_model" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putSummarizationConfig.parameter.summarizationModel"></a>

- *Type:* str

Default summarization model to be used. Possible values: SUMMARIZATION_MODEL_UNSPECIFIED BASELINE_MODEL BASELINE_MODEL_V2_0 Possible values: ["BASELINE_MODEL", "BASELINE_MODEL_V2_0"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#summarization_model ContactCenterInsightsAnalysisRule#summarization_model}

---

##### `reset_issue_models` <a name="reset_issue_models" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetIssueModels"></a>

```python
def reset_issue_models() -> None
```

##### `reset_phrase_matchers` <a name="reset_phrase_matchers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetPhraseMatchers"></a>

```python
def reset_phrase_matchers() -> None
```

##### `reset_qa_config` <a name="reset_qa_config" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetQaConfig"></a>

```python
def reset_qa_config() -> None
```

##### `reset_run_entity_annotator` <a name="reset_run_entity_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunEntityAnnotator"></a>

```python
def reset_run_entity_annotator() -> None
```

##### `reset_run_intent_annotator` <a name="reset_run_intent_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIntentAnnotator"></a>

```python
def reset_run_intent_annotator() -> None
```

##### `reset_run_interruption_annotator` <a name="reset_run_interruption_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunInterruptionAnnotator"></a>

```python
def reset_run_interruption_annotator() -> None
```

##### `reset_run_issue_model_annotator` <a name="reset_run_issue_model_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIssueModelAnnotator"></a>

```python
def reset_run_issue_model_annotator() -> None
```

##### `reset_run_phrase_matcher_annotator` <a name="reset_run_phrase_matcher_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunPhraseMatcherAnnotator"></a>

```python
def reset_run_phrase_matcher_annotator() -> None
```

##### `reset_run_qa_annotator` <a name="reset_run_qa_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunQaAnnotator"></a>

```python
def reset_run_qa_annotator() -> None
```

##### `reset_run_sentiment_annotator` <a name="reset_run_sentiment_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSentimentAnnotator"></a>

```python
def reset_run_sentiment_annotator() -> None
```

##### `reset_run_silence_annotator` <a name="reset_run_silence_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSilenceAnnotator"></a>

```python
def reset_run_silence_annotator() -> None
```

##### `reset_run_summarization_annotator` <a name="reset_run_summarization_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSummarizationAnnotator"></a>

```python
def reset_run_summarization_annotator() -> None
```

##### `reset_summarization_config` <a name="reset_summarization_config" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetSummarizationConfig"></a>

```python
def reset_summarization_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfig">qa_config</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfig">summarization_config</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModelsInput">issue_models_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchersInput">phrase_matchers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfigInput">qa_config_input</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotatorInput">run_entity_annotator_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotatorInput">run_intent_annotator_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotatorInput">run_interruption_annotator_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotatorInput">run_issue_model_annotator_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotatorInput">run_phrase_matcher_annotator_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotatorInput">run_qa_annotator_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotatorInput">run_sentiment_annotator_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotatorInput">run_silence_annotator_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotatorInput">run_summarization_annotator_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfigInput">summarization_config_input</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModels">issue_models</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchers">phrase_matchers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotator">run_entity_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotator">run_intent_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotator">run_interruption_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotator">run_issue_model_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotator">run_phrase_matcher_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotator">run_qa_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotator">run_sentiment_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotator">run_silence_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotator">run_summarization_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `qa_config`<sup>Required</sup> <a name="qa_config" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfig"></a>

```python
qa_config: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference</a>

---

##### `summarization_config`<sup>Required</sup> <a name="summarization_config" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfig"></a>

```python
summarization_config: ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference</a>

---

##### `issue_models_input`<sup>Optional</sup> <a name="issue_models_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModelsInput"></a>

```python
issue_models_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `phrase_matchers_input`<sup>Optional</sup> <a name="phrase_matchers_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchersInput"></a>

```python
phrase_matchers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `qa_config_input`<sup>Optional</sup> <a name="qa_config_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfigInput"></a>

```python
qa_config_input: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

---

##### `run_entity_annotator_input`<sup>Optional</sup> <a name="run_entity_annotator_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotatorInput"></a>

```python
run_entity_annotator_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_intent_annotator_input`<sup>Optional</sup> <a name="run_intent_annotator_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotatorInput"></a>

```python
run_intent_annotator_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_interruption_annotator_input`<sup>Optional</sup> <a name="run_interruption_annotator_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotatorInput"></a>

```python
run_interruption_annotator_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_issue_model_annotator_input`<sup>Optional</sup> <a name="run_issue_model_annotator_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotatorInput"></a>

```python
run_issue_model_annotator_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_phrase_matcher_annotator_input`<sup>Optional</sup> <a name="run_phrase_matcher_annotator_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotatorInput"></a>

```python
run_phrase_matcher_annotator_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_qa_annotator_input`<sup>Optional</sup> <a name="run_qa_annotator_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotatorInput"></a>

```python
run_qa_annotator_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_sentiment_annotator_input`<sup>Optional</sup> <a name="run_sentiment_annotator_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotatorInput"></a>

```python
run_sentiment_annotator_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_silence_annotator_input`<sup>Optional</sup> <a name="run_silence_annotator_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotatorInput"></a>

```python
run_silence_annotator_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_summarization_annotator_input`<sup>Optional</sup> <a name="run_summarization_annotator_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotatorInput"></a>

```python
run_summarization_annotator_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `summarization_config_input`<sup>Optional</sup> <a name="summarization_config_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfigInput"></a>

```python
summarization_config_input: ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

---

##### `issue_models`<sup>Required</sup> <a name="issue_models" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModels"></a>

```python
issue_models: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `phrase_matchers`<sup>Required</sup> <a name="phrase_matchers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchers"></a>

```python
phrase_matchers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `run_entity_annotator`<sup>Required</sup> <a name="run_entity_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotator"></a>

```python
run_entity_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_intent_annotator`<sup>Required</sup> <a name="run_intent_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotator"></a>

```python
run_intent_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_interruption_annotator`<sup>Required</sup> <a name="run_interruption_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotator"></a>

```python
run_interruption_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_issue_model_annotator`<sup>Required</sup> <a name="run_issue_model_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotator"></a>

```python
run_issue_model_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_phrase_matcher_annotator`<sup>Required</sup> <a name="run_phrase_matcher_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotator"></a>

```python
run_phrase_matcher_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_qa_annotator`<sup>Required</sup> <a name="run_qa_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotator"></a>

```python
run_qa_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_sentiment_annotator`<sup>Required</sup> <a name="run_sentiment_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotator"></a>

```python
run_sentiment_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_silence_annotator`<sup>Required</sup> <a name="run_silence_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotator"></a>

```python
run_silence_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_summarization_annotator`<sup>Required</sup> <a name="run_summarization_annotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotator"></a>

```python
run_summarization_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.internalValue"></a>

```python
internal_value: ContactCenterInsightsAnalysisRuleAnnotatorSelector
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

---


### ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import contact_center_insights_analysis_rule

contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.putScorecardList">put_scorecard_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resetScorecardList">reset_scorecard_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_scorecard_list` <a name="put_scorecard_list" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.putScorecardList"></a>

```python
def put_scorecard_list(
  qa_scorecard_revisions: typing.List[str] = None
) -> None
```

###### `qa_scorecard_revisions`<sup>Optional</sup> <a name="qa_scorecard_revisions" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.putScorecardList.parameter.qaScorecardRevisions"></a>

- *Type:* typing.List[str]

List of QaScorecardRevisions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#qa_scorecard_revisions ContactCenterInsightsAnalysisRule#qa_scorecard_revisions}

---

##### `reset_scorecard_list` <a name="reset_scorecard_list" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resetScorecardList"></a>

```python
def reset_scorecard_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardList">scorecard_list</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardListInput">scorecard_list_input</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scorecard_list`<sup>Required</sup> <a name="scorecard_list" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardList"></a>

```python
scorecard_list: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference</a>

---

##### `scorecard_list_input`<sup>Optional</sup> <a name="scorecard_list_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardListInput"></a>

```python
scorecard_list_input: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

---


### ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import contact_center_insights_analysis_rule

contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resetQaScorecardRevisions">reset_qa_scorecard_revisions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_qa_scorecard_revisions` <a name="reset_qa_scorecard_revisions" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resetQaScorecardRevisions"></a>

```python
def reset_qa_scorecard_revisions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisionsInput">qa_scorecard_revisions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisions">qa_scorecard_revisions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `qa_scorecard_revisions_input`<sup>Optional</sup> <a name="qa_scorecard_revisions_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisionsInput"></a>

```python
qa_scorecard_revisions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `qa_scorecard_revisions`<sup>Required</sup> <a name="qa_scorecard_revisions" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisions"></a>

```python
qa_scorecard_revisions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.internalValue"></a>

```python
internal_value: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

---


### ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import contact_center_insights_analysis_rule

contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetConversationProfile">reset_conversation_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetSummarizationModel">reset_summarization_model</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_conversation_profile` <a name="reset_conversation_profile" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetConversationProfile"></a>

```python
def reset_conversation_profile() -> None
```

##### `reset_summarization_model` <a name="reset_summarization_model" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetSummarizationModel"></a>

```python
def reset_summarization_model() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfileInput">conversation_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModelInput">summarization_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfile">conversation_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModel">summarization_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conversation_profile_input`<sup>Optional</sup> <a name="conversation_profile_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfileInput"></a>

```python
conversation_profile_input: str
```

- *Type:* str

---

##### `summarization_model_input`<sup>Optional</sup> <a name="summarization_model_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModelInput"></a>

```python
summarization_model_input: str
```

- *Type:* str

---

##### `conversation_profile`<sup>Required</sup> <a name="conversation_profile" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfile"></a>

```python
conversation_profile: str
```

- *Type:* str

---

##### `summarization_model`<sup>Required</sup> <a name="summarization_model" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModel"></a>

```python
summarization_model: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

---


### ContactCenterInsightsAnalysisRuleTimeoutsOutputReference <a name="ContactCenterInsightsAnalysisRuleTimeoutsOutputReference" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import contact_center_insights_analysis_rule

contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContactCenterInsightsAnalysisRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a>]

---



