# `bigqueryCapacityCommitment` Submodule <a name="`bigqueryCapacityCommitment` Submodule" id="@cdktf/provider-google.bigqueryCapacityCommitment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryCapacityCommitment <a name="BigqueryCapacityCommitment" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment google_bigquery_capacity_commitment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_capacity_commitment

bigqueryCapacityCommitment.BigqueryCapacityCommitment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  plan: str,
  slot_count: typing.Union[int, float],
  capacity_commitment_id: str = None,
  edition: str = None,
  enforce_single_admin_project_per_org: str = None,
  id: str = None,
  location: str = None,
  project: str = None,
  renewal_plan: str = None,
  timeouts: BigqueryCapacityCommitmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.plan">plan</a></code> | <code>str</code> | Capacity commitment plan. Valid values are at https://cloud.google.com/bigquery/docs/reference/reservations/rpc/google.cloud.bigquery.reservation.v1#commitmentplan. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.slotCount">slot_count</a></code> | <code>typing.Union[int, float]</code> | Number of slots in this commitment. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.capacityCommitmentId">capacity_commitment_id</a></code> | <code>str</code> | The optional capacity commitment ID. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.edition">edition</a></code> | <code>str</code> | The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.enforceSingleAdminProjectPerOrg">enforce_single_admin_project_per_org</a></code> | <code>str</code> | If true, fail the request if another project in the organization has a capacity commitment. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#id BigqueryCapacityCommitment#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#project BigqueryCapacityCommitment#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.renewalPlan">renewal_plan</a></code> | <code>str</code> | The plan this capacity commitment is converted to after commitmentEndTime passes. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.plan"></a>

- *Type:* str

Capacity commitment plan. Valid values are at https://cloud.google.com/bigquery/docs/reference/reservations/rpc/google.cloud.bigquery.reservation.v1#commitmentplan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#plan BigqueryCapacityCommitment#plan}

---

##### `slot_count`<sup>Required</sup> <a name="slot_count" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.slotCount"></a>

- *Type:* typing.Union[int, float]

Number of slots in this commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#slot_count BigqueryCapacityCommitment#slot_count}

---

##### `capacity_commitment_id`<sup>Optional</sup> <a name="capacity_commitment_id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.capacityCommitmentId"></a>

- *Type:* str

The optional capacity commitment ID.

Capacity commitment name will be generated automatically if this field is
empty. This field must only contain lower case alphanumeric characters or dashes. The first and last character
cannot be a dash. Max length is 64 characters. NOTE: this ID won't be kept if the capacity commitment is split
or merged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#capacity_commitment_id BigqueryCapacityCommitment#capacity_commitment_id}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.edition"></a>

- *Type:* str

The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#edition BigqueryCapacityCommitment#edition}

---

##### `enforce_single_admin_project_per_org`<sup>Optional</sup> <a name="enforce_single_admin_project_per_org" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.enforceSingleAdminProjectPerOrg"></a>

- *Type:* str

If true, fail the request if another project in the organization has a capacity commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#enforce_single_admin_project_per_org BigqueryCapacityCommitment#enforce_single_admin_project_per_org}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#id BigqueryCapacityCommitment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.location"></a>

- *Type:* str

The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#location BigqueryCapacityCommitment#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#project BigqueryCapacityCommitment#project}.

---

##### `renewal_plan`<sup>Optional</sup> <a name="renewal_plan" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.renewalPlan"></a>

- *Type:* str

The plan this capacity commitment is converted to after commitmentEndTime passes.

Once the plan is changed, committed period is extended according to commitment plan. Only applicable for some commitment plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#renewal_plan BigqueryCapacityCommitment#renewal_plan}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#timeouts BigqueryCapacityCommitment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetCapacityCommitmentId">reset_capacity_commitment_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetEdition">reset_edition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetEnforceSingleAdminProjectPerOrg">reset_enforce_single_admin_project_per_org</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetRenewalPlan">reset_renewal_plan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#create BigqueryCapacityCommitment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#delete BigqueryCapacityCommitment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#update BigqueryCapacityCommitment#update}.

---

##### `reset_capacity_commitment_id` <a name="reset_capacity_commitment_id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetCapacityCommitmentId"></a>

```python
def reset_capacity_commitment_id() -> None
```

##### `reset_edition` <a name="reset_edition" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetEdition"></a>

```python
def reset_edition() -> None
```

##### `reset_enforce_single_admin_project_per_org` <a name="reset_enforce_single_admin_project_per_org" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetEnforceSingleAdminProjectPerOrg"></a>

```python
def reset_enforce_single_admin_project_per_org() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_renewal_plan` <a name="reset_renewal_plan" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetRenewalPlan"></a>

```python
def reset_renewal_plan() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BigqueryCapacityCommitment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import bigquery_capacity_commitment

bigqueryCapacityCommitment.BigqueryCapacityCommitment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import bigquery_capacity_commitment

bigqueryCapacityCommitment.BigqueryCapacityCommitment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import bigquery_capacity_commitment

bigqueryCapacityCommitment.BigqueryCapacityCommitment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import bigquery_capacity_commitment

bigqueryCapacityCommitment.BigqueryCapacityCommitment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BigqueryCapacityCommitment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BigqueryCapacityCommitment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BigqueryCapacityCommitment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryCapacityCommitment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.commitmentEndTime">commitment_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.commitmentStartTime">commitment_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference">BigqueryCapacityCommitmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.capacityCommitmentIdInput">capacity_commitment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.editionInput">edition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.enforceSingleAdminProjectPerOrgInput">enforce_single_admin_project_per_org_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.planInput">plan_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.renewalPlanInput">renewal_plan_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.slotCountInput">slot_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.capacityCommitmentId">capacity_commitment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.edition">edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.enforceSingleAdminProjectPerOrg">enforce_single_admin_project_per_org</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.plan">plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.renewalPlan">renewal_plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.slotCount">slot_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `commitment_end_time`<sup>Required</sup> <a name="commitment_end_time" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.commitmentEndTime"></a>

```python
commitment_end_time: str
```

- *Type:* str

---

##### `commitment_start_time`<sup>Required</sup> <a name="commitment_start_time" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.commitmentStartTime"></a>

```python
commitment_start_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.timeouts"></a>

```python
timeouts: BigqueryCapacityCommitmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference">BigqueryCapacityCommitmentTimeoutsOutputReference</a>

---

##### `capacity_commitment_id_input`<sup>Optional</sup> <a name="capacity_commitment_id_input" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.capacityCommitmentIdInput"></a>

```python
capacity_commitment_id_input: str
```

- *Type:* str

---

##### `edition_input`<sup>Optional</sup> <a name="edition_input" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.editionInput"></a>

```python
edition_input: str
```

- *Type:* str

---

##### `enforce_single_admin_project_per_org_input`<sup>Optional</sup> <a name="enforce_single_admin_project_per_org_input" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.enforceSingleAdminProjectPerOrgInput"></a>

```python
enforce_single_admin_project_per_org_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `plan_input`<sup>Optional</sup> <a name="plan_input" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.planInput"></a>

```python
plan_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `renewal_plan_input`<sup>Optional</sup> <a name="renewal_plan_input" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.renewalPlanInput"></a>

```python
renewal_plan_input: str
```

- *Type:* str

---

##### `slot_count_input`<sup>Optional</sup> <a name="slot_count_input" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.slotCountInput"></a>

```python
slot_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BigqueryCapacityCommitmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a>]

---

##### `capacity_commitment_id`<sup>Required</sup> <a name="capacity_commitment_id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.capacityCommitmentId"></a>

```python
capacity_commitment_id: str
```

- *Type:* str

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.edition"></a>

```python
edition: str
```

- *Type:* str

---

##### `enforce_single_admin_project_per_org`<sup>Required</sup> <a name="enforce_single_admin_project_per_org" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.enforceSingleAdminProjectPerOrg"></a>

```python
enforce_single_admin_project_per_org: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.plan"></a>

```python
plan: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `renewal_plan`<sup>Required</sup> <a name="renewal_plan" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.renewalPlan"></a>

```python
renewal_plan: str
```

- *Type:* str

---

##### `slot_count`<sup>Required</sup> <a name="slot_count" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.slotCount"></a>

```python
slot_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryCapacityCommitmentConfig <a name="BigqueryCapacityCommitmentConfig" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_capacity_commitment

bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  plan: str,
  slot_count: typing.Union[int, float],
  capacity_commitment_id: str = None,
  edition: str = None,
  enforce_single_admin_project_per_org: str = None,
  id: str = None,
  location: str = None,
  project: str = None,
  renewal_plan: str = None,
  timeouts: BigqueryCapacityCommitmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.plan">plan</a></code> | <code>str</code> | Capacity commitment plan. Valid values are at https://cloud.google.com/bigquery/docs/reference/reservations/rpc/google.cloud.bigquery.reservation.v1#commitmentplan. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.slotCount">slot_count</a></code> | <code>typing.Union[int, float]</code> | Number of slots in this commitment. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.capacityCommitmentId">capacity_commitment_id</a></code> | <code>str</code> | The optional capacity commitment ID. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.edition">edition</a></code> | <code>str</code> | The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.enforceSingleAdminProjectPerOrg">enforce_single_admin_project_per_org</a></code> | <code>str</code> | If true, fail the request if another project in the organization has a capacity commitment. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#id BigqueryCapacityCommitment#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.location">location</a></code> | <code>str</code> | The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#project BigqueryCapacityCommitment#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.renewalPlan">renewal_plan</a></code> | <code>str</code> | The plan this capacity commitment is converted to after commitmentEndTime passes. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.plan"></a>

```python
plan: str
```

- *Type:* str

Capacity commitment plan. Valid values are at https://cloud.google.com/bigquery/docs/reference/reservations/rpc/google.cloud.bigquery.reservation.v1#commitmentplan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#plan BigqueryCapacityCommitment#plan}

---

##### `slot_count`<sup>Required</sup> <a name="slot_count" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.slotCount"></a>

```python
slot_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of slots in this commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#slot_count BigqueryCapacityCommitment#slot_count}

---

##### `capacity_commitment_id`<sup>Optional</sup> <a name="capacity_commitment_id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.capacityCommitmentId"></a>

```python
capacity_commitment_id: str
```

- *Type:* str

The optional capacity commitment ID.

Capacity commitment name will be generated automatically if this field is
empty. This field must only contain lower case alphanumeric characters or dashes. The first and last character
cannot be a dash. Max length is 64 characters. NOTE: this ID won't be kept if the capacity commitment is split
or merged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#capacity_commitment_id BigqueryCapacityCommitment#capacity_commitment_id}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.edition"></a>

```python
edition: str
```

- *Type:* str

The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#edition BigqueryCapacityCommitment#edition}

---

##### `enforce_single_admin_project_per_org`<sup>Optional</sup> <a name="enforce_single_admin_project_per_org" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.enforceSingleAdminProjectPerOrg"></a>

```python
enforce_single_admin_project_per_org: str
```

- *Type:* str

If true, fail the request if another project in the organization has a capacity commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#enforce_single_admin_project_per_org BigqueryCapacityCommitment#enforce_single_admin_project_per_org}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#id BigqueryCapacityCommitment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#location BigqueryCapacityCommitment#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#project BigqueryCapacityCommitment#project}.

---

##### `renewal_plan`<sup>Optional</sup> <a name="renewal_plan" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.renewalPlan"></a>

```python
renewal_plan: str
```

- *Type:* str

The plan this capacity commitment is converted to after commitmentEndTime passes.

Once the plan is changed, committed period is extended according to commitment plan. Only applicable for some commitment plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#renewal_plan BigqueryCapacityCommitment#renewal_plan}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.timeouts"></a>

```python
timeouts: BigqueryCapacityCommitmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#timeouts BigqueryCapacityCommitment#timeouts}

---

### BigqueryCapacityCommitmentTimeouts <a name="BigqueryCapacityCommitmentTimeouts" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_capacity_commitment

bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#create BigqueryCapacityCommitment#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#delete BigqueryCapacityCommitment#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#update BigqueryCapacityCommitment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#create BigqueryCapacityCommitment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#delete BigqueryCapacityCommitment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/bigquery_capacity_commitment#update BigqueryCapacityCommitment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryCapacityCommitmentTimeoutsOutputReference <a name="BigqueryCapacityCommitmentTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_capacity_commitment

bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BigqueryCapacityCommitmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a>]

---



