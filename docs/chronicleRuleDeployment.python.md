# `chronicleRuleDeployment` Submodule <a name="`chronicleRuleDeployment` Submodule" id="@cdktf/provider-google.chronicleRuleDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleRuleDeployment <a name="ChronicleRuleDeployment" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment google_chronicle_rule_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_rule_deployment

chronicleRuleDeployment.ChronicleRuleDeployment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance: str,
  location: str,
  rule: str,
  alerting: typing.Union[bool, IResolvable] = None,
  archived: typing.Union[bool, IResolvable] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  run_frequency: str = None,
  timeouts: ChronicleRuleDeploymentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.instance">instance</a></code> | <code>str</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.rule">rule</a></code> | <code>str</code> | The Rule ID of the rule. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.alerting">alerting</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether detections resulting from this deployment should be considered alerts. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.archived">archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The archive state of the rule deployment. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the rule is currently deployed continuously against incoming data. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#id ChronicleRuleDeployment#id}. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#project ChronicleRuleDeployment#project}. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.runFrequency">run_frequency</a></code> | <code>str</code> | The run frequency of the rule deployment. Possible values: LIVE HOURLY DAILY. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts">ChronicleRuleDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.instance"></a>

- *Type:* str

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#instance ChronicleRuleDeployment#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#location ChronicleRuleDeployment#location}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.rule"></a>

- *Type:* str

The Rule ID of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#rule ChronicleRuleDeployment#rule}

---

##### `alerting`<sup>Optional</sup> <a name="alerting" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.alerting"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether detections resulting from this deployment should be considered alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#alerting ChronicleRuleDeployment#alerting}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.archived"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The archive state of the rule deployment.

Cannot be set to true unless enabled is set to false i.e.
archiving requires a two-step process: first, disable the rule by
setting 'enabled' to false, then set 'archive' to true.
If set to true, alerting will automatically be set to false.
If currently set to true, enabled, alerting, and run_frequency cannot be
updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#archived ChronicleRuleDeployment#archived}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the rule is currently deployed continuously against incoming data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#enabled ChronicleRuleDeployment#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#id ChronicleRuleDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#project ChronicleRuleDeployment#project}.

---

##### `run_frequency`<sup>Optional</sup> <a name="run_frequency" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.runFrequency"></a>

- *Type:* str

The run frequency of the rule deployment. Possible values: LIVE HOURLY DAILY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#run_frequency ChronicleRuleDeployment#run_frequency}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts">ChronicleRuleDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#timeouts ChronicleRuleDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetAlerting">reset_alerting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetArchived">reset_archived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetRunFrequency">reset_run_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#create ChronicleRuleDeployment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#delete ChronicleRuleDeployment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#update ChronicleRuleDeployment#update}.

---

##### `reset_alerting` <a name="reset_alerting" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetAlerting"></a>

```python
def reset_alerting() -> None
```

##### `reset_archived` <a name="reset_archived" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetArchived"></a>

```python
def reset_archived() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_run_frequency` <a name="reset_run_frequency" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetRunFrequency"></a>

```python
def reset_run_frequency() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ChronicleRuleDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import chronicle_rule_deployment

chronicleRuleDeployment.ChronicleRuleDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import chronicle_rule_deployment

chronicleRuleDeployment.ChronicleRuleDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import chronicle_rule_deployment

chronicleRuleDeployment.ChronicleRuleDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import chronicle_rule_deployment

chronicleRuleDeployment.ChronicleRuleDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ChronicleRuleDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ChronicleRuleDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ChronicleRuleDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ChronicleRuleDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.archiveTime">archive_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.consumerRules">consumer_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.executionState">execution_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.lastAlertStatusChangeTime">last_alert_status_change_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.producerRules">producer_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference">ChronicleRuleDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.alertingInput">alerting_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.archivedInput">archived_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.ruleInput">rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.runFrequencyInput">run_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts">ChronicleRuleDeploymentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.alerting">alerting</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.archived">archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.rule">rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.runFrequency">run_frequency</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `archive_time`<sup>Required</sup> <a name="archive_time" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.archiveTime"></a>

```python
archive_time: str
```

- *Type:* str

---

##### `consumer_rules`<sup>Required</sup> <a name="consumer_rules" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.consumerRules"></a>

```python
consumer_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `execution_state`<sup>Required</sup> <a name="execution_state" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.executionState"></a>

```python
execution_state: str
```

- *Type:* str

---

##### `last_alert_status_change_time`<sup>Required</sup> <a name="last_alert_status_change_time" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.lastAlertStatusChangeTime"></a>

```python
last_alert_status_change_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `producer_rules`<sup>Required</sup> <a name="producer_rules" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.producerRules"></a>

```python
producer_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.timeouts"></a>

```python
timeouts: ChronicleRuleDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference">ChronicleRuleDeploymentTimeoutsOutputReference</a>

---

##### `alerting_input`<sup>Optional</sup> <a name="alerting_input" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.alertingInput"></a>

```python
alerting_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `archived_input`<sup>Optional</sup> <a name="archived_input" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.archivedInput"></a>

```python
archived_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.ruleInput"></a>

```python
rule_input: str
```

- *Type:* str

---

##### `run_frequency_input`<sup>Optional</sup> <a name="run_frequency_input" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.runFrequencyInput"></a>

```python
run_frequency_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ChronicleRuleDeploymentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts">ChronicleRuleDeploymentTimeouts</a>]

---

##### `alerting`<sup>Required</sup> <a name="alerting" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.alerting"></a>

```python
alerting: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.archived"></a>

```python
archived: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.rule"></a>

```python
rule: str
```

- *Type:* str

---

##### `run_frequency`<sup>Required</sup> <a name="run_frequency" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.runFrequency"></a>

```python
run_frequency: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleRuleDeploymentConfig <a name="ChronicleRuleDeploymentConfig" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_rule_deployment

chronicleRuleDeployment.ChronicleRuleDeploymentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance: str,
  location: str,
  rule: str,
  alerting: typing.Union[bool, IResolvable] = None,
  archived: typing.Union[bool, IResolvable] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  run_frequency: str = None,
  timeouts: ChronicleRuleDeploymentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.instance">instance</a></code> | <code>str</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.rule">rule</a></code> | <code>str</code> | The Rule ID of the rule. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.alerting">alerting</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether detections resulting from this deployment should be considered alerts. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.archived">archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The archive state of the rule deployment. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the rule is currently deployed continuously against incoming data. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#id ChronicleRuleDeployment#id}. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#project ChronicleRuleDeployment#project}. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.runFrequency">run_frequency</a></code> | <code>str</code> | The run frequency of the rule deployment. Possible values: LIVE HOURLY DAILY. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts">ChronicleRuleDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#instance ChronicleRuleDeployment#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#location ChronicleRuleDeployment#location}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.rule"></a>

```python
rule: str
```

- *Type:* str

The Rule ID of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#rule ChronicleRuleDeployment#rule}

---

##### `alerting`<sup>Optional</sup> <a name="alerting" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.alerting"></a>

```python
alerting: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether detections resulting from this deployment should be considered alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#alerting ChronicleRuleDeployment#alerting}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.archived"></a>

```python
archived: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The archive state of the rule deployment.

Cannot be set to true unless enabled is set to false i.e.
archiving requires a two-step process: first, disable the rule by
setting 'enabled' to false, then set 'archive' to true.
If set to true, alerting will automatically be set to false.
If currently set to true, enabled, alerting, and run_frequency cannot be
updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#archived ChronicleRuleDeployment#archived}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the rule is currently deployed continuously against incoming data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#enabled ChronicleRuleDeployment#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#id ChronicleRuleDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#project ChronicleRuleDeployment#project}.

---

##### `run_frequency`<sup>Optional</sup> <a name="run_frequency" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.runFrequency"></a>

```python
run_frequency: str
```

- *Type:* str

The run frequency of the rule deployment. Possible values: LIVE HOURLY DAILY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#run_frequency ChronicleRuleDeployment#run_frequency}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.timeouts"></a>

```python
timeouts: ChronicleRuleDeploymentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts">ChronicleRuleDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#timeouts ChronicleRuleDeployment#timeouts}

---

### ChronicleRuleDeploymentTimeouts <a name="ChronicleRuleDeploymentTimeouts" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_rule_deployment

chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#create ChronicleRuleDeployment#create}. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#delete ChronicleRuleDeployment#delete}. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#update ChronicleRuleDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#create ChronicleRuleDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#delete ChronicleRuleDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/chronicle_rule_deployment#update ChronicleRuleDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleRuleDeploymentTimeoutsOutputReference <a name="ChronicleRuleDeploymentTimeoutsOutputReference" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_rule_deployment

chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts">ChronicleRuleDeploymentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ChronicleRuleDeploymentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts">ChronicleRuleDeploymentTimeouts</a>]

---



