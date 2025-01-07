# `spannerInstance` Submodule <a name="`spannerInstance` Submodule" id="@cdktf/provider-google.spannerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpannerInstance <a name="SpannerInstance" id="@cdktf/provider-google.spannerInstance.SpannerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance google_spanner_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance

spannerInstance.SpannerInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config: str,
  display_name: str,
  autoscaling_config: SpannerInstanceAutoscalingConfig = None,
  default_backup_schedule_type: str = None,
  edition: str = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  num_nodes: typing.Union[int, float] = None,
  processing_units: typing.Union[int, float] = None,
  project: str = None,
  timeouts: SpannerInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.config">config</a></code> | <code>str</code> | The name of the instance's configuration (similar but not quite the same as a region) which defines the geographic placement and replication of your databases in this instance. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The descriptive name for this instance as it appears in UIs. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.autoscalingConfig">autoscaling_config</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig">SpannerInstanceAutoscalingConfig</a></code> | autoscaling_config block. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.defaultBackupScheduleType">default_backup_schedule_type</a></code> | <code>str</code> | Controls the default backup behavior for new databases within the instance. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.edition">edition</a></code> | <code>str</code> | The edition selected for this instance. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When deleting a spanner instance, this boolean option will delete all backups of this instance. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#id SpannerInstance#id}. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | A unique identifier for the instance, which cannot be changed after the instance is created. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.numNodes">num_nodes</a></code> | <code>typing.Union[int, float]</code> | The number of nodes allocated to this instance. Exactly one of either node_count or processing_units must be present in terraform. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.processingUnits">processing_units</a></code> | <code>typing.Union[int, float]</code> | The number of processing units allocated to this instance. Exactly one of processing_units or node_count must be present in terraform. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#project SpannerInstance#project}. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts">SpannerInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.config"></a>

- *Type:* str

The name of the instance's configuration (similar but not quite the same as a region) which defines the geographic placement and replication of your databases in this instance.

It determines where your data
is stored. Values are typically of the form 'regional-europe-west1' , 'us-central' etc.
In order to obtain a valid list please consult the
[Configuration section of the docs](https://cloud.google.com/spanner/docs/instances).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#config SpannerInstance#config}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.displayName"></a>

- *Type:* str

The descriptive name for this instance as it appears in UIs.

Must be
unique per project and between 4 and 30 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#display_name SpannerInstance#display_name}

---

##### `autoscaling_config`<sup>Optional</sup> <a name="autoscaling_config" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.autoscalingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig">SpannerInstanceAutoscalingConfig</a>

autoscaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#autoscaling_config SpannerInstance#autoscaling_config}

---

##### `default_backup_schedule_type`<sup>Optional</sup> <a name="default_backup_schedule_type" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.defaultBackupScheduleType"></a>

- *Type:* str

Controls the default backup behavior for new databases within the instance.

Note that 'AUTOMATIC' is not permitted for free instances, as backups and backup schedules are not allowed for free instances.
if unset or NONE, no default backup schedule will be created for new databases within the instance. Possible values: ["NONE", "AUTOMATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#default_backup_schedule_type SpannerInstance#default_backup_schedule_type}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.edition"></a>

- *Type:* str

The edition selected for this instance.

Different editions provide different capabilities at different price points. Possible values: ["EDITION_UNSPECIFIED", "STANDARD", "ENTERPRISE", "ENTERPRISE_PLUS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#edition SpannerInstance#edition}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When deleting a spanner instance, this boolean option will delete all backups of this instance.

This must be set to true if you created a backup manually in the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#force_destroy SpannerInstance#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#id SpannerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#labels SpannerInstance#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.name"></a>

- *Type:* str

A unique identifier for the instance, which cannot be changed after the instance is created.

The name must be between 6 and 30 characters
in length.
If not provided, a random string starting with 'tf-' will be selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#name SpannerInstance#name}

---

##### `num_nodes`<sup>Optional</sup> <a name="num_nodes" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.numNodes"></a>

- *Type:* typing.Union[int, float]

The number of nodes allocated to this instance. Exactly one of either node_count or processing_units must be present in terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#num_nodes SpannerInstance#num_nodes}

---

##### `processing_units`<sup>Optional</sup> <a name="processing_units" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.processingUnits"></a>

- *Type:* typing.Union[int, float]

The number of processing units allocated to this instance. Exactly one of processing_units or node_count must be present in terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#processing_units SpannerInstance#processing_units}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#project SpannerInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.spannerInstance.SpannerInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts">SpannerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#timeouts SpannerInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.putAutoscalingConfig">put_autoscaling_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.resetAutoscalingConfig">reset_autoscaling_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.resetDefaultBackupScheduleType">reset_default_backup_schedule_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.resetEdition">reset_edition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.resetNumNodes">reset_num_nodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.resetProcessingUnits">reset_processing_units</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.spannerInstance.SpannerInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.spannerInstance.SpannerInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.spannerInstance.SpannerInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerInstance.SpannerInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.spannerInstance.SpannerInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.spannerInstance.SpannerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.spannerInstance.SpannerInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.spannerInstance.SpannerInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.spannerInstance.SpannerInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.spannerInstance.SpannerInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.spannerInstance.SpannerInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.spannerInstance.SpannerInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.spannerInstance.SpannerInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.spannerInstance.SpannerInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerInstance.SpannerInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerInstance.SpannerInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.spannerInstance.SpannerInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerInstance.SpannerInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.spannerInstance.SpannerInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.spannerInstance.SpannerInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.spannerInstance.SpannerInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.spannerInstance.SpannerInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerInstance.SpannerInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_autoscaling_config` <a name="put_autoscaling_config" id="@cdktf/provider-google.spannerInstance.SpannerInstance.putAutoscalingConfig"></a>

```python
def put_autoscaling_config(
  asymmetric_autoscaling_options: typing.Union[IResolvable, typing.List[SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions]] = None,
  autoscaling_limits: SpannerInstanceAutoscalingConfigAutoscalingLimits = None,
  autoscaling_targets: SpannerInstanceAutoscalingConfigAutoscalingTargets = None
) -> None
```

###### `asymmetric_autoscaling_options`<sup>Optional</sup> <a name="asymmetric_autoscaling_options" id="@cdktf/provider-google.spannerInstance.SpannerInstance.putAutoscalingConfig.parameter.asymmetricAutoscalingOptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>]]

asymmetric_autoscaling_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#asymmetric_autoscaling_options SpannerInstance#asymmetric_autoscaling_options}

---

###### `autoscaling_limits`<sup>Optional</sup> <a name="autoscaling_limits" id="@cdktf/provider-google.spannerInstance.SpannerInstance.putAutoscalingConfig.parameter.autoscalingLimits"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits">SpannerInstanceAutoscalingConfigAutoscalingLimits</a>

autoscaling_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#autoscaling_limits SpannerInstance#autoscaling_limits}

---

###### `autoscaling_targets`<sup>Optional</sup> <a name="autoscaling_targets" id="@cdktf/provider-google.spannerInstance.SpannerInstance.putAutoscalingConfig.parameter.autoscalingTargets"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets">SpannerInstanceAutoscalingConfigAutoscalingTargets</a>

autoscaling_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#autoscaling_targets SpannerInstance#autoscaling_targets}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.spannerInstance.SpannerInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.spannerInstance.SpannerInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#create SpannerInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.spannerInstance.SpannerInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#delete SpannerInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.spannerInstance.SpannerInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#update SpannerInstance#update}.

---

##### `reset_autoscaling_config` <a name="reset_autoscaling_config" id="@cdktf/provider-google.spannerInstance.SpannerInstance.resetAutoscalingConfig"></a>

```python
def reset_autoscaling_config() -> None
```

##### `reset_default_backup_schedule_type` <a name="reset_default_backup_schedule_type" id="@cdktf/provider-google.spannerInstance.SpannerInstance.resetDefaultBackupScheduleType"></a>

```python
def reset_default_backup_schedule_type() -> None
```

##### `reset_edition` <a name="reset_edition" id="@cdktf/provider-google.spannerInstance.SpannerInstance.resetEdition"></a>

```python
def reset_edition() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-google.spannerInstance.SpannerInstance.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.spannerInstance.SpannerInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.spannerInstance.SpannerInstance.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.spannerInstance.SpannerInstance.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_num_nodes` <a name="reset_num_nodes" id="@cdktf/provider-google.spannerInstance.SpannerInstance.resetNumNodes"></a>

```python
def reset_num_nodes() -> None
```

##### `reset_processing_units` <a name="reset_processing_units" id="@cdktf/provider-google.spannerInstance.SpannerInstance.resetProcessingUnits"></a>

```python
def reset_processing_units() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.spannerInstance.SpannerInstance.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.spannerInstance.SpannerInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SpannerInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.spannerInstance.SpannerInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance

spannerInstance.SpannerInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerInstance.SpannerInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.spannerInstance.SpannerInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance

spannerInstance.SpannerInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerInstance.SpannerInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.spannerInstance.SpannerInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance

spannerInstance.SpannerInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerInstance.SpannerInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.spannerInstance.SpannerInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance

spannerInstance.SpannerInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SpannerInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.spannerInstance.SpannerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.spannerInstance.SpannerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SpannerInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.spannerInstance.SpannerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SpannerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerInstance.SpannerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpannerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.autoscalingConfig">autoscaling_config</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference">SpannerInstanceAutoscalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference">SpannerInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.autoscalingConfigInput">autoscaling_config_input</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig">SpannerInstanceAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.configInput">config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.defaultBackupScheduleTypeInput">default_backup_schedule_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.editionInput">edition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.numNodesInput">num_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.processingUnitsInput">processing_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts">SpannerInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.config">config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.defaultBackupScheduleType">default_backup_schedule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.edition">edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.numNodes">num_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.processingUnits">processing_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaling_config`<sup>Required</sup> <a name="autoscaling_config" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.autoscalingConfig"></a>

```python
autoscaling_config: SpannerInstanceAutoscalingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference">SpannerInstanceAutoscalingConfigOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.timeouts"></a>

```python
timeouts: SpannerInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference">SpannerInstanceTimeoutsOutputReference</a>

---

##### `autoscaling_config_input`<sup>Optional</sup> <a name="autoscaling_config_input" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.autoscalingConfigInput"></a>

```python
autoscaling_config_input: SpannerInstanceAutoscalingConfig
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig">SpannerInstanceAutoscalingConfig</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.configInput"></a>

```python
config_input: str
```

- *Type:* str

---

##### `default_backup_schedule_type_input`<sup>Optional</sup> <a name="default_backup_schedule_type_input" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.defaultBackupScheduleTypeInput"></a>

```python
default_backup_schedule_type_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `edition_input`<sup>Optional</sup> <a name="edition_input" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.editionInput"></a>

```python
edition_input: str
```

- *Type:* str

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `num_nodes_input`<sup>Optional</sup> <a name="num_nodes_input" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.numNodesInput"></a>

```python
num_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `processing_units_input`<sup>Optional</sup> <a name="processing_units_input" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.processingUnitsInput"></a>

```python
processing_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SpannerInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts">SpannerInstanceTimeouts</a>]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.config"></a>

```python
config: str
```

- *Type:* str

---

##### `default_backup_schedule_type`<sup>Required</sup> <a name="default_backup_schedule_type" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.defaultBackupScheduleType"></a>

```python
default_backup_schedule_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.edition"></a>

```python
edition: str
```

- *Type:* str

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `num_nodes`<sup>Required</sup> <a name="num_nodes" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.numNodes"></a>

```python
num_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `processing_units`<sup>Required</sup> <a name="processing_units" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.processingUnits"></a>

```python
processing_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.spannerInstance.SpannerInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SpannerInstanceAutoscalingConfig <a name="SpannerInstanceAutoscalingConfig" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance

spannerInstance.SpannerInstanceAutoscalingConfig(
  asymmetric_autoscaling_options: typing.Union[IResolvable, typing.List[SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions]] = None,
  autoscaling_limits: SpannerInstanceAutoscalingConfigAutoscalingLimits = None,
  autoscaling_targets: SpannerInstanceAutoscalingConfigAutoscalingTargets = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig.property.asymmetricAutoscalingOptions">asymmetric_autoscaling_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>]]</code> | asymmetric_autoscaling_options block. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig.property.autoscalingLimits">autoscaling_limits</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits">SpannerInstanceAutoscalingConfigAutoscalingLimits</a></code> | autoscaling_limits block. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig.property.autoscalingTargets">autoscaling_targets</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets">SpannerInstanceAutoscalingConfigAutoscalingTargets</a></code> | autoscaling_targets block. |

---

##### `asymmetric_autoscaling_options`<sup>Optional</sup> <a name="asymmetric_autoscaling_options" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig.property.asymmetricAutoscalingOptions"></a>

```python
asymmetric_autoscaling_options: typing.Union[IResolvable, typing.List[SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>]]

asymmetric_autoscaling_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#asymmetric_autoscaling_options SpannerInstance#asymmetric_autoscaling_options}

---

##### `autoscaling_limits`<sup>Optional</sup> <a name="autoscaling_limits" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig.property.autoscalingLimits"></a>

```python
autoscaling_limits: SpannerInstanceAutoscalingConfigAutoscalingLimits
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits">SpannerInstanceAutoscalingConfigAutoscalingLimits</a>

autoscaling_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#autoscaling_limits SpannerInstance#autoscaling_limits}

---

##### `autoscaling_targets`<sup>Optional</sup> <a name="autoscaling_targets" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig.property.autoscalingTargets"></a>

```python
autoscaling_targets: SpannerInstanceAutoscalingConfigAutoscalingTargets
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets">SpannerInstanceAutoscalingConfigAutoscalingTargets</a>

autoscaling_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#autoscaling_targets SpannerInstance#autoscaling_targets}

---

### SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions <a name="SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance

spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions(
  overrides: SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides,
  replica_selection: SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a></code> | overrides block. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions.property.replicaSelection">replica_selection</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a></code> | replica_selection block. |

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions.property.overrides"></a>

```python
overrides: SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a>

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#overrides SpannerInstance#overrides}

---

##### `replica_selection`<sup>Required</sup> <a name="replica_selection" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions.property.replicaSelection"></a>

```python
replica_selection: SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a>

replica_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#replica_selection SpannerInstance#replica_selection}

---

### SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides <a name="SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance

spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides(
  autoscaling_limits: SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides.property.autoscalingLimits">autoscaling_limits</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a></code> | autoscaling_limits block. |

---

##### `autoscaling_limits`<sup>Required</sup> <a name="autoscaling_limits" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides.property.autoscalingLimits"></a>

```python
autoscaling_limits: SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a>

autoscaling_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#autoscaling_limits SpannerInstance#autoscaling_limits}

---

### SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits <a name="SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance

spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits(
  max_nodes: typing.Union[int, float],
  min_nodes: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.property.maxNodes">max_nodes</a></code> | <code>typing.Union[int, float]</code> | The maximum number of nodes for this specific replica. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.property.minNodes">min_nodes</a></code> | <code>typing.Union[int, float]</code> | The minimum number of nodes for this specific replica. |

---

##### `max_nodes`<sup>Required</sup> <a name="max_nodes" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.property.maxNodes"></a>

```python
max_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of nodes for this specific replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#max_nodes SpannerInstance#max_nodes}

---

##### `min_nodes`<sup>Required</sup> <a name="min_nodes" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.property.minNodes"></a>

```python
min_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of nodes for this specific replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#min_nodes SpannerInstance#min_nodes}

---

### SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection <a name="SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance

spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection(
  location: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection.property.location">location</a></code> | <code>str</code> | The location of the replica to apply asymmetric autoscaling options. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the replica to apply asymmetric autoscaling options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#location SpannerInstance#location}

---

### SpannerInstanceAutoscalingConfigAutoscalingLimits <a name="SpannerInstanceAutoscalingConfigAutoscalingLimits" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance

spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits(
  max_nodes: typing.Union[int, float] = None,
  max_processing_units: typing.Union[int, float] = None,
  min_nodes: typing.Union[int, float] = None,
  min_processing_units: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits.property.maxNodes">max_nodes</a></code> | <code>typing.Union[int, float]</code> | Specifies maximum number of nodes allocated to the instance. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits.property.maxProcessingUnits">max_processing_units</a></code> | <code>typing.Union[int, float]</code> | Specifies maximum number of processing units allocated to the instance. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits.property.minNodes">min_nodes</a></code> | <code>typing.Union[int, float]</code> | Specifies number of nodes allocated to the instance. If set, this number should be greater than or equal to 1. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits.property.minProcessingUnits">min_processing_units</a></code> | <code>typing.Union[int, float]</code> | Specifies minimum number of processing units allocated to the instance. If set, this number should be multiples of 1000. |

---

##### `max_nodes`<sup>Optional</sup> <a name="max_nodes" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits.property.maxNodes"></a>

```python
max_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies maximum number of nodes allocated to the instance.

If set, this number
should be greater than or equal to min_nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#max_nodes SpannerInstance#max_nodes}

---

##### `max_processing_units`<sup>Optional</sup> <a name="max_processing_units" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits.property.maxProcessingUnits"></a>

```python
max_processing_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies maximum number of processing units allocated to the instance.

If set, this number should be multiples of 1000 and be greater than or equal to
min_processing_units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#max_processing_units SpannerInstance#max_processing_units}

---

##### `min_nodes`<sup>Optional</sup> <a name="min_nodes" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits.property.minNodes"></a>

```python
min_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies number of nodes allocated to the instance. If set, this number should be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#min_nodes SpannerInstance#min_nodes}

---

##### `min_processing_units`<sup>Optional</sup> <a name="min_processing_units" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits.property.minProcessingUnits"></a>

```python
min_processing_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies minimum number of processing units allocated to the instance. If set, this number should be multiples of 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#min_processing_units SpannerInstance#min_processing_units}

---

### SpannerInstanceAutoscalingConfigAutoscalingTargets <a name="SpannerInstanceAutoscalingConfigAutoscalingTargets" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance

spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets(
  high_priority_cpu_utilization_percent: typing.Union[int, float] = None,
  storage_utilization_percent: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets.property.highPriorityCpuUtilizationPercent">high_priority_cpu_utilization_percent</a></code> | <code>typing.Union[int, float]</code> | Specifies the target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets.property.storageUtilizationPercent">storage_utilization_percent</a></code> | <code>typing.Union[int, float]</code> | Specifies the target storage utilization percentage that the autoscaler should be trying to achieve for the instance. |

---

##### `high_priority_cpu_utilization_percent`<sup>Optional</sup> <a name="high_priority_cpu_utilization_percent" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets.property.highPriorityCpuUtilizationPercent"></a>

```python
high_priority_cpu_utilization_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance.

This number is on a scale from 0 (no utilization) to 100 (full utilization)..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#high_priority_cpu_utilization_percent SpannerInstance#high_priority_cpu_utilization_percent}

---

##### `storage_utilization_percent`<sup>Optional</sup> <a name="storage_utilization_percent" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets.property.storageUtilizationPercent"></a>

```python
storage_utilization_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the target storage utilization percentage that the autoscaler should be trying to achieve for the instance.

This number is on a scale from 0 (no utilization) to 100 (full utilization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#storage_utilization_percent SpannerInstance#storage_utilization_percent}

---

### SpannerInstanceConfig <a name="SpannerInstanceConfig" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance

spannerInstance.SpannerInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config: str,
  display_name: str,
  autoscaling_config: SpannerInstanceAutoscalingConfig = None,
  default_backup_schedule_type: str = None,
  edition: str = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  num_nodes: typing.Union[int, float] = None,
  processing_units: typing.Union[int, float] = None,
  project: str = None,
  timeouts: SpannerInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.config">config</a></code> | <code>str</code> | The name of the instance's configuration (similar but not quite the same as a region) which defines the geographic placement and replication of your databases in this instance. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.displayName">display_name</a></code> | <code>str</code> | The descriptive name for this instance as it appears in UIs. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.autoscalingConfig">autoscaling_config</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig">SpannerInstanceAutoscalingConfig</a></code> | autoscaling_config block. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.defaultBackupScheduleType">default_backup_schedule_type</a></code> | <code>str</code> | Controls the default backup behavior for new databases within the instance. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.edition">edition</a></code> | <code>str</code> | The edition selected for this instance. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When deleting a spanner instance, this boolean option will delete all backups of this instance. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#id SpannerInstance#id}. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.name">name</a></code> | <code>str</code> | A unique identifier for the instance, which cannot be changed after the instance is created. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.numNodes">num_nodes</a></code> | <code>typing.Union[int, float]</code> | The number of nodes allocated to this instance. Exactly one of either node_count or processing_units must be present in terraform. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.processingUnits">processing_units</a></code> | <code>typing.Union[int, float]</code> | The number of processing units allocated to this instance. Exactly one of processing_units or node_count must be present in terraform. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#project SpannerInstance#project}. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts">SpannerInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.config"></a>

```python
config: str
```

- *Type:* str

The name of the instance's configuration (similar but not quite the same as a region) which defines the geographic placement and replication of your databases in this instance.

It determines where your data
is stored. Values are typically of the form 'regional-europe-west1' , 'us-central' etc.
In order to obtain a valid list please consult the
[Configuration section of the docs](https://cloud.google.com/spanner/docs/instances).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#config SpannerInstance#config}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The descriptive name for this instance as it appears in UIs.

Must be
unique per project and between 4 and 30 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#display_name SpannerInstance#display_name}

---

##### `autoscaling_config`<sup>Optional</sup> <a name="autoscaling_config" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.autoscalingConfig"></a>

```python
autoscaling_config: SpannerInstanceAutoscalingConfig
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig">SpannerInstanceAutoscalingConfig</a>

autoscaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#autoscaling_config SpannerInstance#autoscaling_config}

---

##### `default_backup_schedule_type`<sup>Optional</sup> <a name="default_backup_schedule_type" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.defaultBackupScheduleType"></a>

```python
default_backup_schedule_type: str
```

- *Type:* str

Controls the default backup behavior for new databases within the instance.

Note that 'AUTOMATIC' is not permitted for free instances, as backups and backup schedules are not allowed for free instances.
if unset or NONE, no default backup schedule will be created for new databases within the instance. Possible values: ["NONE", "AUTOMATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#default_backup_schedule_type SpannerInstance#default_backup_schedule_type}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.edition"></a>

```python
edition: str
```

- *Type:* str

The edition selected for this instance.

Different editions provide different capabilities at different price points. Possible values: ["EDITION_UNSPECIFIED", "STANDARD", "ENTERPRISE", "ENTERPRISE_PLUS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#edition SpannerInstance#edition}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When deleting a spanner instance, this boolean option will delete all backups of this instance.

This must be set to true if you created a backup manually in the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#force_destroy SpannerInstance#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#id SpannerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#labels SpannerInstance#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A unique identifier for the instance, which cannot be changed after the instance is created.

The name must be between 6 and 30 characters
in length.
If not provided, a random string starting with 'tf-' will be selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#name SpannerInstance#name}

---

##### `num_nodes`<sup>Optional</sup> <a name="num_nodes" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.numNodes"></a>

```python
num_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of nodes allocated to this instance. Exactly one of either node_count or processing_units must be present in terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#num_nodes SpannerInstance#num_nodes}

---

##### `processing_units`<sup>Optional</sup> <a name="processing_units" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.processingUnits"></a>

```python
processing_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of processing units allocated to this instance. Exactly one of processing_units or node_count must be present in terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#processing_units SpannerInstance#processing_units}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#project SpannerInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.spannerInstance.SpannerInstanceConfig.property.timeouts"></a>

```python
timeouts: SpannerInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts">SpannerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#timeouts SpannerInstance#timeouts}

---

### SpannerInstanceTimeouts <a name="SpannerInstanceTimeouts" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance

spannerInstance.SpannerInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#create SpannerInstance#create}. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#delete SpannerInstance#delete}. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#update SpannerInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#create SpannerInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#delete SpannerInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#update SpannerInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList <a name="SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance

spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>]]

---


### SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference <a name="SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance

spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putOverrides">put_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putReplicaSelection">put_replica_selection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_overrides` <a name="put_overrides" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putOverrides"></a>

```python
def put_overrides(
  autoscaling_limits: SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits
) -> None
```

###### `autoscaling_limits`<sup>Required</sup> <a name="autoscaling_limits" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putOverrides.parameter.autoscalingLimits"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a>

autoscaling_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#autoscaling_limits SpannerInstance#autoscaling_limits}

---

##### `put_replica_selection` <a name="put_replica_selection" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putReplicaSelection"></a>

```python
def put_replica_selection(
  location: str
) -> None
```

###### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putReplicaSelection.parameter.location"></a>

- *Type:* str

The location of the replica to apply asymmetric autoscaling options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#location SpannerInstance#location}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.replicaSelection">replica_selection</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.overridesInput">overrides_input</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.replicaSelectionInput">replica_selection_input</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.overrides"></a>

```python
overrides: SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference</a>

---

##### `replica_selection`<sup>Required</sup> <a name="replica_selection" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.replicaSelection"></a>

```python
replica_selection: SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference</a>

---

##### `overrides_input`<sup>Optional</sup> <a name="overrides_input" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.overridesInput"></a>

```python
overrides_input: SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a>

---

##### `replica_selection_input`<sup>Optional</sup> <a name="replica_selection_input" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.replicaSelectionInput"></a>

```python
replica_selection_input: SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>]

---


### SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference <a name="SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance

spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.maxNodesInput">max_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.minNodesInput">min_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.maxNodes">max_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.minNodes">min_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_nodes_input`<sup>Optional</sup> <a name="max_nodes_input" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.maxNodesInput"></a>

```python
max_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_nodes_input`<sup>Optional</sup> <a name="min_nodes_input" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.minNodesInput"></a>

```python
min_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_nodes`<sup>Required</sup> <a name="max_nodes" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.maxNodes"></a>

```python
max_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_nodes`<sup>Required</sup> <a name="min_nodes" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.minNodes"></a>

```python
min_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.internalValue"></a>

```python
internal_value: SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a>

---


### SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference <a name="SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance

spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.putAutoscalingLimits">put_autoscaling_limits</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_autoscaling_limits` <a name="put_autoscaling_limits" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.putAutoscalingLimits"></a>

```python
def put_autoscaling_limits(
  max_nodes: typing.Union[int, float],
  min_nodes: typing.Union[int, float]
) -> None
```

###### `max_nodes`<sup>Required</sup> <a name="max_nodes" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.putAutoscalingLimits.parameter.maxNodes"></a>

- *Type:* typing.Union[int, float]

The maximum number of nodes for this specific replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#max_nodes SpannerInstance#max_nodes}

---

###### `min_nodes`<sup>Required</sup> <a name="min_nodes" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.putAutoscalingLimits.parameter.minNodes"></a>

- *Type:* typing.Union[int, float]

The minimum number of nodes for this specific replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#min_nodes SpannerInstance#min_nodes}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingLimits">autoscaling_limits</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingLimitsInput">autoscaling_limits_input</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autoscaling_limits`<sup>Required</sup> <a name="autoscaling_limits" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingLimits"></a>

```python
autoscaling_limits: SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference</a>

---

##### `autoscaling_limits_input`<sup>Optional</sup> <a name="autoscaling_limits_input" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingLimitsInput"></a>

```python
autoscaling_limits_input: SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.internalValue"></a>

```python
internal_value: SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a>

---


### SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference <a name="SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance

spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.internalValue"></a>

```python
internal_value: SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a>

---


### SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference <a name="SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance

spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxNodes">reset_max_nodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxProcessingUnits">reset_max_processing_units</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMinNodes">reset_min_nodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMinProcessingUnits">reset_min_processing_units</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_nodes` <a name="reset_max_nodes" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxNodes"></a>

```python
def reset_max_nodes() -> None
```

##### `reset_max_processing_units` <a name="reset_max_processing_units" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxProcessingUnits"></a>

```python
def reset_max_processing_units() -> None
```

##### `reset_min_nodes` <a name="reset_min_nodes" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMinNodes"></a>

```python
def reset_min_nodes() -> None
```

##### `reset_min_processing_units` <a name="reset_min_processing_units" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMinProcessingUnits"></a>

```python
def reset_min_processing_units() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodesInput">max_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnitsInput">max_processing_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodesInput">min_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnitsInput">min_processing_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodes">max_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnits">max_processing_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodes">min_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnits">min_processing_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits">SpannerInstanceAutoscalingConfigAutoscalingLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_nodes_input`<sup>Optional</sup> <a name="max_nodes_input" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodesInput"></a>

```python
max_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_processing_units_input`<sup>Optional</sup> <a name="max_processing_units_input" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnitsInput"></a>

```python
max_processing_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_nodes_input`<sup>Optional</sup> <a name="min_nodes_input" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodesInput"></a>

```python
min_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_processing_units_input`<sup>Optional</sup> <a name="min_processing_units_input" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnitsInput"></a>

```python
min_processing_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_nodes`<sup>Required</sup> <a name="max_nodes" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodes"></a>

```python
max_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_processing_units`<sup>Required</sup> <a name="max_processing_units" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnits"></a>

```python
max_processing_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_nodes`<sup>Required</sup> <a name="min_nodes" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodes"></a>

```python
min_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_processing_units`<sup>Required</sup> <a name="min_processing_units" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnits"></a>

```python
min_processing_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.internalValue"></a>

```python
internal_value: SpannerInstanceAutoscalingConfigAutoscalingLimits
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits">SpannerInstanceAutoscalingConfigAutoscalingLimits</a>

---


### SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference <a name="SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance

spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resetHighPriorityCpuUtilizationPercent">reset_high_priority_cpu_utilization_percent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resetStorageUtilizationPercent">reset_storage_utilization_percent</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_high_priority_cpu_utilization_percent` <a name="reset_high_priority_cpu_utilization_percent" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resetHighPriorityCpuUtilizationPercent"></a>

```python
def reset_high_priority_cpu_utilization_percent() -> None
```

##### `reset_storage_utilization_percent` <a name="reset_storage_utilization_percent" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resetStorageUtilizationPercent"></a>

```python
def reset_storage_utilization_percent() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercentInput">high_priority_cpu_utilization_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercentInput">storage_utilization_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercent">high_priority_cpu_utilization_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercent">storage_utilization_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets">SpannerInstanceAutoscalingConfigAutoscalingTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `high_priority_cpu_utilization_percent_input`<sup>Optional</sup> <a name="high_priority_cpu_utilization_percent_input" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercentInput"></a>

```python
high_priority_cpu_utilization_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_utilization_percent_input`<sup>Optional</sup> <a name="storage_utilization_percent_input" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercentInput"></a>

```python
storage_utilization_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `high_priority_cpu_utilization_percent`<sup>Required</sup> <a name="high_priority_cpu_utilization_percent" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercent"></a>

```python
high_priority_cpu_utilization_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_utilization_percent`<sup>Required</sup> <a name="storage_utilization_percent" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercent"></a>

```python
storage_utilization_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.internalValue"></a>

```python
internal_value: SpannerInstanceAutoscalingConfigAutoscalingTargets
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets">SpannerInstanceAutoscalingConfigAutoscalingTargets</a>

---


### SpannerInstanceAutoscalingConfigOutputReference <a name="SpannerInstanceAutoscalingConfigOutputReference" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance

spannerInstance.SpannerInstanceAutoscalingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAsymmetricAutoscalingOptions">put_asymmetric_autoscaling_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAutoscalingLimits">put_autoscaling_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAutoscalingTargets">put_autoscaling_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.resetAsymmetricAutoscalingOptions">reset_asymmetric_autoscaling_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.resetAutoscalingLimits">reset_autoscaling_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.resetAutoscalingTargets">reset_autoscaling_targets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_asymmetric_autoscaling_options` <a name="put_asymmetric_autoscaling_options" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAsymmetricAutoscalingOptions"></a>

```python
def put_asymmetric_autoscaling_options(
  value: typing.Union[IResolvable, typing.List[SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAsymmetricAutoscalingOptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>]]

---

##### `put_autoscaling_limits` <a name="put_autoscaling_limits" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAutoscalingLimits"></a>

```python
def put_autoscaling_limits(
  max_nodes: typing.Union[int, float] = None,
  max_processing_units: typing.Union[int, float] = None,
  min_nodes: typing.Union[int, float] = None,
  min_processing_units: typing.Union[int, float] = None
) -> None
```

###### `max_nodes`<sup>Optional</sup> <a name="max_nodes" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAutoscalingLimits.parameter.maxNodes"></a>

- *Type:* typing.Union[int, float]

Specifies maximum number of nodes allocated to the instance.

If set, this number
should be greater than or equal to min_nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#max_nodes SpannerInstance#max_nodes}

---

###### `max_processing_units`<sup>Optional</sup> <a name="max_processing_units" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAutoscalingLimits.parameter.maxProcessingUnits"></a>

- *Type:* typing.Union[int, float]

Specifies maximum number of processing units allocated to the instance.

If set, this number should be multiples of 1000 and be greater than or equal to
min_processing_units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#max_processing_units SpannerInstance#max_processing_units}

---

###### `min_nodes`<sup>Optional</sup> <a name="min_nodes" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAutoscalingLimits.parameter.minNodes"></a>

- *Type:* typing.Union[int, float]

Specifies number of nodes allocated to the instance. If set, this number should be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#min_nodes SpannerInstance#min_nodes}

---

###### `min_processing_units`<sup>Optional</sup> <a name="min_processing_units" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAutoscalingLimits.parameter.minProcessingUnits"></a>

- *Type:* typing.Union[int, float]

Specifies minimum number of processing units allocated to the instance. If set, this number should be multiples of 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#min_processing_units SpannerInstance#min_processing_units}

---

##### `put_autoscaling_targets` <a name="put_autoscaling_targets" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAutoscalingTargets"></a>

```python
def put_autoscaling_targets(
  high_priority_cpu_utilization_percent: typing.Union[int, float] = None,
  storage_utilization_percent: typing.Union[int, float] = None
) -> None
```

###### `high_priority_cpu_utilization_percent`<sup>Optional</sup> <a name="high_priority_cpu_utilization_percent" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAutoscalingTargets.parameter.highPriorityCpuUtilizationPercent"></a>

- *Type:* typing.Union[int, float]

Specifies the target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance.

This number is on a scale from 0 (no utilization) to 100 (full utilization)..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#high_priority_cpu_utilization_percent SpannerInstance#high_priority_cpu_utilization_percent}

---

###### `storage_utilization_percent`<sup>Optional</sup> <a name="storage_utilization_percent" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.putAutoscalingTargets.parameter.storageUtilizationPercent"></a>

- *Type:* typing.Union[int, float]

Specifies the target storage utilization percentage that the autoscaler should be trying to achieve for the instance.

This number is on a scale from 0 (no utilization) to 100 (full utilization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/spanner_instance#storage_utilization_percent SpannerInstance#storage_utilization_percent}

---

##### `reset_asymmetric_autoscaling_options` <a name="reset_asymmetric_autoscaling_options" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.resetAsymmetricAutoscalingOptions"></a>

```python
def reset_asymmetric_autoscaling_options() -> None
```

##### `reset_autoscaling_limits` <a name="reset_autoscaling_limits" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.resetAutoscalingLimits"></a>

```python
def reset_autoscaling_limits() -> None
```

##### `reset_autoscaling_targets` <a name="reset_autoscaling_targets" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.resetAutoscalingTargets"></a>

```python
def reset_autoscaling_targets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.asymmetricAutoscalingOptions">asymmetric_autoscaling_options</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.autoscalingLimits">autoscaling_limits</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference">SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.autoscalingTargets">autoscaling_targets</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference">SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.asymmetricAutoscalingOptionsInput">asymmetric_autoscaling_options_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.autoscalingLimitsInput">autoscaling_limits_input</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits">SpannerInstanceAutoscalingConfigAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.autoscalingTargetsInput">autoscaling_targets_input</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets">SpannerInstanceAutoscalingConfigAutoscalingTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig">SpannerInstanceAutoscalingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `asymmetric_autoscaling_options`<sup>Required</sup> <a name="asymmetric_autoscaling_options" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.asymmetricAutoscalingOptions"></a>

```python
asymmetric_autoscaling_options: SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList</a>

---

##### `autoscaling_limits`<sup>Required</sup> <a name="autoscaling_limits" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.autoscalingLimits"></a>

```python
autoscaling_limits: SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference">SpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference</a>

---

##### `autoscaling_targets`<sup>Required</sup> <a name="autoscaling_targets" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.autoscalingTargets"></a>

```python
autoscaling_targets: SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference">SpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference</a>

---

##### `asymmetric_autoscaling_options_input`<sup>Optional</sup> <a name="asymmetric_autoscaling_options_input" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.asymmetricAutoscalingOptionsInput"></a>

```python
asymmetric_autoscaling_options_input: typing.Union[IResolvable, typing.List[SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">SpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>]]

---

##### `autoscaling_limits_input`<sup>Optional</sup> <a name="autoscaling_limits_input" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.autoscalingLimitsInput"></a>

```python
autoscaling_limits_input: SpannerInstanceAutoscalingConfigAutoscalingLimits
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingLimits">SpannerInstanceAutoscalingConfigAutoscalingLimits</a>

---

##### `autoscaling_targets_input`<sup>Optional</sup> <a name="autoscaling_targets_input" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.autoscalingTargetsInput"></a>

```python
autoscaling_targets_input: SpannerInstanceAutoscalingConfigAutoscalingTargets
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigAutoscalingTargets">SpannerInstanceAutoscalingConfigAutoscalingTargets</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfigOutputReference.property.internalValue"></a>

```python
internal_value: SpannerInstanceAutoscalingConfig
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceAutoscalingConfig">SpannerInstanceAutoscalingConfig</a>

---


### SpannerInstanceTimeoutsOutputReference <a name="SpannerInstanceTimeoutsOutputReference" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance

spannerInstance.SpannerInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts">SpannerInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.spannerInstance.SpannerInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SpannerInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.spannerInstance.SpannerInstanceTimeouts">SpannerInstanceTimeouts</a>]

---



