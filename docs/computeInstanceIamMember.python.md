# `computeInstanceIamMember` Submodule <a name="`computeInstanceIamMember` Submodule" id="@cdktf/provider-google.computeInstanceIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInstanceIamMember <a name="ComputeInstanceIamMember" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member google_compute_instance_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_iam_member

computeInstanceIamMember.ComputeInstanceIamMember(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_name: str,
  member: str,
  role: str,
  condition: ComputeInstanceIamMemberCondition = None,
  id: str = None,
  project: str = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.instanceName">instance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#instance_name ComputeInstanceIamMember#instance_name}. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#member ComputeInstanceIamMember#member}. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#role ComputeInstanceIamMember#role}. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberCondition">ComputeInstanceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#id ComputeInstanceIamMember#id}. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#project ComputeInstanceIamMember#project}. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#zone ComputeInstanceIamMember#zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.instanceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#instance_name ComputeInstanceIamMember#instance_name}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.member"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#member ComputeInstanceIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#role ComputeInstanceIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberCondition">ComputeInstanceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#condition ComputeInstanceIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#id ComputeInstanceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#project ComputeInstanceIamMember#project}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.Initializer.parameter.zone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#zone ComputeInstanceIamMember#zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#expression ComputeInstanceIamMember#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#title ComputeInstanceIamMember#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#description ComputeInstanceIamMember#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeInstanceIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_iam_member

computeInstanceIamMember.ComputeInstanceIamMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_iam_member

computeInstanceIamMember.ComputeInstanceIamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_iam_member

computeInstanceIamMember.ComputeInstanceIamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_iam_member

computeInstanceIamMember.ComputeInstanceIamMember.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeInstanceIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeInstanceIamMember to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeInstanceIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeInstanceIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference">ComputeInstanceIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberCondition">ComputeInstanceIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.instanceNameInput">instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.memberInput">member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.condition"></a>

```python
condition: ComputeInstanceIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference">ComputeInstanceIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.conditionInput"></a>

```python
condition_input: ComputeInstanceIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberCondition">ComputeInstanceIamMemberCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_name_input`<sup>Optional</sup> <a name="instance_name_input" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.instanceNameInput"></a>

```python
instance_name_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.memberInput"></a>

```python
member_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInstanceIamMemberCondition <a name="ComputeInstanceIamMemberCondition" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_iam_member

computeInstanceIamMember.ComputeInstanceIamMemberCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#expression ComputeInstanceIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#title ComputeInstanceIamMember#title}. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#description ComputeInstanceIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#expression ComputeInstanceIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#title ComputeInstanceIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#description ComputeInstanceIamMember#description}.

---

### ComputeInstanceIamMemberConfig <a name="ComputeInstanceIamMemberConfig" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_iam_member

computeInstanceIamMember.ComputeInstanceIamMemberConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_name: str,
  member: str,
  role: str,
  condition: ComputeInstanceIamMemberCondition = None,
  id: str = None,
  project: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.instanceName">instance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#instance_name ComputeInstanceIamMember#instance_name}. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#member ComputeInstanceIamMember#member}. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#role ComputeInstanceIamMember#role}. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberCondition">ComputeInstanceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#id ComputeInstanceIamMember#id}. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#project ComputeInstanceIamMember#project}. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.zone">zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#zone ComputeInstanceIamMember#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#instance_name ComputeInstanceIamMember#instance_name}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.member"></a>

```python
member: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#member ComputeInstanceIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#role ComputeInstanceIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.condition"></a>

```python
condition: ComputeInstanceIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberCondition">ComputeInstanceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#condition ComputeInstanceIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#id ComputeInstanceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#project ComputeInstanceIamMember#project}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/compute_instance_iam_member#zone ComputeInstanceIamMember#zone}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInstanceIamMemberConditionOutputReference <a name="ComputeInstanceIamMemberConditionOutputReference" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_instance_iam_member

computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberCondition">ComputeInstanceIamMemberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberConditionOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInstanceIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceIamMember.ComputeInstanceIamMemberCondition">ComputeInstanceIamMemberCondition</a>

---



