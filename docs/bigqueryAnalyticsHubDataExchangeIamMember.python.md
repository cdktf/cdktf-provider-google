# `bigqueryAnalyticsHubDataExchangeIamMember` Submodule <a name="`bigqueryAnalyticsHubDataExchangeIamMember` Submodule" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryAnalyticsHubDataExchangeIamMember <a name="BigqueryAnalyticsHubDataExchangeIamMember" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member google_bigquery_analytics_hub_data_exchange_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_data_exchange_iam_member

bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_exchange_id: str,
  member: str,
  role: str,
  condition: BigqueryAnalyticsHubDataExchangeIamMemberCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#data_exchange_id BigqueryAnalyticsHubDataExchangeIamMember#data_exchange_id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#member BigqueryAnalyticsHubDataExchangeIamMember#member}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#role BigqueryAnalyticsHubDataExchangeIamMember#role}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition">BigqueryAnalyticsHubDataExchangeIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#id BigqueryAnalyticsHubDataExchangeIamMember#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#location BigqueryAnalyticsHubDataExchangeIamMember#location}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#project BigqueryAnalyticsHubDataExchangeIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.dataExchangeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#data_exchange_id BigqueryAnalyticsHubDataExchangeIamMember#data_exchange_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.member"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#member BigqueryAnalyticsHubDataExchangeIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#role BigqueryAnalyticsHubDataExchangeIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition">BigqueryAnalyticsHubDataExchangeIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#condition BigqueryAnalyticsHubDataExchangeIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#id BigqueryAnalyticsHubDataExchangeIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#location BigqueryAnalyticsHubDataExchangeIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#project BigqueryAnalyticsHubDataExchangeIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#expression BigqueryAnalyticsHubDataExchangeIamMember#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#title BigqueryAnalyticsHubDataExchangeIamMember#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#description BigqueryAnalyticsHubDataExchangeIamMember#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BigqueryAnalyticsHubDataExchangeIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_data_exchange_iam_member

bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_data_exchange_iam_member

bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_data_exchange_iam_member

bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_data_exchange_iam_member

bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BigqueryAnalyticsHubDataExchangeIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BigqueryAnalyticsHubDataExchangeIamMember to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BigqueryAnalyticsHubDataExchangeIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryAnalyticsHubDataExchangeIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference">BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition">BigqueryAnalyticsHubDataExchangeIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.dataExchangeIdInput">data_exchange_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.memberInput">member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.condition"></a>

```python
condition: BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference">BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.conditionInput"></a>

```python
condition_input: BigqueryAnalyticsHubDataExchangeIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition">BigqueryAnalyticsHubDataExchangeIamMemberCondition</a>

---

##### `data_exchange_id_input`<sup>Optional</sup> <a name="data_exchange_id_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.dataExchangeIdInput"></a>

```python
data_exchange_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.memberInput"></a>

```python
member_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.dataExchangeId"></a>

```python
data_exchange_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryAnalyticsHubDataExchangeIamMemberCondition <a name="BigqueryAnalyticsHubDataExchangeIamMemberCondition" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_data_exchange_iam_member

bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#expression BigqueryAnalyticsHubDataExchangeIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#title BigqueryAnalyticsHubDataExchangeIamMember#title}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#description BigqueryAnalyticsHubDataExchangeIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#expression BigqueryAnalyticsHubDataExchangeIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#title BigqueryAnalyticsHubDataExchangeIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#description BigqueryAnalyticsHubDataExchangeIamMember#description}.

---

### BigqueryAnalyticsHubDataExchangeIamMemberConfig <a name="BigqueryAnalyticsHubDataExchangeIamMemberConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_data_exchange_iam_member

bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_exchange_id: str,
  member: str,
  role: str,
  condition: BigqueryAnalyticsHubDataExchangeIamMemberCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#data_exchange_id BigqueryAnalyticsHubDataExchangeIamMember#data_exchange_id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#member BigqueryAnalyticsHubDataExchangeIamMember#member}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#role BigqueryAnalyticsHubDataExchangeIamMember#role}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition">BigqueryAnalyticsHubDataExchangeIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#id BigqueryAnalyticsHubDataExchangeIamMember#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#location BigqueryAnalyticsHubDataExchangeIamMember#location}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#project BigqueryAnalyticsHubDataExchangeIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.dataExchangeId"></a>

```python
data_exchange_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#data_exchange_id BigqueryAnalyticsHubDataExchangeIamMember#data_exchange_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.member"></a>

```python
member: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#member BigqueryAnalyticsHubDataExchangeIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#role BigqueryAnalyticsHubDataExchangeIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.condition"></a>

```python
condition: BigqueryAnalyticsHubDataExchangeIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition">BigqueryAnalyticsHubDataExchangeIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#condition BigqueryAnalyticsHubDataExchangeIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#id BigqueryAnalyticsHubDataExchangeIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#location BigqueryAnalyticsHubDataExchangeIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_member#project BigqueryAnalyticsHubDataExchangeIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference <a name="BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_data_exchange_iam_member

bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition">BigqueryAnalyticsHubDataExchangeIamMemberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberConditionOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryAnalyticsHubDataExchangeIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamMember.BigqueryAnalyticsHubDataExchangeIamMemberCondition">BigqueryAnalyticsHubDataExchangeIamMemberCondition</a>

---



