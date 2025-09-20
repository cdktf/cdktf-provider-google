# `computeInstanceGroupMembership` Submodule <a name="`computeInstanceGroupMembership` Submodule" id="@cdktf/provider-google.computeInstanceGroupMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInstanceGroupMembership <a name="ComputeInstanceGroupMembership" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_instance_group_membership google_compute_instance_group_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_group_membership

computeInstanceGroupMembership.ComputeInstanceGroupMembership(
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
  instance_group: str,
  id: str = None,
  project: str = None,
  timeouts: ComputeInstanceGroupMembershipTimeouts = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.instance">instance</a></code> | <code>str</code> | An instance being added to the InstanceGroup. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.instanceGroup">instance_group</a></code> | <code>str</code> | Represents an Instance Group resource name that the instance belongs to. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_instance_group_membership#id ComputeInstanceGroupMembership#id}. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_instance_group_membership#project ComputeInstanceGroupMembership#project}. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts">ComputeInstanceGroupMembershipTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.zone">zone</a></code> | <code>str</code> | A reference to the zone where the instance group resides. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.instance"></a>

- *Type:* str

An instance being added to the InstanceGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_instance_group_membership#instance ComputeInstanceGroupMembership#instance}

---

##### `instance_group`<sup>Required</sup> <a name="instance_group" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.instanceGroup"></a>

- *Type:* str

Represents an Instance Group resource name that the instance belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_instance_group_membership#instance_group ComputeInstanceGroupMembership#instance_group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_instance_group_membership#id ComputeInstanceGroupMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_instance_group_membership#project ComputeInstanceGroupMembership#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts">ComputeInstanceGroupMembershipTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_instance_group_membership#timeouts ComputeInstanceGroupMembership#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.Initializer.parameter.zone"></a>

- *Type:* str

A reference to the zone where the instance group resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_instance_group_membership#zone ComputeInstanceGroupMembership#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_instance_group_membership#create ComputeInstanceGroupMembership#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_instance_group_membership#delete ComputeInstanceGroupMembership#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeInstanceGroupMembership resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_group_membership

computeInstanceGroupMembership.ComputeInstanceGroupMembership.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_group_membership

computeInstanceGroupMembership.ComputeInstanceGroupMembership.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_group_membership

computeInstanceGroupMembership.ComputeInstanceGroupMembership.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_group_membership

computeInstanceGroupMembership.ComputeInstanceGroupMembership.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeInstanceGroupMembership resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeInstanceGroupMembership to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeInstanceGroupMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_instance_group_membership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeInstanceGroupMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference">ComputeInstanceGroupMembershipTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.instanceGroupInput">instance_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts">ComputeInstanceGroupMembershipTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.instanceGroup">instance_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.timeouts"></a>

```python
timeouts: ComputeInstanceGroupMembershipTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference">ComputeInstanceGroupMembershipTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_group_input`<sup>Optional</sup> <a name="instance_group_input" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.instanceGroupInput"></a>

```python
instance_group_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeInstanceGroupMembershipTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts">ComputeInstanceGroupMembershipTimeouts</a>]

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `instance_group`<sup>Required</sup> <a name="instance_group" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.instanceGroup"></a>

```python
instance_group: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembership.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInstanceGroupMembershipConfig <a name="ComputeInstanceGroupMembershipConfig" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_group_membership

computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance: str,
  instance_group: str,
  id: str = None,
  project: str = None,
  timeouts: ComputeInstanceGroupMembershipTimeouts = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.instance">instance</a></code> | <code>str</code> | An instance being added to the InstanceGroup. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.instanceGroup">instance_group</a></code> | <code>str</code> | Represents an Instance Group resource name that the instance belongs to. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_instance_group_membership#id ComputeInstanceGroupMembership#id}. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_instance_group_membership#project ComputeInstanceGroupMembership#project}. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts">ComputeInstanceGroupMembershipTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.zone">zone</a></code> | <code>str</code> | A reference to the zone where the instance group resides. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

An instance being added to the InstanceGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_instance_group_membership#instance ComputeInstanceGroupMembership#instance}

---

##### `instance_group`<sup>Required</sup> <a name="instance_group" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.instanceGroup"></a>

```python
instance_group: str
```

- *Type:* str

Represents an Instance Group resource name that the instance belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_instance_group_membership#instance_group ComputeInstanceGroupMembership#instance_group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_instance_group_membership#id ComputeInstanceGroupMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_instance_group_membership#project ComputeInstanceGroupMembership#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.timeouts"></a>

```python
timeouts: ComputeInstanceGroupMembershipTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts">ComputeInstanceGroupMembershipTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_instance_group_membership#timeouts ComputeInstanceGroupMembership#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

A reference to the zone where the instance group resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_instance_group_membership#zone ComputeInstanceGroupMembership#zone}

---

### ComputeInstanceGroupMembershipTimeouts <a name="ComputeInstanceGroupMembershipTimeouts" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_group_membership

computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_instance_group_membership#create ComputeInstanceGroupMembership#create}. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_instance_group_membership#delete ComputeInstanceGroupMembership#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_instance_group_membership#create ComputeInstanceGroupMembership#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_instance_group_membership#delete ComputeInstanceGroupMembership#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInstanceGroupMembershipTimeoutsOutputReference <a name="ComputeInstanceGroupMembershipTimeoutsOutputReference" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_group_membership

computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts">ComputeInstanceGroupMembershipTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeInstanceGroupMembershipTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInstanceGroupMembership.ComputeInstanceGroupMembershipTimeouts">ComputeInstanceGroupMembershipTimeouts</a>]

---



