# `spannerInstancePartition` Submodule <a name="`spannerInstancePartition` Submodule" id="@cdktf/provider-google.spannerInstancePartition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpannerInstancePartition <a name="SpannerInstancePartition" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition google_spanner_instance_partition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance_partition

spannerInstancePartition.SpannerInstancePartition(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  config: str,
  display_name: str,
  instance: str,
  name: str,
  id: str = None,
  node_count: typing.Union[int, float] = None,
  processing_units: typing.Union[int, float] = None,
  project: str = None,
  timeouts: SpannerInstancePartitionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.config">config</a></code> | <code>str</code> | The name of the instance partition's configuration (similar to a region) which defines the geographic placement and replication of data in this instance partition. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The descriptive name for this instance partition as it appears in UIs. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.instance">instance</a></code> | <code>str</code> | The instance to create the instance partition in. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.name">name</a></code> | <code>str</code> | A unique identifier for the instance partition, which cannot be changed after the instance partition is created. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#id SpannerInstancePartition#id}. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | The number of nodes allocated to this instance partition. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.processingUnits">processing_units</a></code> | <code>typing.Union[int, float]</code> | The number of processing units allocated to this instance partition. Exactly one of either node_count or processing_units must be present. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#project SpannerInstancePartition#project}. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.config"></a>

- *Type:* str

The name of the instance partition's configuration (similar to a region) which defines the geographic placement and replication of data in this instance partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#config SpannerInstancePartition#config}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.displayName"></a>

- *Type:* str

The descriptive name for this instance partition as it appears in UIs.

Must be unique per project and between 4 and 30 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#display_name SpannerInstancePartition#display_name}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.instance"></a>

- *Type:* str

The instance to create the instance partition in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#instance SpannerInstancePartition#instance}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.name"></a>

- *Type:* str

A unique identifier for the instance partition, which cannot be changed after the instance partition is created.

The name must be between 2 and 64 characters
and match the regular expression [a-z][a-z0-9\-]{0,61}[a-z0-9].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#name SpannerInstancePartition#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#id SpannerInstancePartition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

The number of nodes allocated to this instance partition.

One node equals
1000 processing units. Exactly one of either node_count or processing_units
must be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#node_count SpannerInstancePartition#node_count}

---

##### `processing_units`<sup>Optional</sup> <a name="processing_units" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.processingUnits"></a>

- *Type:* typing.Union[int, float]

The number of processing units allocated to this instance partition. Exactly one of either node_count or processing_units must be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#processing_units SpannerInstancePartition#processing_units}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#project SpannerInstancePartition#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#timeouts SpannerInstancePartition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.resetNodeCount">reset_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.resetProcessingUnits">reset_processing_units</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#create SpannerInstancePartition#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#delete SpannerInstancePartition#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#update SpannerInstancePartition#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_node_count` <a name="reset_node_count" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.resetNodeCount"></a>

```python
def reset_node_count() -> None
```

##### `reset_processing_units` <a name="reset_processing_units" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.resetProcessingUnits"></a>

```python
def reset_processing_units() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SpannerInstancePartition resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance_partition

spannerInstancePartition.SpannerInstancePartition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance_partition

spannerInstancePartition.SpannerInstancePartition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance_partition

spannerInstancePartition.SpannerInstancePartition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance_partition

spannerInstancePartition.SpannerInstancePartition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SpannerInstancePartition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SpannerInstancePartition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SpannerInstancePartition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpannerInstancePartition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference">SpannerInstancePartitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.configInput">config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.processingUnitsInput">processing_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.config">config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.processingUnits">processing_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.timeouts"></a>

```python
timeouts: SpannerInstancePartitionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference">SpannerInstancePartitionTimeoutsOutputReference</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.configInput"></a>

```python
config_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `processing_units_input`<sup>Optional</sup> <a name="processing_units_input" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.processingUnitsInput"></a>

```python
processing_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | SpannerInstancePartitionTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.config"></a>

```python
config: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `processing_units`<sup>Required</sup> <a name="processing_units" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.processingUnits"></a>

```python
processing_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SpannerInstancePartitionConfig <a name="SpannerInstancePartitionConfig" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance_partition

spannerInstancePartition.SpannerInstancePartitionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  config: str,
  display_name: str,
  instance: str,
  name: str,
  id: str = None,
  node_count: typing.Union[int, float] = None,
  processing_units: typing.Union[int, float] = None,
  project: str = None,
  timeouts: SpannerInstancePartitionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.config">config</a></code> | <code>str</code> | The name of the instance partition's configuration (similar to a region) which defines the geographic placement and replication of data in this instance partition. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.displayName">display_name</a></code> | <code>str</code> | The descriptive name for this instance partition as it appears in UIs. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.instance">instance</a></code> | <code>str</code> | The instance to create the instance partition in. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.name">name</a></code> | <code>str</code> | A unique identifier for the instance partition, which cannot be changed after the instance partition is created. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#id SpannerInstancePartition#id}. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | The number of nodes allocated to this instance partition. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.processingUnits">processing_units</a></code> | <code>typing.Union[int, float]</code> | The number of processing units allocated to this instance partition. Exactly one of either node_count or processing_units must be present. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#project SpannerInstancePartition#project}. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.config"></a>

```python
config: str
```

- *Type:* str

The name of the instance partition's configuration (similar to a region) which defines the geographic placement and replication of data in this instance partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#config SpannerInstancePartition#config}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The descriptive name for this instance partition as it appears in UIs.

Must be unique per project and between 4 and 30 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#display_name SpannerInstancePartition#display_name}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

The instance to create the instance partition in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#instance SpannerInstancePartition#instance}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A unique identifier for the instance partition, which cannot be changed after the instance partition is created.

The name must be between 2 and 64 characters
and match the regular expression [a-z][a-z0-9\-]{0,61}[a-z0-9].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#name SpannerInstancePartition#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#id SpannerInstancePartition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of nodes allocated to this instance partition.

One node equals
1000 processing units. Exactly one of either node_count or processing_units
must be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#node_count SpannerInstancePartition#node_count}

---

##### `processing_units`<sup>Optional</sup> <a name="processing_units" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.processingUnits"></a>

```python
processing_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of processing units allocated to this instance partition. Exactly one of either node_count or processing_units must be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#processing_units SpannerInstancePartition#processing_units}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#project SpannerInstancePartition#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.timeouts"></a>

```python
timeouts: SpannerInstancePartitionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#timeouts SpannerInstancePartition#timeouts}

---

### SpannerInstancePartitionTimeouts <a name="SpannerInstancePartitionTimeouts" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance_partition

spannerInstancePartition.SpannerInstancePartitionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#create SpannerInstancePartition#create}. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#delete SpannerInstancePartition#delete}. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#update SpannerInstancePartition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#create SpannerInstancePartition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#delete SpannerInstancePartition#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/spanner_instance_partition#update SpannerInstancePartition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpannerInstancePartitionTimeoutsOutputReference <a name="SpannerInstancePartitionTimeoutsOutputReference" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import spanner_instance_partition

spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SpannerInstancePartitionTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a>

---



